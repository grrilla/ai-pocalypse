import React from 'react';
import social1 from './resources/img/social-1.png';
import social2 from './resources/img/social-2.png';
import social3 from './resources/img/social-3.png';
import social4 from './resources/img/social-4.png';
import social5 from './resources/img/social-off.png';

export default class tension extends React.Component {
  render() {
    return (
      <div className="stat">
        <img src={social1} className="stat-image"/>
      </div>
    );
  }
}
