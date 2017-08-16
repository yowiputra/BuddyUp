import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/loginActions.jsx'
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class NavigationBar extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.context.router.history.push('/')
  }

  render () {

    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <DropdownButton title="&#9776;">
        <MenuItem href="/profile">Profile</MenuItem>
        <MenuItem href="#" onClick={this.logout.bind(this)}>Logout</MenuItem>
      </DropdownButton>
    );

    const guestLinks = (
      <DropdownButton title="&#9776;">      
        <MenuItem href="/signup">Sign up</MenuItem>
        <MenuItem href="/login">Login</MenuItem>   
      </DropdownButton>
    );
      
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/matchmaker" className="navbar-brand">Buddy Up</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              { isAuthenticated ? userLinks : guestLinks }  
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.PropTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);