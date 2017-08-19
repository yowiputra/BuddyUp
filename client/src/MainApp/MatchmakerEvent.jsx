import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';
import PopupChat from './PopupChat.jsx';

class MatchmakerEvent extends Component {
  render () {
    // data will be an array of objects(most probably JSON), which each objects will contain the information from a user: username, text description, avatar, etc
    // Each card should have an output for showing username, avatar, text description, and a button to send an invite
    const data = ['Match #1', 'Match #2', 'Match #3', 'Match #4', 'Match #5', 'Match #6']
    return (
      <div>
        <PopupChat /> 
        <Cards onEnd={() => console.log('end')} className='master-root'>
          {data.map(item =>
            //make card and card border bigger
            //make sure it's mobile responsive
            <Card
              onSwipeLeft={() => console.log('swipe left')}
              onSwipeRight={() => console.log('swipe right')}>
              <h2>{item}</h2>
              <img className="avatar" src="" alt="avatar image"/> 
              <p>Username</p>
              <p className="card-text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae risus risus.</p>
              <button className="btn-poke">Poke!</button>     
            </Card>
            )}
        </Cards>
      </div>
    )
  }
}

export default MatchmakerEvent
