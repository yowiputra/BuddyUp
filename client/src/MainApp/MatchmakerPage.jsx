import React, { Component } from 'react';
import MatchmakerEvent from './MatchmakerEvent.jsx';
import io from 'socket.io-client';
import { connect } from 'react-redux';

const socket = io.connect('http://localhost:3001');

class MatchmakerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    console.log("componentDidMount <App />");
 
    socket.on("connect", function () {
      socket
      .emit('authenticate', {token: localStorage.jwtToken}) //send the jwt
      .on('authenticated', function () {
        console.log("DID THIS AUTHENTICATE??!!!", localStorage.jwtToken)
      })
      .on('unauthorized', function(msg) {
        console.log("unauthorized: " + JSON.stringify(msg.data));
        throw new Error(msg.data.type);
      })
      console.log("Connected!");
    });
  }

  render () {
    return (
      <div>
        <MatchmakerEvent />
      </div>
    );
  }
}

export default MatchmakerPage;
