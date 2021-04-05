import React, { useEffect, useState } from 'react';
import BlankBox from '../../BlankBox';

const columnCount = 5;
const dim = 400;

const GarmentSliderItem = props => {
    let { index, item } = props;
    const y = Math.floor(2 * index / columnCount);
    const x = (2 * index) % columnCount;

    return <div className={"absolute flex flex-column items-center justify-center"} style={{
        top: y * dim + 'px',
        left: x * dim + 'px',
        height: dim + 'px',
        width: dim + 'px',
        transition: '0.5s',
        opacity: props.visible ? '1' : '0'
    }}>
        <BlankBox style={{ width: '300px', height: '300px' }} />
        <div className="flex items-center justify-center" style={{ marginTop: '-60px' }}>
            <button className="uk-button">Learn more</button>
        </div>
    </div>
}

export default function GarmentsSlider(props) {
    const [isOpen, setIsOpen] = useState(false);
    
    const [lastTop, setLastTop] = useState(null);
    const [lastLeft, setLastLeft] = useState(null);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const [beginDrag, setBeginDrag] = useState(false);
    
    const width = '100vw - 100px';

    const garments = (new Array(5)).fill({
        img: '',
        url: ''
    });

    const moveHandler = e => {
        const lastCoords = {
            left: lastLeft,
            top: lastTop
        }
        
        if (!lastCoords.left && lastCoords.left !== 0) {
            lastCoords.top = e.clientY;
            lastCoords.left = e.clientX;
        }

        setTop(top + (e.clientY - lastCoords.top));
        setLeft(left + (e.clientX - lastCoords.left));
        setLastTop(e.clientY);
        setLastLeft(e.clientX);
    }

    useEffect(() => {
        if (beginDrag) {
            window.onpointerup = () => {
                window.onpointermove = () => {};
                setLastTop(null);
                setLastLeft(null);
                setBeginDrag(false);
            }
            window.onpointermove = e => moveHandler(e);
        }
    }, [beginDrag, moveHandler])

    return <div
        className="h-100v absolute top-0 left-0 flex items-center justify-center"
        style={{ left: (!isOpen ? `calc(-1*(${width}) + 150px)` : '0'), transition: '1s', userSelect: 'none' }}
    >
        <div className="h-90v relative garments-slider" style={{
            overflow: 'hidden',
            width: `calc(${width})`,
            cursor: isOpen ? 'grab' : 'default'
        }} onPointerDown={() => setBeginDrag(true)}>
            <div className="absolute" style={{ right: '40px', top: '20px' }}>
                <img src={require('../../../assets/images/logo-with-text.png')} style={{ width: '75px' }} />
            </div>
            <div className="w-100 absolute bg-dark"
                style={{
                    top: top + 'px',
                    left: left + 'px',
                }}
            >
                <div className="relative">
                    {garments.map((garment, index) => {
                        return <GarmentSliderItem item={garment} index={index} visible={isOpen} />
                    })}
                </div>
            </div>
        </div>
        <button className="uk-button" onClick={() => setIsOpen(!isOpen)} style={{ zIndex: '3', borderRadius: '100%', height: '50px', width: '50px', marginLeft: '-25px', padding: '0' }}>
            <span uk-icon={`icon: ${isOpen ? 'chevron-left' : 'chevron-right'}`}></span>
        </button>
    </div>
}