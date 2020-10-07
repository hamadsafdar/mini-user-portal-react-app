import React, { useEffect, useState } from 'react';
import { UserTable, AddUserForm } from './user/components';
import { GroupTable, AddGroupForm } from './group/components';
import { AddAppTable, AppTable } from './application/components';
import { Modal, Button } from './../../components';
import userServices from './user/services';
import groupServices from './group/services';
import applicationServices from './application/services';
import './styles.css';

const Dashboard = (props) => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [applications, setApplications] = useState([]);
    const [showUserAdd, setShowUserAdd] = useState(false);
    const [showGroupAdd, setShowGroupAdd] = useState(false);
    const [showAppAdd, setShowAppAdd] = useState(false);

    const init = async () => {
        try {
            const mUsers = await (await userServices.fetchAll()).data.users;
            const mGroups = await (await groupServices.fetchAll()).data.groups;
            const mApplications = await (await applicationServices.fetchAll())
                .data.applications;
            setUsers(mUsers);
            setGroups(mGroups);
            setApplications(mApplications);
        } catch (error) {}
    };

    useEffect(() => {
        init();
    }, []);

    const createUser = async (user) => {
        try {
            const response = await userServices.create(user);
            setShowUserAdd(false);
            if (response.status === 201) {
                alert('A new user has been created!');
                init();
            }
        } catch (error) {
            alert(error);
        }
    };

    const removeUser = async (userId) => {
        try {
            await userServices.remove(userId);
            alert('User Deleted!');
            init();
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    const createGroup = async (group) => {
        try {
            const response = await groupServices.create(group);
            setShowGroupAdd(false);
            if (response.status === 201) {
                alert('A new group is created!');
                init();
            }
        } catch (error) {
            alert(error);
        }
    };

    const removeGroup = async (groupId) => {
        try {
            await groupServices.remove(groupId);
            init();
            alert('Group Deleted!');
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    const createApplication = async (application) => {
        try {
            const response = await applicationServices.create(application);
            setShowAppAdd(false);
            if (response.status === 201) {
                alert('A new group is created!');
                init();
            }
        } catch (error) {
            alert(error);
        }
    };

    const onUserAddClick = () => {
        setShowUserAdd(true);
    };

    const onGroupAddClick = () => {
        setShowGroupAdd(true);
    };

    const onAppAddClick = () => {
        setShowAppAdd(true);
    };

    return (
        <div className="container">
            <Modal
                show={showUserAdd}
                handleClose={() => setShowUserAdd(false)}
                title="Add User"
            >
                <AddUserForm createUser={createUser} />
            </Modal>
            <Modal
                show={showGroupAdd}
                handleClose={() => setShowGroupAdd(false)}
                title="Add Group"
            >
                <AddGroupForm createGroup={createGroup} />
            </Modal>
            <Modal
                show={showAppAdd}
                handleClose={() => setShowAppAdd(false)}
                title="Add Application"
            >
                <AddAppTable createApplication={createApplication} />
            </Modal>
            <div className="user-container">
                Users:
                <UserTable users={users} removeUser={removeUser} />
                <Button onClick={onUserAddClick}>Add new user</Button>
            </div>
            <div className="group-container">
                Groups:
                <GroupTable groups={groups} removeGroup={removeGroup} />
                <Button onClick={onGroupAddClick}>Add new group</Button>
            </div>
            <div className="application-container">
                Applications:
                <AppTable applications={applications} />
                <Button onClick={onAppAddClick}>Add new application</Button>
            </div>
        </div>
    );
};

export default Dashboard;
