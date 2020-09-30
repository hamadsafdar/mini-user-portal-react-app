import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Form = (props) => {
    const [user, setUser] = useState({});
    const { createUser } = props;

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const onSubmitHandler = () => {
        createUser(user);
    };

    return (
        <div className="form-container">
            <input
                className="form-item"
                type="text"
                name="name"
                value={user.name}
                onChange={onChangeHandler}
                placeholder="Full Name"
            />
            <input
                className="form-item"
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                placeholder="Email"
            />
            <input
                className="form-item"
                type="text"
                name="sAMAccountName"
                value={user.sAMAccountName}
                onChange={onChangeHandler}
                placeholder="SAM Account Name"
            />
            <input
                className="form-item"
                type="text"
                name="principalName"
                value={user.principalName}
                onChange={onChangeHandler}
                placeholder="Principal Name"
            />
            <button onClick={onSubmitHandler}>Create</button>
        </div>
    );
};

Form.propTypes = {
    createUser: PropTypes.func.isRequired
};

Form.defaultProps = {};

export default Form;
