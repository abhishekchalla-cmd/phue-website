import React from 'react';
import StickyScrollerContextProvider from '../contexts/StickyScrollerContext';

export default function Layout(props) {
    return <StickyScrollerContextProvider>
        {props.children}
    </StickyScrollerContextProvider>
}