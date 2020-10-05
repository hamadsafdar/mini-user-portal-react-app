import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = (props) => {
    const { children, onClick, variant } = props;
    let classes = 'btn ';
    classes += variant === 'cancel' ? classes + 'cancel' : null;
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    classes: PropTypes.array,
    variant: PropTypes.string
};

export default Button;
