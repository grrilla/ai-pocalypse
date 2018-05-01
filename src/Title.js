import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStuff } from './actions';
import PropTypes from 'prop-types';
import React from 'react';
import titleImg from './resources/img/title.jpg';

export default class title extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title">
        <a href="#" onClick={this.props.updateStuff}>
          <img className={"title-img"} src={titleImg}/>
        </a>
      </div>
    );
  }

}