import React, { useEffect, useState } from 'react';

// const defaultValues = { registerEvent: () => {} };

export const StickyScrollerContext = React.createContext();

export default function StickyScrollerContextProvider(props) {
    const [allEvents, setAllEvents] = useState({});
    let bufferEvents = {};

    const registerEvent = (name, f) => {
        bufferEvents[name] = f;
        setAllEvents({...allEvents, ...bufferEvents});
    }

    useEffect(() => {
        window.onscroll = () => {
            Object.keys(allEvents).forEach(key => allEvents[key]());
        }
    }, [allEvents]);

    return <StickyScrollerContext.Provider value={{
        registerEvent
    }}>
        {props.children}
    </StickyScrollerContext.Provider>
}