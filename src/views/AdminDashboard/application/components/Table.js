import React from 'react';
import PropTypes from 'prop-types';

const ApplicationTable = (props) => {
    const { applications, removeApp, editApp } = props;
    const linkClick = (link) => {
        window.open(link, '_blank');
    };
    const appList = applications.map((application) => (
        <tr key={application._id}>
            <td>{application.appId}</td>
            <td>{application.name}</td>
            <td>{application.description}</td>
            <td>Groups</td>
            <td>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </td>
            <td>
                <button onClick={() => linkClick(application.link)}>
                    Go To App
                </button>
            </td>
        </tr>
    ));
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Groups Allowed</th>
                        <th>Actions</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{appList}</tbody>
            </table>
        </>
    );
};

ApplicationTable.propTypes = {
    applications: PropTypes.array.isRequired,
    removeApp: PropTypes.func.isRequired,
    editApp: PropTypes.func.isRequired
};

export default ApplicationTable;
