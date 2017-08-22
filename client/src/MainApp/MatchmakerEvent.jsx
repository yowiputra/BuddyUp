import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';

class MatchmakerEvent extends Component {
  render () {
    const data = this.props.compatUsers
    console.log(data)
    return (
      <div>
        <PopupChat />
        <Cards onEnd={() => console.log('end')} className='master-root'>
          {data.map(item =>
             <Card
               onSwipeLeft={() => console.log('reject ' + item.username)}
               onSwipeRight={() => {
                console.log('accept ' + item.username);
                this.props.inviteUserB(item);
               }}>
               <h2>{item.username}</h2>
               <img className="avatar" src={item.imageurl} alt="avatar image"/>
               <p className="card-text-description">{item.tagline}</p>
               <p className="card-text-description">{item.blurb}</p>
             </Card>
           )}
        </Cards>
      </div>
    )
  }
}

export default MatchmakerEvent
