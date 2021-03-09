import { navigate } from 'gatsby-link';
import React from 'react';
import { getScrollPos } from '../utils/scroll';
import BlankBox from './BlankBox';

export default function Gallery(props) {
    
    const { items, current, scrollLength } = props;
    const isWindow = typeof window !== 'undefined';

    const navigate = length => {
        if (isWindow) {
            window.scroll(0, getScrollPos() + length);
        }
    }

    return <div className="w-100">
        <div className="flex">
            {items.map((item, cursor) => <div className={'gallery-item ' + (cursor === current ? 'visible' : 'invisible')}>
                <div className="w-100 pa2">
                    <BlankBox backgroundColor="#333">
                        <h1 style={{ color: '#fff', padding: '20px' }}>{cursor + 1}</h1>
                    </BlankBox>
                </div>
            </div>)}
        </div>
        <div className="w-100 flex">
            <div className="w-50 tl"><button onClick={() => navigate(-1 * scrollLength)}><span uk-icon="icon: chevron-left"></span></button></div>
            <div className="w-50 tr"><button onClick={() => navigate(scrollLength)}><span uk-icon="icon: chevron-right"></span></button></div>
        </div>
    </div>
}