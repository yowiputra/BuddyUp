import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class Dropdown extends Component {
  render () {
    return (
      <DropdownButton title="&#9776;">
        <MenuItem href="#">Profile</MenuItem>
        <MenuItem href="/signup">Sign Up</MenuItem>
        <MenuItem href="/login">Log In</MenuItem>
        <MenuItem href="#">Log Out </MenuItem>
      </DropdownButton>
    )
  }
}

export default Dropdown;