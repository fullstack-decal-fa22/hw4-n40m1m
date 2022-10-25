import React from 'react';
import Menu from './Menu';
/* TODO: Translate the below class component to a functional component! */

const Color = (props)=> {
    return (<div> <button onClick={() => props.handleClick(props.color)}>Post {props.color}</button></div>);
}

export default Color;