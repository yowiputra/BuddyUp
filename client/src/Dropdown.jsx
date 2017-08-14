import React, { Component } from 'react';
import Menu from 'react-menu';

const MenuTrigger = Menu.MenuTrigger;
const MenuOptions = Menu.MenuOptions;
const MenuOption = Menu.MenuOption;

class Dropdown extends Component {
  render () {
    return (
      <Menu>
        <MenuTrigger>
          <p className="dropdown">
            &#9776; 
          </p>
        </MenuTrigger>
        <MenuOptions>
          <MenuOption>
            Profile
          </MenuOption>
          <MenuOption>
            Log In
          </MenuOption>
          <MenuOption>
            Log Out
          </MenuOption>
          <MenuOption>
            Quit
          </MenuOption>
        </MenuOptions>
      </Menu>
    )
  }
}

export default Dropdown;