import React, { useState } from 'react';
import { Button, Modal } from '../../../../components';
import PropTypes from 'prop-types';
import AddGroupForm from './Form';
import GroupViewTable from './Table';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../actions';

const Main = (props) => {
    const { groups } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const create = (group) => {};

    const onClick = () => {
        setShow(true);
    };

    return (
        <>
            <Modal
                show={show}
                handleClose={handleClose}
                title="Add a new Group"
            >
                <AddGroupForm createGroup={create} />
            </Modal>
            <GroupViewTable groups={groups} />
            <Button onClick={onClick}>Add New Group</Button>
        </>
    );
};

Main.propTypes = {};

export default Main;
