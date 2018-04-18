import { connect } from 'react-redux';
import React from 'react';
import killSwitch2 from './resources/img/killswitch-1.png';
import killSwitch3 from './resources/img/killswitch-2.png';
import killSwitch1 from './resources/img/killswitch-off.png';

class killSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.killSwitch1 = killSwitch1;
    this.killSwitch2 = killSwitch2;
    this.killSwitch3 = killSwitch3;
    this.state = {killSwitchImage: killSwitch1}
  }

  componentDidUpdate() {
    if (this.props.kill === 0 && this.state.killSwitchImage !== this.killSwitch1) {
      this.setState({ killSwitchImage: this.killSwitch1 });
    } else if (this.props.kill === 1 && this.state.killSwitchImage !== this.killSwitch2) {
      this.setState({ killSwitchImage: this.killSwitch2 });
    } else if (this.props.kill >= 2 && this.state.killSwitchImage !== this.killSwitch3) {
      this.setState({ killSwitchImage: this.killSwitch3 });
    }
  }

  render() {
    return (
      <div className="stat-kill-switch">
        <img src={this.state.killSwitchImage} className="stat-image"/>
        <p>Kill Switch</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    kill: state.main.killSwitch
  }
}

export default connect(mapStateToProps)(killSwitch);
