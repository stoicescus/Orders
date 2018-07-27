import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button 
            className="btn" 
            onClick={props.handleClick}>{props.label}</button>
    );
};

export default Button;