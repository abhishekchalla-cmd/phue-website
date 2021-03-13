import React, { useContext, useEffect, useRef, useState } from 'react';
import IntersectionComponent from '../../components/IntersectionComponent';
import { StickyScrollerContext } from '../../contexts/StickyScrollerContext';
import { getScrollPos } from '../../utils/scroll';

export default function StickySlider(props) {
    
    const { children, divisions, onChange, name } = props;
    const { registerEvent } = useContext(StickyScrollerContext);

    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [initialScroll, setInitialScroll] = useState(-1);
    const containerRef = useRef(null);
    const [id, setId] = useState((new Date()).getTime());
    
    useEffect(() => {
        registerEvent(name, () => {
            let scroll = getScrollPos();
            let totalScroll = divisions * ((typeof window !== 'undefined' && window.innerHeight) || 900);
            let fraction = (scroll - initialScroll) / totalScroll;
            fraction = Math.floor(fraction * divisions);
            if (fraction < divisions || fraction > -1) onChange(fraction === -1 ? 0 : fraction);
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
        <div className="standard-container z-2" ref={containerRef} style={{ transition: '1s', height: (divisions * 100 + 90) + 'vh', backgroundColor }}>
            <div className="top-0 bottom-0 h-100v w-100 bg-white pa5 flex items-center justify-center" style={{ position: 'sticky' }}>
                {children}
            </div>
        </div>
    </IntersectionComponent>
}