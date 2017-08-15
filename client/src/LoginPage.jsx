import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';


class LoginPage extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm />
        </div>
      </div>
    );
  }
}


export default LoginPage;