import React, { useState, useEffect, useContext } from 'react';
import { ScrollContext } from '../contexts/ScrollContext';

export default function ScrollContainer(props) {
    const { mainScrollerHeight } = useContext(ScrollContext);

    return <>
        <div className="absolute top-0 left-0 w-100" style={{ zIndex: '3' }}>
            <div id="scroll-subcontainer" className="w-100v">
                {props.children}
            </div>
        </div>
        <div id="main-scroller" className="absolute top-0 left-0 w-100 h-100v">
            <div style={{ height: mainScrollerHeight + 'px' }} />
        </div>
    </>
}