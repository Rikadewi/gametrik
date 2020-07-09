import React from 'react';
import './CustomButton.css';

const CustomButton = ({ light, orange, danger, ...props }: any): any => {
    let className = 'custom-button';
    if (light) {
        className += ' light';
    }
    if (orange) {
        className += ' orange';
    }
    if (danger) {
        className += ' danger';
    }
    return (
        // eslint-disable-next-line react/button-has-type
        <button className={className} {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;
