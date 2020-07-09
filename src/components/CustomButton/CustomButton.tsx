import React from 'react';
import './CustomButton.css';

const CustomButton = ({ light, orange, ...props }: any): any => {
    let className = 'custom-button';
    if (light) {
        className += ' light';
    }
    if (orange) {
        className += ' orange';
    }
    return (
        // eslint-disable-next-line react/button-has-type
        <button className={className} {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;
