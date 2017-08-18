import React, { Component } from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

class PopupChat extends Component {
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">Work like you don't need the money.</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    )
    PopupboxManager.open({ content })
  }

  render() {
    return (
    //Pop up currently triggered by a button click
    //Eventually, the popup should be activated by an accepted invitation from a potential teammate
    <div>
      <button className="popupbox-trigger" onClick={ this.openPopupbox }>Click me</button>
      <PopupboxContainer />
    </div>
    )
  }
}

export default PopupChat;