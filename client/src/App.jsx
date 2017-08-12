import React, {Component} from 'react';
import Dropdown from './Dropdown.jsx'

class App extends Component {
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
