import React from 'react';
import PropTypes from 'prop-types';

const GroupTable = (props) => {
    const { groups } = props;
    const groupList = groups.map((group) => (
        <tr key={group._id}>
            <td>{group.name}</td>
            <td>{group.description}</td>
            <td>Test</td>
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
    groups: PropTypes.array
};

export default GroupTable;
