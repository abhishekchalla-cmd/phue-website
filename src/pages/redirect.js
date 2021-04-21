import { navigate } from 'gatsby-link';
import React from 'react';

export default function Redirect(props) {
    navigate('/');
    return <></>
}