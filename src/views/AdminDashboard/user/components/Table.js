import React from 'react';
import PropTypes from 'prop-types';

const UserTable = (props) => {
    const { users, removeUser, editUser } = props;

    const onDeleteClick = (userId) => {
        removeUser(userId);
    };

    const userList = users.map((user) => (
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.sAMAccountName}</td>
            <td>{user.email}</td>
            <td>{user.principalName}</td>
            <td>Groups</td>
            <td>{user.isEnable ? 'Enabled' : 'Disabled'}</td>
            <td>
                <div>
                    <button>Edit</button>
                    <button onClick={() => onDeleteClick(user._id)}>
                        Delete
                    </button>
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

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    removeUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired
};

export default UserTable;
