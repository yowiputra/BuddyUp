import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from './common/TextFieldGroup.jsx';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { userUpdateProfile } from '../actions/userDataActions.jsx'

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      tagline: '',
      blurb: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({ errors: {}, isLoading: true });
    this.props.userUpdateProfile(this.state).then(
      () => {
        this.context.router.history.push('/matchmaker');
      },
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Update Profileeeee</h1>

        <TextFieldGroup
          label="Tagline"
          onChange={this.onChange}
          value={this.state.tagline}
          field="tagline"
        />
        <TextFieldGroup
          label="Blurb"
          onChange={this.onChange}
          value={this.state.blurb}
          field="blurb"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Update Profile
            </button>
        </div>
      </form>
    )
  }
}

ProfileForm.propTypes = {
  userUpdateProfile: PropTypes.func.isRequired
}
ProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { userUpdateProfile })(ProfileForm);