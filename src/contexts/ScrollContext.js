import React, { useEffect, useState } from 'react';

// const defaultValues = { registerEvent: () => {} };

export const ScrollContext = React.createContext();

export default function ScrollContextProvider(props) {
    const [allEvents, setAllEvents] = useState({});
    let bufferEvents = {};

    const registerEvent = (name, f) => {
        bufferEvents[name] = f;
        setAllEvents({...allEvents, ...bufferEvents});
    }

    const refreshScrollEvent = () => {
        window.onscroll = e => {
            Object.keys(allEvents).forEach(key => allEvents[key](e));
        }
    }

    const [redirected, setRedirected] = useState(false);

    useEffect(() => refreshScrollEvent(), [allEvents]);

    return <ScrollContext.Provider value={{
        registerEvent,
        refreshScrollEvent,
        redirected, setRedirected
    }}>
        {props.children}
    </ScrollContext.Provider>
}