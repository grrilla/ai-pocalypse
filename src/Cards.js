import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from './actions';
import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';


class cards extends React.Component {
  renderData() {
    return (
      <div>
        {this.props.items.map((item, i) => <Card item={item} key={i} />)}
      </div>
    );
  }


  render() {
    return (
      <div className="">
          {this.props.items.length > 0 ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

cards.propTypes = {
  stuffActions: PropTypes.object,
  items: PropTypes.array
};

function mapStateToProps(state) {
  return {
    items: state.main.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cards);
