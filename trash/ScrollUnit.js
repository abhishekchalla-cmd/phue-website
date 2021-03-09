import React, { useContext, useState, useEffect, useRef } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';

export default function ScrollUnit(props) {
    const {
        allNodes,
        register,
        createNode
    } = useContext(ScrollContext);
    const [node, setNode] = useState(null);
    const thisRef = useRef(null);

    useEffect(() => {
        let element = thisRef.current;
        const newProps = { ...props };
        delete newProps['children'];
        let returnedNode = register(element, newProps);
        setNode(returnedNode);
    }, []);

    return (
        <div ref={thisRef} data-scroller-id="false">
            {props.children}
        </div>
    )
}