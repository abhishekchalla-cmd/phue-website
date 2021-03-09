import React from 'react';

export default function BlankBox(props) {
    return <div className="w-100 br3" style={{
        height: props.height || '200px',
        backgroundColor: props.backgroundColor || '#fff'
    }}>{props.children}</div>
}