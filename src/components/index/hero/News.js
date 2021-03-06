import React, { useState, useEffect, useRef } from 'react';
import Skewer from '../../Skewer';

const transitionPeriod = 300;
let timeout;

const News = props => {

    const { news: newsData } = require('../../../data.json');
    const [news, setNews] = useState(newsData);
    const [index, setIndex] = useState(0);

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [link, setLink] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [isNavigationDisabled, setIsNavigationDisabled] = useState(false);
    const [enableAnimation, setEnableAnimation] = useState(false);

    const cardRef = useRef(null);

    const changeCard = diff => {
        diff = index + diff;
        diff = diff % news.length;
        if (diff < 0) diff = news.length - (-1 * diff);
        cardRef.current.classList.add('disappear');
        clearTimeout(timeout);
        timeout = setTimeout(() => setIndex(diff), transitionPeriod);
        setIsNavigationDisabled(true);
    }

    useEffect(() => {
        if (news[index]) {
            let { title, subtitle, link, coverImage } = news[index];
            setTitle(title);
            setSubtitle(subtitle);
            setLink(link);
            setCoverImage(coverImage);
            setEnableAnimation(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setEnableAnimation(false);
                setIsNavigationDisabled(false)
            }, transitionPeriod);
        }
    }, [index])

    return <div className="relative">
        <Skewer>
            <div ref={cardRef} className={"relative w-80v center flex items-center news-card " + (enableAnimation ? 'appear-animation' : '')} style={{ transition: (transitionPeriod / 1000) + 's' }}>
                <img className="absolute top-0 left-0 bg-light" style={{ minHeight: '100%', minWidth: '100%', width: 'auto', zIndex: '-1' }} src={coverImage} />
                <div className="pl5">
                    <h1>{title}</h1>
                    <p className="mb3">{subtitle}</p>
                    <a href={link}><button className="uk-button">Learn more</button></a>
                </div>
            </div>
        </Skewer>
        <div className="absolute uk-button" style={{ bottom: '30px', right: '40px' }}>
            <button onClick={() => changeCard(-1)} className="navigation-btn mr1"><span data-uk-icon="icon: chevron-left" disabled={isNavigationDisabled} /></button>
            <button onClick={() => changeCard(1)} className="navigation-btn ml1"><span data-uk-icon="icon: chevron-right" disabled={isNavigationDisabled} /></button>
        </div>
    </div>
}

export default News;