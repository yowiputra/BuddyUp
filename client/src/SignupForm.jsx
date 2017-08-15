import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextFieldGroup from './common/TextFieldGroup.jsx';
import { browserHistory } from 'react-router';


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ errors:{}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {
        this.context.router.history.push('/');
      },
      ({ data }) => this.setState({ errors:data, isLoading: false })
    );
  }

  render () {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join BuddyUp!</h1>

          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            value={this.state.username}
            field="username"
          />
          <TextFieldGroup
            error={errors.email}
            label="Email"
            onChange={this.onChange}
            value={this.state.email}
            field="email"
          />          
          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
          />
          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
          />

          <div className="form-group">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}
SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;