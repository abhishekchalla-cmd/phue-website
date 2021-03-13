import React from 'react';
import { getScrollPos } from '../utils/scroll';

export default function Gallery(props) {
    
    const { items, current, scrollLength, Component } = props;
    const isWindow = typeof window !== 'undefined';

    const navigate = length => {
        if (isWindow) {
            window.scroll(0, getScrollPos() + length);
        }
    }

    return <div className="w-100">
        <style>
            
        </style>
        <div className="flex">
            {items.map((item, cursor) => <div className={'gallery-item ' + (cursor === current ? 'visible' : 'invisible')}>
                <Component item={item} index={cursor}></Component>
            </div>)}
        </div>
        <div className="w-100 flex">
            <div className="w-50 tl"><button onClick={() => navigate(-1 * scrollLength)}><span uk-icon="icon: chevron-left"></span></button></div>
            <div className="w-50 tr"><button onClick={() => navigate(scrollLength)}><span uk-icon="icon: chevron-right"></span></button></div>
        </div>
    </div>
}