import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddForm from './Form';
import ViewTable from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from '../../../../components';

const Main = (props) => {
    const { users } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const create = (user) => {};

    const remove = (userId) => {};

    const edit = () => {};

    const handleClose = () => {
        setShow(false);
    };

    const onAddClick = () => {
        setShow(true);
    };

    return (
        <>
            <Button onClick={onAddClick}>Add New</Button>
            <Modal
                show={show}
                handleClose={handleClose}
                title={'Add a new user'}
            >
                <AddForm createUser={create} />
            </Modal>
            <ViewTable removeUser={remove} editUser={edit} />
        </>
    );
};

Main.propTypes = {};

export default Main;
