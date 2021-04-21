import { navigate } from 'gatsby-link';
import React, { useEffect } from 'react';

export default function Redirect(props) {
    useEffect(() => {
        navigate('/');
    }, []);

    return <></>
}