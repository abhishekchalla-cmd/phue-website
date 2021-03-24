import React from 'react';
import StickyScrollerContextProvider from '../contexts/StickyScrollerContext';

import UIKit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

export default function Layout(props) {

    if (UIKit.use) UIKit.use(Icons);

    return <StickyScrollerContextProvider>
        {props.children}
    </StickyScrollerContextProvider>
}