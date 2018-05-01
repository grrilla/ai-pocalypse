import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetStuff } from './actions';
import React from 'react';
import img from './resources/img/startOver.png';

class reset extends React.Component {
  onClick = () => {
    this.props.resetStuff();
    this.props.setToTitleScreen();
  }

  render() {
    return (
      <div className="reset">
        <a href="#" onClick={this.onClick}>
          <img src={img} />
        </a>
        <p>Start Over</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetStuff: bindActionCreators(resetStuff, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(reset);
