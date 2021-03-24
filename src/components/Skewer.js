import React, { useEffect, useRef, useState } from 'react';

const { abs, round } = Math;

export default function Skewer(props) {
    const [transform, setTransform] = useState(null);
    const [width, setWidth] = useState(-1);
    const [height, setHeight] = useState(-1);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const angle = props.angle || 5;
    const { disableX, disableY } = props;

    const containerRef = useRef(null);

    const handlePointerMove = e => {
        const bcr = containerRef.current.getBoundingClientRect();
        const x = e.clientX - bcr.x;
        const y = e.clientY - bcr.y;
        const ry = (x - (width / 2)) / (width / 2);
        const rx = (y - (height / 2)) / (height / 2);
        if (!disableX) setRotateX(rx * angle);
        if (!disableY) setRotateY(-1 * ry * angle);
    }

    const returnToNormal = () => {
        setRotateX(0);
        setRotateY(0);
    }

    useEffect(() => {
        setWidth(containerRef.current.clientWidth);
        setHeight(containerRef.current.clientHeight);
    }, [])

    return <div ref={containerRef} onPointerMove={e => handlePointerMove(e)} style={{
        perspective: '1000px'
    }} className={props.className} onPointerOut={e => returnToNormal()}>
        <div style={{
            transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
            transformStyle: 'preserve-3d',
            width: '100%',
            transition: '0.1s'
        }}>
            {props.children}
        </div>
    </div>
}