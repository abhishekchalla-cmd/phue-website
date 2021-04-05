import React, { useEffect, useState } from 'react';

export default function Loader(props) {
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        window.addEventListener('load', () => setLoaded(true));
    }, [])

    return <div className="fixed z-8 top-0 left-0 h-100v w-100v flex items-center justify-center bg-white" style={{
        transition: '1s',
        opacity: loaded ? '0' : '1'
    }}>
        <h1>Loading</h1>
    </div>
}