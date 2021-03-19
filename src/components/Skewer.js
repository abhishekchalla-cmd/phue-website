import React, { useEffect, useRef, useState } from 'react';

const { abs, round } = Math;

export default function Skewer(props) {
    const [transform, setTransform] = useState(null);
    const [width, setWidth] = useState(-1);
    const [height, setHeight] = useState(-1);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const angle = props.angle || 5;

    const containerRef = useRef(null);

    const handlePointerMove = e => {
        const bcr = containerRef.current.getBoundingClientRect();
        const x = e.clientX - bcr.x;
        const y = e.clientY - bcr.y;
        const ry = (x - (width / 2)) / (width / 2);
        const rx = (y - (height / 2)) / (height / 2);
        setRotateX(rx * angle);
        setRotateY(-1 * ry * angle);
    }

    useEffect(() => {
        setWidth(containerRef.current.clientWidth);
        setHeight(containerRef.current.clientHeight);
    }, [])

    return <div ref={containerRef} onPointerMove={e => handlePointerMove(e)} style={{
        perspective: '1000px'
    }} className={props.className}>
        <div style={{
            transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
            transformStyle: 'preserve-3d',
            width: '100%'
        }}>
            {props.children}
        </div>
    </div>
}