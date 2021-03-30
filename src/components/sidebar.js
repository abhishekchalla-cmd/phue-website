import React from 'react';

export default function Sidebar(props) {
    return <div className="fixed top-0 left-0 h-100v flex flex-column justify-end items-center bg-dark ph2 w-sidebar" style={{ zIndex: '100' }}>
        <a href="#home">
            <div className="pa2 pv4 bv-dark">
                <span uk-icon="icon: home; ratio: 1.2" uk-tooltip="Home"></span>
            </div>
        </a>

        <a href="#about">
            <div className="pa2 pt4">
                <span uk-icon="icon: info; ratio: 1.2" uk-tooltip="About"></span>
            </div>
        </a>

        <a href="#nostos">
            <div className="pa2 pt4">
                <span uk-icon="icon: album; ratio: 1.2" uk-tooltip="Collections"></span>
            </div>
        </a>

        <a href="mailto:panyagupta@gmail.com">
            <div className="pa2 pv4">
                <span uk-icon="icon: receiver; ratio: 1.2" uk-tooltip="Contact"></span>
            </div>
        </a>
    </div>
}