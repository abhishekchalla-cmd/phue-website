import React, { useEffect, useRef, useState } from 'react';
import Gallery from '../../components/Gallery';
import IntersectionComponent from '../../components/IntersectionComponent';
import { getScrollPos } from '../../utils/scroll';

const GarmentItem = props => {
    return <div className={"h-80 relative flex w-100 items-center justify-start gallery-right-item " + (props.selected ? "selected" : "unselected")}>
        <div className="w-60">
            <h1>{props.index + 1}</h1>
            <div className="bg-blur br4 pa3">
                <h3>{props.item.title}</h3>
                <p>{props.item.description}</p>
            </div>
        </div>
    </div>;
}

export default function GarmentsSection(props) {

    const items = [
        {
            title: 'Something #1',
            description: 'Some other thing #1'
        },
        {
            title: 'Something #2',
            description: 'Some other thing #2'
        },
        {
            title: 'Something #3',
            description: 'Some other thing #3'
        },
        {
            title: 'Something #4',
            description: 'Some other thing #4'
        },
        {
            title: 'Something #5',
            description: 'Some other thing #5'
        },
    ]
    
    const [backgroundColor, setBackgroundColor] = useState('magenta');
    const [initialScroll, setInitialScroll] = useState(-1);
    const [item, setItem] = useState(0);
    const containerRef = useRef(null);
    
    useEffect(() => {
        window.onscroll = () => {
            let scroll = getScrollPos();
            let totalScroll = items.length * ((typeof window !== 'undefined' && window.innerHeight) || 900);
            let fraction = (scroll - initialScroll) / totalScroll;
            fraction = Math.floor(fraction * items.length);
            if (fraction < items.length) setItem(fraction);
        }
    }, [initialScroll])

    return <IntersectionComponent
        handler={entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    setInitialScroll(getScrollPos());
                }
            })
        }}
    >
        <div className="standard-container z-2" ref={containerRef} style={{ transition: '1s', height: items.length * 100 + 'vh', backgroundColor }}>
            <div className="top-0 bottom-0 h-100v w-100 bg-white pa5" style={{ position: 'sticky' }}>
                <div className="subcontainer flex w-100 h-100">
                    <div className="w-60 h-100 flex items-center justify-center">
                        <Gallery items={[
                            'fuck you',
                            'fuck you too',
                            'fuck you three',
                            'bloody bastard',
                            'you fucking fucking'
                        ]} current={item} scrollLength={typeof window !== 'undefined' && window.innerHeight} />
                    </div>
                    <div classname="w-40 relative flex items-center justify-center">
                        {items.map((_item, index) => <GarmentItem item={_item} current={item} selected={index === item} index={index} />)}
                    </div>
                </div>
            </div>
        </div>
    </IntersectionComponent>
}