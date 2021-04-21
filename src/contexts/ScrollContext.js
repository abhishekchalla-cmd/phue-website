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
        console.log(allEvents);
        window.onscroll = e => {
            Object.keys(allEvents).forEach(key => allEvents[key](e));
        }
    }

    useEffect(() => refreshScrollEvent(), [allEvents]);

    return <ScrollContext.Provider value={{
        registerEvent,
        refreshScrollEvent
    }}>
        {props.children}
    </ScrollContext.Provider>
}