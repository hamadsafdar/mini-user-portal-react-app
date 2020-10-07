import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    const { options, setSelected } = props;
    const changeHanlder = (e) => {
        const { value } = e.target;
        setSelected(value);
    };
    const list = options.map((option, index) => {
        const { value, label } = option;
        return (
            <option key={index} value={value}>
                {label}
            </option>
        );
    });

    return <select onChange={changeHanlder}>{list}</select>;
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired
};

export default Dropdown;
