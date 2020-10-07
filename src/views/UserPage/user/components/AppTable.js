import React from 'react';
import PropTypes from 'prop-types';

const AppTable = (props) => {
    const { applications } = props;
    const onClick = (link) => {
        window.open(link, '_blank');
    };

    const applicationList = applications.map((application) => (
        <tr key={application.id} className="app-item">
            <td>{application.name}</td>
            <td>
                <button onClick={() => onClick(application.link)}>
                    Go to application
                </button>
            </td>
        </tr>
    ));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>{applicationList}</tbody>
            </table>
        </div>
    );
};

AppTable.propTypes = {
    applications: PropTypes.array.isRequired
};

export default AppTable;
