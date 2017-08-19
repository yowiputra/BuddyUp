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
      defaultValue: 90
    };
    this.updateCompat = this.updateCompat.bind(this);
    this.updateDefaultValue = this.updateDefaultValue.bind(this);
  }
  
  updateCompat(users) {
    //both users LC and Secret are included.
    this.setState({
      compatUsers: users
    })
  }

  updateDefaultValue(seriousness) {
    this.setState({
      defaultValue: seriousness
    })
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = io.connect('http://localhost:3001');
    
    var c = this;
    this.socket.on("connect", () => {
      this.socket
      .emit('authenticate', {token: localStorage.jwtToken}) //send the jwt
      .on('authenticated', function () {
        console.log("DID THIS AUTHENTICATE??!!!", localStorage.jwtToken)
      })
      .on('unauthorized', function(msg) {
        console.log("unauthorized: " + JSON.stringify(msg.data));
        throw new Error(msg.data.type);
      })
      .on('getDefaultSeriousness', function(seriousness){
        console.log(JSON.parse(seriousness));
        c.updateDefaultValue(JSON.parse(seriousness));
      })
      .on('onlinematchedSeriousnessUserIds', function(users) {
        console.log('before filter ', JSON.parse(users));
        console.log('jwt insides ', jwt.decode(localStorage.jwtToken).username);
        const filteredUsers = JSON.parse(users).filter(user => user.username != jwt.decode(localStorage.jwtToken).username)
        console.log('after filter ', filteredUsers);
        c.updateCompat(filteredUsers);
      })
      .on('disconnect', function(){
        this.socket.emit('disconnect');
      })
      console.log("Connected!");
    });
  }

  updateUserSeriousness = (value) => {
    this.updateDefaultValue(value);
    this.socket.emit('updateSeriousness', JSON.stringify({ value }));
  }

  inviteUserB = (userData) => {
    this.socket.emit('inviteUserB', JSON.stringify(userData));
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
