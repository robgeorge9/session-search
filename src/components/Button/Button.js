import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.css';
import { ReactComponent as Logo } from '../../svg/magnifyingGlass.svg';

const Button = props => {
    const { className, type } = props;
    if (type === 'searchIcon') {
        return (
            <button
                className={classnames(
                    styles.button,
                    className
                )}
            >
                <Logo className='searchIcon mr05' />
                {props.label}
            </button>
        )
    } else {
        return (
            <button
                className={classnames(
                    styles.button,
                    className
                )}
            >
                {props.label}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
}

Button.defaultProps = {
    className: null,
    type: null,
}


export default Button;