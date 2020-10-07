import React from 'react';
import PropTypes from 'prop-types';

const GroupTable = (props) => {
    const { groups } = props;
    const groupList = groups.map((group) => (
        <tr>
            <td>{group.cn}</td>
            <td>This is desicription.</td>
        </tr>
    ));
    return (
        <table>
            <thead>
                <tr>
                    <th>Group Name</th>
                    <th>Desicription</th>
                </tr>
            </thead>
            <tbody>{groupList}</tbody>
        </table>
    );
};

GroupTable.propTypes = {
    groups: PropTypes.array.isRequired
};

export default GroupTable;
