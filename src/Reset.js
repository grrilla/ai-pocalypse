import React from 'react';
import img from './resources/img/startOver.png';

export default class reset extends React.Component {
  resetStuff() {
    console.log('im clicked 8)');
  }

  render() {
    return (
      <div className="reset">
        <a href="#" onClick={this.resetStuff}>
          <img src={img} />
        </a>
      </div>
    );
  }
}
