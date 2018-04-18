import React from 'react';
import debt1 from './resources/img/debt-1.png';
import debt2 from './resources/img/debt-2.png';
import debt3 from './resources/img/debt-off.png';

export default class debt extends React.Component {
  render() {
    return (
      <div className="stat">
        <img src={debt1} className="stat-image"/>
      </div>
    );
  }
}
