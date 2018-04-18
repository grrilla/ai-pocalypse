import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStuff } from './actions';
import PropTypes from 'prop-types';
import React from 'react';
import imgs from './imgs';

class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgs };
  }

  moreDebtThanTolerater = () => this.props.debt > this.props.item.debtTolerance;

  updateStuff = () => {
    console.log('im update 8)');
    if (this.moreDebtThanTolerater()) {
      // alert('sorry u cant :(');
    } else {
      this.props.updateStuff(this.props.item);
    }
  }

  src = () => {
    const imgs = this.state.imgs;
    const img = imgs[this.props.item.image];
    return img;
  }

  createMarkup = () => {
    console.log('huh?', this);
    return { __html: this.props.item.description };
  }

  render() {
    let className = '';
    if (this.moreDebtThanTolerater()) {
      className = 'gray-out';
    }

    return (
      <div className="card">
        <a href="#" onClick={this.updateStuff}>
          <img className={"choice " + className} src={this.src()}/>
          <div dangerouslySetInnerHTML={this.createMarkup()} className="description"></div>
        </a>
      </div>
    );
  }
}

card.propTypes = {
  item: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    debt: state.main.debt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStuff: bindActionCreators(updateStuff, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(card);
