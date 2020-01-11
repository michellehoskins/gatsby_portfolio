import React from 'react'
import '../styles/main.css'

const backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
);

export default backdrop;