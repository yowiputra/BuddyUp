import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import io from 'socket.io-client';
import Main from './Main.jsx';
import SignupPage from './SignupPage.jsx';
import Greetings from './Greetings.jsx';
import NavigationBar from './NavigationBar.jsx';
import LoginPage from './LoginPage.jsx';

const socket = io.connect('http://127.0.0.1:3001');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    socket.on("connect", function () {
      console.log("Connected!");
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <NavigationBar />
        </div>
        <h1><strong>Here are your matches:</strong></h1>
        <Main />
      </div>
    );
  }
}

export default App;
