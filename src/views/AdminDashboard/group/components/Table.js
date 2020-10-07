import React from 'react';
import PropTypes from 'prop-types';

const GroupTable = (props) => {
    const { groups, removeGroup } = props;

    const onDeleteClick = (groupId) => {
        removeGroup(groupId);
    };
    const groupList = groups.map((group) => (
        <tr key={group._id}>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>Test</td>
            <td>
                <div>
                    <button>Edit</button>
                    <button onClick={() => removeGroup(group._id)}>
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
                        <th>Description</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{groupList}</tbody>
            </table>
        </>
    );
};

GroupTable.propTypes = {
    groups: PropTypes.array.isRequired,
    removeGroup: PropTypes.func.isRequired
};

export default GroupTable;
