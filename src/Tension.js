import { connect } from 'react-redux';
import React from 'react';
import social2 from './resources/img/social-1.png';
import social3 from './resources/img/social-2.png';
import social4 from './resources/img/social-3.png';
import social5 from './resources/img/social-4.png';
import social1 from './resources/img/social-off.png';

class tension extends React.Component {
  constructor(props) {
    super(props);
    this.social1 = social1;
    this.social2 = social2;
    this.social3 = social3;
    this.social4 = social4;
    this.social5 = social5;
    this.state = {socialImage: social1}
  }

  componentDidUpdate() {
    if (this.props.social === 0 && this.state.socialImage !== this.social1) {
      this.setState({ socialImage: this.social1 });
    } else if (this.props.social === 1 && this.state.socialImage !== this.social2) {
      this.setState({ socialImage: this.social2 });
    } else if (this.props.social === 2 && this.state.socialImage !== this.social3) {
      this.setState({ socialImage: this.social3 });
    } else if (this.props.social === 3 && this.state.socialImage !== this.social4) {
      this.setState({ socialImage: this.social4 });
    } else if (this.props.social >= 4 && this.state.socialImage !== this.social5) {
      this.setState({ socialImage: this.social5 });
    }
  }

  render() {
    return (
      <div className="stat-tension">
        <img src={this.state.socialImage} className="stat-image"/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    social: state.main.tension
  }
}

export default connect(mapStateToProps)(tension);
