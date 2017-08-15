import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import io from 'socket.io-client';
import SignupPage from './SignupPage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greetings from './Greetings.jsx';
import NavigationBar from './NavigationBar.jsx';
import LoginPage from './LoginPage.jsx';
import ProfilePage from './ProfilePage.jsx';

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
      <div className="container">
        <NavigationBar />
        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
      </div>
    );
  }
}

const style = {
   margin: 15,
};

export default App;
