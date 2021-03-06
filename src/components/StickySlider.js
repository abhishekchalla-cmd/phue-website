import React, { useContext, useEffect, useRef, useState } from 'react';
import IntersectionComponent from './IntersectionComponent';
import { ScrollContext } from '../contexts/ScrollContext';
import { getScrollPos } from '../utils/scroll';

export default function StickySlider(props) {
    
    const { children, divisions, onChange, name, divisionHeight } = props;
    const { registerEvent } = useContext(ScrollContext);

    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [initialScroll, setInitialScroll] = useState(-1);
    const containerRef = useRef(null);
    const [id, setId] = useState((new Date()).getTime());
    
    useEffect(() => {
        registerEvent(name, () => {
            let scroll = getScrollPos();
            let totalScroll = divisions * ((typeof window !== 'undefined' && window.innerHeight) * ((divisionHeight || 100) / 100) || 900);
            let fraction = (scroll - initialScroll) / totalScroll;
            fraction = Math.floor(fraction * divisions);
            if ((fraction < divisions || fraction > -1) && onChange) onChange(fraction === -1 ? 0 : fraction);
        });
    }, [initialScroll]);

    return <IntersectionComponent
        handler={entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    setInitialScroll(containerRef.current.getBoundingClientRect().top + getScrollPos());
                }
            })
        }}
    >
        <div className="standard-container z-2" ref={containerRef} style={{ transition: '1s', height: (divisions * (divisionHeight || 100) + 90) + 'vh', backgroundColor, ...(props.style ? props.style : {}) }}>
            <div className="top-0 bottom-0 h-100v w-100 flex items-center justify-center" style={{ position: 'sticky' }}>
                {children}
            </div>
        </div>
    </IntersectionComponent>
}