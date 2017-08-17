import React, { Component } from 'react';
import axios from 'axios';
import { currentUserDataRequest } from '../actions/userDataActions.jsx'
import { connect } from 'react-redux';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      tagline: '',
      blurb: '',
      imageurl: '',
    }
  }

  componentDidMount() {
    console.log('mount jor lor');
    this.props.currentUserDataRequest().then(data => {
      this.setState({ 
        username: data.username,
        email: data.email,
        tagline: data.tagline,
        blurb: data.blurb,
        imageurl: data.imageurl
       })
    });
  }

  render() {
    const { username, email, tagline, blurb, imageurl } = this.state
    return (
      <div>
        <p>{username + email + tagline + blurb + imageurl}</p>
      </div>
    );
  }
}

Profile.propsTypes = {
  currentUserDataRequest: React.PropTypes.func.isRequired
}

export default connect(null, { currentUserDataRequest })(Profile);
