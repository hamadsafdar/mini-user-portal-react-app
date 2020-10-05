import React, { useEffect, useState } from 'react';
import { AppTable, GroupTable, UserTable, AddUserForm } from './components';
import { Modal, Button } from './../../components';
import userServices from '../../services/admin';
import groupServices from '../../services/group';
import applicationServices from '../../services/application';
import './styles.css';

const Dashboard = (props) => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [applications, setApplications] = useState([]);
    const [show, setShow] = useState(false);

    const init = async () => {
        try {
            const mUsers = await (await userServices.fetchAll()).data.users;
            const mGroups = await (await groupServices.fetchAll()).data.groups;
            const mApplications = await (await applicationServices.fetchAll())
                .data.applications;
            setUsers((users) => [...users, ...mUsers]);
            setGroups((groups) => [...groups, ...mGroups]);
            setApplications((applications) => [
                ...applications,
                ...mApplications
            ]);
        } catch (error) {}
    };

    useEffect(() => {
        init();
    }, []);

    const createUser = async (user) => {
        try {
            const response = await userServices.create(user);
            setShow(false);
            if (response.status === 201) {
                alert('A new user has been created!');
                init();
            }
        } catch (error) {
            alert(error);
        }
    };

    const createGroup = async (group) => {
        try {
            const response = await groupServices.create(group);
            if (response.status === 201) {
                alert('A new group is created!');
                init();
            }
        } catch (error) {
            alert(error);
        }
    };

    const createApplication = async (application) => {
        try {
            const response = await applicationServices.create(application);
            if (response.status === 201) {
                alert('A new group is created!');
                init();
            }
        } catch (error) {
            alert(error);
        }
    };

    const onAddClick = () => {
        setShow(true);
    };

    return (
        <div className="container">
            <Modal show={show} handleClose={() => setShow(false)} title="hello">
                <AddUserForm createUser={createUser} />
            </Modal>
            <div className="user-container">
                Users:
                <UserTable users={users} />
                <Button onClick={onAddClick}>Add new user</Button>
            </div>
            <div className="group-container">
                Groups:
                <GroupTable groups={groups} />
                <Button>Add new group</Button>
            </div>
            <div className="application-container">
                Applications:
                <AppTable applications={applications} />
                <Button>Add new application</Button>
            </div>
        </div>
    );
};

export default Dashboard;

// setUsers([
//     ...users,
//     {
//         _id: '123',
//         name: 'Test User',
//         sAMAccountName: 'tuser',
//         principalName: 'tuser@test.com',
//         email: 'test@test.com',
//         status: 'Active'
//     },
//     {
//         _id: '1233',
//         name: 'Test User',
//         sAMAccountName: 'tuser',
//         principalName: 'tuser@test.com',
//         email: 'test@test.com',
//         status: 'Active'
//     }
// ]);
