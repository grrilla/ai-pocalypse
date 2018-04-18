import React from 'react';

export default class card extends React.Component {
  render() {
    return (
      <div className="card">
        'Hi' {console.log(this)}
        <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350' className="choice"/>
        <div>
          {this.props.description}
        </div>
      </div>
    );
  }
}
