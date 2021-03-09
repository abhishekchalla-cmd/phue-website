import React, { useRef, useState, useEffect } from 'react';
import BlankBox from '../../components/BlankBox';
import IntersectionComponent from '../../components/IntersectionComponent';

export default function CoreValues(props) {
    const [position, setPosition] = useState('relative');
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        (new ResizeObserver(() => {
            setContainerHeight(containerRef.current.clientHeight);
        })).observe(containerRef.current)
    }, [])

    return <IntersectionComponent handler={entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                console.log('intersected');
                setPosition('sticky');
            }
        })
    }} thresholds={0}>     
        <div className="standard-container pv5 h-100v top-0 right-0 bg-sky-blue z-1" style={{ position, marginTop: '-100vh' }} ref={containerRef}>
            <div className="subcontainer">
                <h1>Core values</h1>
                <div className="flex">
                    <div className="w-33">
                        <BlankBox />
                    </div>
                    <div className="w-33">
                        <BlankBox />
                    </div>
                    <div className="w-33">
                        <BlankBox />
                    </div>
                </div>
            </div>
        </div>
        <div style={{ height: containerHeight + 'px' }}></div>
    </IntersectionComponent>
}