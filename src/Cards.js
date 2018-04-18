import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from './actions';
import PropTypes from 'prop-types';
import React from 'react';
import Card from './Card';
// import failure1 from './resources/img/failure1.png';
// import failure2 from './resources/img/failure2.png';
// import failure3 from './resources/img/failure3.png';
// import success1 from './resources/img/success1.png';
// import success2 from './resources/img/success2.png';
// import success3 from './resources/img/success3.png';
import imgs from './gameOverImages';

class cards extends React.Component {
  constructor(props) {
    super(props)
    this.state = imgs;
  }

  src = () => {
    const imgs = this.state;
    const img = imgs[this.props.gameOverScreen];
    return img;
  }

  renderData() {
    return (
      <div className="cards">
        {this.props.items.map((item, i) => <Card item={item} key={i} />)}
      </div>
    );
  }


  render() {
    return (
      <div>
          {this.props.items.length > 0 ?
            this.renderData()
            :
            <div className="game-over">
              <img src={this.src()} style={{ backgroundImage: `url(${this.src()})` }}/>
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
    items: state.main.items,
    gameOverScreen: state.main.gameOverScreen
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
