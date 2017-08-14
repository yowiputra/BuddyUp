import React, {Component} from 'react';
<<<<<<< HEAD
import Dropdown from './Dropdown.jsx'
=======
import io from 'socket.io-client';
const socket = io.connect('http://127.0.0.1:3001');
>>>>>>> 1853e3e0db41257006a6d7814052d07350bd994e

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
<<<<<<< HEAD
        <nav className="navbar">
          <p className="title">BuddyUp</p>
          <Dropdown />
        </nav>
=======
>>>>>>> 1853e3e0db41257006a6d7814052d07350bd994e
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default App;
