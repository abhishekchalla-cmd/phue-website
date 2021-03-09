import React from 'react';
import GarmentsSlider from './hero/GarmentsSlider';
import News from './hero/News';

export default function Hero(props) {
    return <div className="w-100 relative z-3 bg-white">
    <div className="w-100 flex-column h-100v">
      <div className="absolute top-0 left-0 w-100 tr pa3">
        <input type="text" placeholder="search" className="uk-input" />
        <button className="uk-button"><span uk-icon="icon: search"></span></button>
      </div>

      <div className="w-100 h-100v flex items-center justify-center">
        <News />
      </div>

      <GarmentsSlider />
    </div>
  </div>
}