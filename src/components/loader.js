import React, { useEffect, useState, useRef } from 'react';

export default function Loader(props) {

    const [loaded, setLoaded] = useState(false);
    const pathRef = useRef(null);

    useEffect(() => {
        window.onmousemove = e => {
            pathRef.current.setAttribute('transform', `translate(${e.clientX - 500}, ${e.clientY - 300}) scale(0.3)`);
        }
        if (window.loaded) {
            setLoaded(true);
        } else
            window.addEventListener('load', () => {
                window.loaded = true;
                setLoaded(true);
            });

        return () => { window.onmousemove = null };
    }, [])

    const frames = [
        "M1910.64 427.9c-144.87,40.16 -153.12,51.53 -272.5,88.66 -143.34,44.59 -603.06,-429.1 -607.91,-54.82 -0.12,63.26 59.35,225.75 79.53,268.25 30,79.72 68.38,115 121.82,223.82 29.06,59.15 -36,201.09 -59.1,267.59 -31.22,89.91 -68.68,331.59 95.91,360.25 102.94,17.91 175.47,-32.47 314.16,-77.37 140.81,-41.6 260.28,33 316,57.87 82.37,40.41 160.44,150.25 256.06,202.53 142.13,59.6 279.94,18.91 304.59,-117 12.94,-71.28 8.16,-148.75 61.35,-232.47 38.12,-60.12 82.47,-90.78 168.59,-168.31 207.88,-187.09 167.28,-369.97 -19.31,-369 -131.84,0.69 -249.66,-25.66 -375.53,-56.87 -129.35,-32.13 -200.1,-54.54 -218.38,-193.32 -14.56,-110.65 -31.81,-236.78 -165.28,-199.81l0 0z",
        "M1900.27 421.22c-130.41,40.15 -137.84,51.53 -245.28,88.65 -129.06,44.6 -524.72,-326.34 -529.09,47.91 -0.13,63.28 10.56,104.78 26.97,155.34 27,79.72 52.71,117.03 100.84,225.85 26.16,59.15 2.87,209.25 -17.91,275.75 -28.09,89.87 -61.81,331.59 86.35,360.21 92.65,17.94 90.06,-179.12 214.87,-224.03 126.78,-41.59 159.6,345.38 262.72,296.91 157.53,-72.16 130.84,49.72 216.94,102.03 127.9,59.59 269.62,-11 291.81,-146.91 11.63,-71.25 3.28,-109.34 51.16,-193.06 34.31,-60.13 170.65,-43.22 248.18,-120.78 187.1,-187.09 93.54,-422.91 -24.18,-417.88 -118.66,0.69 -181.25,-96.28 -294.57,-127.53 -116.43,-32.09 -185.56,-16.47 -202,-155.28 -13.12,-110.62 -66.65,-204.15 -186.81,-167.18l0 0z",
        "M1621.76 508.93c-151.56,40.16 -243,-213.31 -422.22,-221 -130.93,-1.59 -184.28,-7.56 -205.37,198.75 -16.44,208.57 61.91,251.38 106.78,409.22 31.38,79.75 -82.69,126.56 -26.78,235.38 30.37,59.15 158.19,118.25 134.03,184.75 -32.66,89.87 -71.84,331.59 100.31,360.22 107.69,17.9 137.25,-48.75 282.32,-93.66 147.31,-41.59 152.84,215 272.65,166.53 183.1,-72.19 152.06,49.72 252.1,102.03 148.62,59.59 313.31,-11 339.09,-146.91 13.53,-71.25 3.81,-109.34 59.47,-193.06 39.84,-60.12 198.28,-43.25 288.37,-120.78 116.94,-75.75 -2.65,-344.16 -229.09,-284.78 -284.59,72.66 94.97,-257.91 -110.06,-312.22 -135.28,-32.12 -246.85,35.09 -265.97,-103.69 -27.44,-367.34 -436,-217.75 -575.63,-180.78l0 0z",
    ]

    return <div className="fixed z-8 top-0 left-0 h-100v w-100v flex items-center justify-center" style={{
        transition: '0.2s',
        // backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><linearGradient id='gradient'><stop offset='10%' stop-color='%23F00'/><stop offset='90%' stop-color='%23fcc'/> </linearGradient><rect fill='url(%23gradient)' x='0' y='0' width='100%' height='100%'/></svg>");`,
        backgroundColor: '#bbb',
        opacity: loaded ? '0' : '1',
        pointerEvents: loaded ? 'none' : 'all'
    }}>
        <div className="absolute top-0 left-0 w-100v h-100v bg-dark white flex items-center justify-center" style={{
            clipPath: 'url(#wobble)',
            WebkitClipPath: 'url(#wobble)'
        }}>
            <h1 className="white" style={{ fontSize: '100px' }}>Loading</h1>
        </div>

        <svg height="50" width="50">
            <clipPath id="wobble">
                <path d={frames[0]} transform="rotate(0)" ref={pathRef}>
                    <animate attributeName="d" values={`${frames.join(";")};${frames[0]}`} dur="3s" repeatCount="indefinite" />
                </path>
            </clipPath>
        </svg>

        
    </div>
}