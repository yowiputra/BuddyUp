import React, { Component } from 'react';
import MatchmakerEvent from './MatchmakerEvent.jsx';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import Slider from './Slider.jsx';
import jwt from 'jsonwebtoken';
import PopupChat from './PopupChat.jsx';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
const uuidv4 = require('uuid/v4');

class MatchmakerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compatUsers: [],
      defaultValue: 50,
      currentUserName: '',
      ownUserName: this.props.auth.user.username,
      messages: [],
      showChat: false,
      roomName: '',
    };
    //refactor binding like acceptInviation()
    this.updateCompat = this.updateCompat.bind(this);
    this.updateDefaultValue = this.updateDefaultValue.bind(this);
    this.updateCurrentUserName = this.updateCurrentUserName.bind(this);
    this.newPost = this.newPost.bind(this)
  }




  openPopupbox (senderData, receiverData) {
    //receiverData currently has password information
    const content = (
      <div>
        <button onClick={(event) => {this.acceptInvitation(senderData, receiverData); this.closePopupBox()}}>Accept</button>
        <button onClick>{this.declineInivation}>Decline</button>
      </div>
    )
    PopupboxManager.open({ content })
  }

  closePopupBox () {
    PopupboxManager.close()    
  }
  acceptInvitation = (senderData, receiverData) => {
    const socket = this.props.socket
    console.log('sender data:', senderData.username)
    console.log('receiver data: ', receiverData.username)
    senderData.roomName = uuidv4()
    this.socket.emit('accepted invitation', JSON.stringify(senderData), JSON.stringify(receiverData) )
    this.setState({ showChat: true, roomName: senderData.roomName })
    console.log('accepted invitation')
  }

  declineInivation = () => {
    console.log('decline invitation')
  }

  completeUserInvitation = (senderData, receiverData) => {
    const parsedSenderData = JSON.parse(senderData)
    console.log('completed invitation process');
    this.socket.emit('completed invitation process', senderData, receiverData)
    this.setState({ roomName: parsedSenderData.roomName })
  }

  newPost(post) {
    const socket = this.props.socket
    const message = {
      type: "postMessage",
      username: this.state.ownUserName,
      message: post,
    }
    // ws.send(JSON.stringify(message))
    this.setState({ input: ''})
    // console.log(JSON.stringify(message))
    const chatbar = document.getElementById('chatbar');
    chatbar.value = '';
    this.socket.emit('send message', JSON.stringify(message), this.state.roomName)
    console.log('message sent')
  }

  updateMessages(data) {
    const broadcastedMessage = this.state.messages.concat(data);
    this.setState({
      messages: broadcastedMessage
    });
    console.log('this.set.messages: ', this.state.messages)
  }

  updateCompat(users) {
    console.log('before filter ', users);
    console.log('filter ', this.state.currentUserName);
    const filteredUsers = users.filter(user => user.username != this.state.currentUserName);
    console.log('after filter ', filteredUsers);
    this.setState({
      compatUsers: filteredUsers
    })
  }

  updateDefaultValue(seriousness) {
    this.setState({
      defaultValue: seriousness
    })
  }

  updateCurrentUserName(username){
    this.setState({
      currentUserName: username
    })
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = io.connect('http://localhost:3001');

    var c = this;
    this.socket.on("connect", () => {
      console.log("Connected!");
      this.socket
      .emit('authenticate', {token: localStorage.jwtToken}) //send the jwt
      .on('authenticated', function (username) {
        console.log("Authenticated");
      })
      .on('unauthorized', function(msg) {
        console.log("unauthorized: " + JSON.stringify(msg.data));
        throw new Error(msg.data.type);
      })
      .on('getDefaultSeriousness', function(seriousness){
        console.log(JSON.parse(seriousness));
        c.updateDefaultValue(JSON.parse(seriousness));
      })
      .on('onlinematchedSeriousnessUserIds', function(users, username) {
        c.updateCurrentUserName(username);
        c.updateCompat(JSON.parse(users));
      })
      .on('respondToInvite', function(senderData, receiverData){
        console.log('sender ', senderData);
        console.log('receiver ', receiverData);
        const parsedSenderData = JSON.parse(senderData);
        const parsedReceiverData = JSON.parse(receiverData);
        if(parsedReceiverData.username === c.state.currentUserName){
          const senderDataArr = c.state.compatUsers.filter(user => user.username === parsedSenderData.username)
          const senderData = senderDataArr[0];
          console.log('Respond to ', senderData.username, ' ?');
          c.openPopupbox(parsedSenderData, parsedReceiverData)

        }
      })
      .on('new message', function(data){
        const messageData = JSON.parse(data)
        const message = {username: messageData.username,
                          content: messageData.message,}
        console.log(message)
        c.updateMessages(message);
      })
      .on('receive accepted invitation', function(senderData, receiverData) {
        const parsedSenderData = JSON.parse(senderData)
        console.log('parsedSenderData: ', parsedSenderData.username)
        if(c.state.currentUserName === parsedSenderData.username) {
          console.log('receive accepted invitation!: ', senderData, receiverData)
          c.completeUserInvitation(senderData, receiverData)
          c.setState({ showChat: true });
        }
      })
      .on('disconnect', function(){
        this.socket.emit('disconnect');
      })
    });
  }

  updateUserSeriousness = (value) => {
    this.updateDefaultValue(value);
    this.socket.emit('updateSeriousness', JSON.stringify({ value }));
  }

  inviteUserB = (userData) => {
    this.socket.emit('sendInvite', this.state.currentUserName, JSON.stringify(userData));
  }

  render () {
    return (
      <div className="matchmaker-container">
        <div className="slider-container">
          <Slider onSliderUpdate={ this.updateUserSeriousness } sliderDefaultValue={this.state.defaultValue}/>
        </div>
        <div className="matchmakerEventAndChat-container">
          <div>
            <MatchmakerEvent compatUsers={this.state.compatUsers} inviteUserB = {this.inviteUserB}/>  
          </div>
          {this.state.showChat && 
          <div>     
            <PopupChat newPost={this.newPost} ownUownUserName={this.state.ownUserName} messages={this.state.messages} /> 
          </div>}
        </div>
        <PopupboxContainer />

      </div>
    );
  }
}

MatchmakerPage.PropTypes = {
  auth: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(MatchmakerPage);
