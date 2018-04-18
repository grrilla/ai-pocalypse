import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStuff } from './actions';
import PropTypes from 'prop-types';
import React from 'react';
import imgs from './imgs';

class card extends React.Component {
  updateStuff = () => {
    console.log('im update 8)');
    this.props.updateStuff(this.props.item);
  }

  createMarkup = () => {
    return { __html: this.props.item.description };
  }

  render() {
    return (
      <div className="card">
        <a href="#" onClick={this.updateStuff}>
          <img src={imgs[this.props.item.image]} className="choice"/>
          <div dangerouslySetInnerHTML={this.createMarkup()} className="description"></div>
        </a>
      </div>
    );
  }
}

card.propTypes = {
  item: PropTypes.object,
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStuff: bindActionCreators(updateStuff, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(card);
