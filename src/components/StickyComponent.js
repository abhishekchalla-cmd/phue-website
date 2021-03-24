import React, { useRef, useState, useEffect } from 'react';
import BlankBox from './BlankBox';
import IntersectionComponent from './IntersectionComponent';
import ParallaxComponent from './parallax';

export default function StickyComponent(props) {
    const [position, setPosition] = useState('relative');
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        (new ResizeObserver(() => {
            setContainerHeight(containerRef.current.clientHeight);
        })).observe(containerRef.current)
    }, [])

    return (
        // <ParallaxComponent defaultTop={300} duration={typeof window !== 'undefined' && window.innerHeight}>
        <IntersectionComponent handler={entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0 && entry.intersectionRatio < 1) {
                    setPosition('sticky');
                } else if (entry.intersectionRatio === 1) setPosition('fixed');
            })
        }} thresholds={0}>
            <div className={props.className} style={{ position, ...props.style }} ref={containerRef}>
                {props.children}
            </div>
            <div style={{ height: containerHeight + 'px' }}></div>
        </IntersectionComponent>
    // </ParallaxComponent>
    );
}