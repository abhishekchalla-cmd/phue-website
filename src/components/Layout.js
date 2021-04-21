import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollContextProvider from '../contexts/ScrollContext';

export default function Layout(props) {

    return <ScrollContextProvider>
        {props.children}
    </ScrollContextProvider>
}