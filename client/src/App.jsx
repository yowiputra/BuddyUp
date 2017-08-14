import React, {Component} from 'react';
import Dropdown from './Dropdown.jsx';
import io from 'socket.io-client';

const socket = io.connect('http://127.0.0.1:3001');

class App extends Component {

  componentDidMount() {
    console.log("componentDidMount <App />");
    socket.on("connect", function () {
      console.log("Connected!");
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <p className="title">BuddyUp</p>
          <Dropdown />
        </nav>
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default App;
