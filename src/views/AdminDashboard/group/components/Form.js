import React, { useState } from 'react';
import { Button } from '../../../../components';
import PropTypes from 'prop-types';
import './styles.css';

const Form = (props) => {
    const [group, setGroup] = useState({});

    const { createGroup } = props;

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setGroup({
            ...group,
            [name]: value
        });
    };

    const onSubmitHandler = () => {
        createGroup(group);
    };

    return (
        <div className="form-container">
            <input
                className="form-item"
                type="text"
                name="name"
                value={group.name}
                onChange={onChangeHandler}
                placeholder="Group Name"
            />
            <input
                className="form-item"
                type="text"
                name="description"
                value={group.description}
                onChange={onChangeHandler}
                placeholder="Description"
            />
            {/* <Dropdown options={type} setSelected={setSelected} /> */}
            <Button onClick={onSubmitHandler}>Create</Button>
        </div>
    );
};

Form.propTypes = {
    createGroup: PropTypes.func.isRequired
};

Form.defaultProps = {};

export default Form;

// const type = [
//     {
//         label: 'A',
//         value: 'a'
//     },
//     {
//         label: 'B',
//         value: 'b'
//     }
// ];
