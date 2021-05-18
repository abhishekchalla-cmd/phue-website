import React, { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';

export default function Sidebar(props) {

    const { registerEvent } = useContext(ScrollContext);

    const [current, setCurrent] = useState(0);
    const options = [
        {
            icon: 'home',
            tooltip: 'Home',
            href: '#home',
            target: '#home'
        },
        {
            icon: 'info',
            tooltip: 'About',
            href: '#about',
            target: '#about-target'
        },
        {
            icon: 'album',
            tooltip: 'Collections',
            href: '#nostos',
            target: '#nostos-target'
        },
        {
            icon: 'receiver',
            tooltip: 'Contact',
            href: '#contact',
            target: '#contact'
        }
    ];

    if (typeof window !== 'undefined') {
        window.currentSectionIndex = 0;
        window.currentSectionName= options[0].tooltip;
    }

    const scrollToSection = cursor => {
        const section = document.querySelector(options[cursor].href);
        section.scrollIntoView();
    }

    useEffect(() => {
        window.options = options;
        registerEvent('sidebar-scroll',  function scrollHandler(e) {
            let options = window.options;
            // let currentIndex = 0;
            let index = -1;
            while (++index < options.length) {
                const option = options[index];
                const section = document.querySelector(option.href);
                // let breakLoop = false;
                if (section) {
                    const { y, height } = section.getBoundingClientRect();
                    if (y < (window.innerHeight / 2) && (y + height) > (window.innerHeight / 2)) {
                        setCurrent(index);
                        break;
                    }
                }
            }
            // setCurrent(currentIndex);
        });
    }, [])

    return <div className="fixed top-0 left-0 h-100v flex flex-column justify-end items-center ph2 w-sidebar z-8" style={{
        background: '#0f2733'
    }}>
        {options.map((option, index) => <a href={option.target}>
            <div className="pa2 pt4" onClick={() => scrollToSection(index)}>
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