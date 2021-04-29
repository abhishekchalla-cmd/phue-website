import React, { useState } from 'react';

export default function Sidebar(props) {

    const [current, setCurrent] = useState(0);
    const options = [
        {
            icon: 'home',
            tooltip: 'Home',
            href: '#home'
        },
        {
            icon: 'info',
            tooltip: 'About',
            href: '#about'
        },
        {
            icon: 'album',
            tooltip: 'Collections',
            href: '#nostos'
        },
        {
            icon: 'receiver',
            tooltip: 'Contact',
            href: '#contact'
        }
    ]

    return <div className="fixed top-0 left-0 h-100v flex flex-column justify-end items-center ph2 w-sidebar z-8" style={{
        background: '#0f2733'
    }}>
        {options.map((option, index) => <a href={option.href}>
            <div className="pa2 pt4" onClick={() => setCurrent(index)}>
                <span data-uk-icon={`icon: ${option.icon}; ratio: 1.2`} style={{
                    transition: '0.2s',
                    color: current === index ? '#fff' : 'rgba(255, 255, 255, 0.4)',
                    transform: current === index ? 'scale(1.5)' : 'scale(1)'
                }} uk-tooltip={option.tooltip}></span>
            </div>
        </a>)}
        <div className="pv3"></div>
    </div>
}