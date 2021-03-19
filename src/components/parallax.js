import React, { useEffect, useRef, useState } from 'react';
import { getScrollPos } from '../utils/scroll';

export default function ParallaxComponent(props) {
    const containerRef = useRef(null);
    const [observer, setObserver] = useState(null);

    const { defaultTop, duration } = props;
    const [top, setTop] = useState(defaultTop);
    const [start, setStart] = useState(false);
    const [initialScroll, setInitialScroll] = useState(-1);
    

    useEffect(() => {
        window.addEventListener('scroll', e => {
            if (start && initialScroll > -1 && top > 0) {
                const deltaScroll = getScrollPos();
                let top = (defaultTop * (duration - deltaScroll) / duration);
                if (top > 0) setTop(top);
            }
        });
    }, [initialScroll]);
    
    useEffect(() => {
        if (start && initialScroll === -1) {
            setInitialScroll(getScrollPos())
        }
    }, [start])

    useEffect(() => {
        // const targetRatio = defaultTop / containerRef.current.clientHeight;
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0) setStart(true);
            });
            // setStart(true)
        })
        io.observe(containerRef.current);
        setObserver(io)
    }, [])

    return <div ref={containerRef} style={{ position: 'relative', top: -1 * top + 'px', ...(props.style || {}) }}>
        {props.children}
    </div>
}