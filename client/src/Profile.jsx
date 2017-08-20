import React, { Component } from 'react';
import axios from 'axios';
import { currentUserDataRequest } from '../actions/userDataActions.jsx'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


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
        imageurl: `https://api.adorable.io/avatars/285/${data.username}@adorable.io.png`,
       })
    });
  }

  render() {
    const { username, email, tagline, blurb, imageurl } = this.state
    console.log(imageurl);
    return (
      
      <div className="jumbotron">
        <div className="text-center">
          <img className="img-circle bordered-image" src={this.state.imageurl} />
          <h1>{username}</h1>

          <h2 className="text-muted">{tagline}</h2>
          <p>{blurb}</p>
            <Link to="/profileupdate" className="btn btn-primary btn-lg">Edit Profile</Link>
        </div>
      </div>

    );
  }
}

Profile.propsTypes = {
  currentUserDataRequest: React.PropTypes.func.isRequired
}

export default connect(null, { currentUserDataRequest })(Profile);
