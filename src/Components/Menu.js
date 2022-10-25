import React, {useState} from 'react';
import Color from './Color';
import Block from './Block';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
    return (

      <div className="colorOptions">
        <Color color ="goldenrod" handleClick = {props.add}></Color>
        <Color color ="lightblue" handleClick = {props.add}></Color>
        <Color color ="lavender" handleClick = {props.add}></Color>
        <Color color ="pink" handleClick = {props.add}></Color>

      </div>
    );
}

export default Menu;
