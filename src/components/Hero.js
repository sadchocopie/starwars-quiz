import React, {Component} from 'react';
import BannerBlue from '../assets/BannerBlue.png';
import BannerPINK from '../assets/BannerPINK.png';
import BannerOrange from '../assets/BannerOrange.png';

var randomInt = Math.floor(Math.random() * 3)
class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [BannerBlue, BannerOrange, BannerPINK]
    };
  }

  render() {
    return (
      <div>
      <header className="App-header">
      <img className="App-header" src={this.state.images[randomInt]}/>
      <h1 className="hero-text">Choose Your Destiny</h1>
      </header>
      </div>
    );
  }
}


export default Hero;
