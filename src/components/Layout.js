import React from 'react';
import { Helmet } from 'react-helmet';
import StickyScrollerContextProvider from '../contexts/StickyScrollerContext';

export default function Layout(props) {

    return <StickyScrollerContextProvider>
        {props.children}
    </StickyScrollerContextProvider>
}