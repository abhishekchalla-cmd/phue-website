import React, { useState } from 'react';

export default function GarmentsSlider(props) {
    const [isOpen, setIsOpen] = useState(false);
    const width = '100vw - 100px';

    return <div
        className="h-100v absolute top-0 left-0 flex items-center justify-center"
        style={{ left: (!isOpen ? `calc(-1*(${width}) + 150px)` : '0'), transition: '1s' }}
    >
        <div className="h-90v relative garments-slider" style={{ width: `calc(${width})` }}>
            <div className="absolute" style={{ right: '40px', top: '20px' }}>
                <img src={require('../../../assets/images/logo.svg')} style={{ width: '75px' }} />
            </div>
        </div>
        <button className="uk-button" onClick={() => setIsOpen(!isOpen)} style={{ zIndex: '3', borderRadius: '100%', height: '50px', width: '50px', marginLeft: '-25px', padding: '0' }}>
            <span uk-icon={`icon: ${isOpen ? 'chevron-left' : 'chevron-right'}`}></span>
        </button>
    </div>
}