import { connect } from 'react-redux';
import React from 'react';
import debt3 from './resources/img/debt-2.png';
import debt2 from './resources/img/debt-1.png';
import debt1 from './resources/img/debt-off.png';

class debt extends React.Component {
  constructor(props) {
    super(props);
    this.debt1 = debt1;
    this.debt2 = debt2;
    this.debt3 = debt3;
    this.state = {debtImage: debt1}
  }

  componentDidUpdate() {
    if (this.props.debt === 0 && this.state.debtImage !== this.debt1) {
      this.setState({ debtImage: this.debt1 });
    } else if (this.props.debt === 1 && this.state.debtImage !== this.debt2) {
      this.setState({ debtImage: this.debt2 });
    } else if (this.props.debt >= 2 && this.state.debtImage !== this.debt3) {
      this.setState({ debtImage: this.debt3 });
    }
  }

  render() {
    return (
      <div className="stat">
        <img src={this.state.debtImage} className="stat-image"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    debt: state.main.debt
  }
}

export default connect(mapStateToProps)(debt);
