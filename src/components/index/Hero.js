import React from 'react';
import GarmentsSlider from './hero/GarmentsSlider';
import News from './hero/News';

export default function Hero(props) {
    return <div className="w-100 h-100v relative z-3 bg-white" id="home">
    <div className="w-100 flex-column z-3 relative">
      <div className="absolute top-0 left-0 w-100 tr pa3">
        <div className="search-container">
          <input type="text" placeholder="search" className="uk-input" />
          <button className="uk-button"><span data-uk-icon="icon: search"></span></button>
        </div>
      </div>

      <div className="w-100 h-100v flex items-center justify-center">
        <News />
      </div>

      <GarmentsSlider />
    </div>
    <div className="absolute z-2 top-0 left-0">
      <img src={require('../../assets/images/banner.png')} style={{ minHeight: '140vh', minWidth: '100vw' }} />
      <div id="about-target" />
    </div>
  </div>
}