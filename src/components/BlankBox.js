import React from 'react';

export default function BlankBox(props) {
    return <div className={"br3" + ' ' + (props.className || '')} style={{
        height: '200px',
        backgroundColor: '#fff',
        ...props.style
    }}>{props.children}</div>
}