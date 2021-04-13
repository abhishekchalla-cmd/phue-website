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

    return <div className={"w-100 h-75 " + (props.className ? props.className : '')} style={props.style ? props.style : {}}>
        <div className="flex h-100">
            {items.map((item, cursor) => <div className={'gallery-item ' + (cursor === current ? 'visible' : 'invisible')}>
                <Component item={item} index={cursor}></Component>
            </div>)}
        </div>
        {!props.noNavigation && <div className="w-100 flex">
            <div className="w-50 tr pr2">
                <button className="navigation-btn" onClick={() => navigate(-1 * scrollLength)}>
                    <span data-uk-icon="icon: chevron-left"></span>
                </button>
            </div>
            <div className="w-50 tl pl2">
                <button className="navigation-btn" onClick={() => navigate(scrollLength)}>
                    <span data-uk-icon="icon: chevron-right"></span>
                </button>
            </div>
        </div>}
    </div>
}