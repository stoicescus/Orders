import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button 
            className="btn" 
            onClick={props.handleClickAction}>{props.label}</button>
    );
};

export default Button;