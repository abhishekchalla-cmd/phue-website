import React, { useState, useEffect, useRef } from 'react';

export default function IntersectionComponent(props) {
    
    const [observer, setObserver] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        let observer = new IntersectionObserver(props.handler);
        observer.observe(containerRef.current);
        setObserver(observer);
    }, [])

    return <div ref={containerRef}>
        {props.children}
    </div>
}