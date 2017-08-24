import React, { Component } from 'react';
//Used react-popupbox because of ease of integration. However, if given more time, would have switched it to the official reactjs 'react-modal' package that has the same functionality https://reactcommunity.org/react-modal/
import { connect } from 'react-redux';
import io from 'socket.io-client';

class PopupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.auth.user.username,
      input: '',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const messageList = this.props.messages.map((message) => {
      return (<div key={message.id} className="message">
        <span >{message.username}: {message.content}</span>
      </div>);
    })
    return (
      <div className="bordered">
        <div className="messagelist">{messageList}</div>

        <div>
          <input
            name="input"
            id="chatbar"
            placeholder="Type a message and hit ENTER"
            onChange={this.onChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.props.newPost(this.state.input);
                const element = document.getElementsByClassName('messagelist');
                element.scrollIntoView(false);
              }
            }}
          />
        </div>

      </div>
    )
  }
}

PopupChat.PropTypes = {
  auth: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(PopupChat);