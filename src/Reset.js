import React from 'react';

export default class reset extends React.Component {
  resetStuff() {
    console.log('im clicked 8)');
  }

  render() {
    return (
      <div className="reset">
        <button onClick={this.resetStuff}>reset</button>
      </div>
    );
  }
}
