import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Button } from '../../../../components';

const Form = (props) => {
    const [application, setApplication] = useState({});
    const { createApplication } = props;

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setApplication({
            ...application,
            [name]: value
        });
    };

    const onSubmitHandler = () => {
        createApplication(application);
    };

    return (
        <div className="form-container">
            <input
                className="form-item"
                type="text"
                name="name"
                value={application.name}
                onChange={onChangeHandler}
                placeholder="Full Name"
            />
            <input
                className="form-item"
                type="text"
                name="description"
                value={application.description}
                onChange={onChangeHandler}
                placeholder="Description"
            />
            <input
                className="form-item"
                type="text"
                name="link"
                value={application.link}
                onChange={onChangeHandler}
                placeholder="Link to Application"
            />
            <Button onClick={onSubmitHandler}>Create</Button>
        </div>
    );
};

Form.propTypes = {
    createApplication: PropTypes.func.isRequired
};

Form.defaultProps = {};

export default Form;
