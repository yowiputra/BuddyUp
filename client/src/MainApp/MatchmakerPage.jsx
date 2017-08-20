import React, { Component } from 'react';
import MatchmakerEvent from './MatchmakerEvent.jsx';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import Slider from './Slider.jsx';
import jwt from 'jsonwebtoken';

class MatchmakerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compatUsers: [],
      defaultValue: 50,
      currentUserName: ''
    };
    this.updateCompat = this.updateCompat.bind(this);
    this.updateDefaultValue = this.updateDefaultValue.bind(this);
    this.updateCurrentUserName = this.updateCurrentUserName.bind(this);
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
        console.log("DID THIS AUTHENTICATE??!!!", username);
        c.updateCurrentUserName(username);
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
      <div>
        <Slider onSliderUpdate={ this.updateUserSeriousness } sliderDefaultValue={this.state.defaultValue}/>
        <MatchmakerEvent compatUsers={this.state.compatUsers} inviteUserB = {this.inviteUserB}/>
      </div>
    );
  }
}

export default MatchmakerPage;
