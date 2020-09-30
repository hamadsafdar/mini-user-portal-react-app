import React, { useEffect, useState } from 'react';
import userServices from '../../services/admin';
import groupServices from '../../services/group';
import applicationServices from '../../services/application';
import './styles.css';

const Dashboard = (props) => {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [applications, setApplications] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        try {
            const mUsers = await userServices.fetchAll();
            const mGroups = await groupServices.fetchAll();
            const mApplications = await applicationServices.fetchAll();
            setUsers({
                ...users,
                mUsers
            });
            setGroups({
                ...groups,
                mGroups
            });
            setApplications({
                ...applications,
                mApplications
            });
        } catch (error) {}
    };

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

    return (
        <div className="container">
            <div className="user-container">
                Users:
                <UserTables users={users} />
                <button>Add new user</button>
            </div>
            <div className="group-container">
                Groups:
                <GroupTables groups={groups} />
                <button>Add new group</button>
            </div>
            <div className="application-container">
                Applications:
                <ApplicationTables applications={applications} />
                <button>Add new application</button>
            </div>
        </div>
    );
};

const UserTables = (props) => {
    const { users } = props;
    const userList = users.map((user) => (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.sAMAccountName}</td>
            <td>{user.email}</td>
            <td>{user.principalName}</td>
            <td>Groups</td>
            <td>{user.status}</td>
            <td>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </td>
        </tr>
    ));
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>SAM Account Name</th>
                        <th>Email</th>
                        <th>Principal Name</th>
                        <th>Member of</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{userList}</tbody>
            </table>
        </>
    );
};

const ApplicationTables = (props) => {
    const { applications } = props;
    const appList = applications.map((application) => <tr></tr>);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Groups Allowed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{appList}</tbody>
            </table>
        </>
    );
};

const GroupTables = (props) => {
    const { groups } = props;
    const groupList = groups.map((group) => <tr></tr>);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>{groupList}</tbody>
            </table>
        </>
    );
};

const Modal = (props) => {
    const [show, setShow] = useState(true);
};

const AddUserForm = (props) => {
    const [user, setUser] = useState({});
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
