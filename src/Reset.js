import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetStuff } from './actions';
import React from 'react';
import img from './resources/img/startOver.png';

class reset extends React.Component {
  resetStuff = () => {
    console.log('im clicked 8)');
    this.props.resetStuff();
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

const mapDispatchToProps = (dispatch) => {
  return {
    resetStuff: bindActionCreators(resetStuff, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(reset);
