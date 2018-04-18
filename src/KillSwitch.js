import React from 'react';
import killSwitch1 from './resources/img/killswitch-1.png';
import killSwitch2 from './resources/img/killswitch-2.png';
import killSwitch3 from './resources/img/killswitch-off.png';

export default class killSwitch extends React.Component {
  render() {
    return (
      <div className="stat">
        <img src={killSwitch1} className="stat-image"/>
      </div>
    );
  }
}
