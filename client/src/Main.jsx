import React, { Component } from 'react';
import Cards, { Card } from 'react-swipe-card';

export default class Main extends Component {
  render() {
    const data = ['Match #1', 'Match #2', 'Match #3'];
    return (
      <div>
        <h1>Swipeable Card Stack</h1>
        <Cards onEnd={() => console.log('end')} className='master-root'>
          {data.map(item =>
          <Card
            onSwipeLeft={() => console.log('swipe left')}
            onSwipeRight={() => console.log('swipe right')}>
            <h2>{item}</h2>
            </Card>
          )}
        </Cards>
      </div>
    )
  }
}