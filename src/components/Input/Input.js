import React from 'react';
import './Input.css';

const Input = props => {
    const { type, placeholder, range, name } = props;
    return (
        <React.Fragment>
            <input type={type} placeholder={placeholder} id={name} className={range} />
        </React.Fragment>
    )
}

export default Input;