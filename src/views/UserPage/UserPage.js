import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Topbar } from '../../components';
import { fetchInfo } from '../../services';
import './styles.css';

const UserPage = (props) => {
    const history = useHistory();
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        email: '',
        principalName: '',
        groups: []
    });
    //eslint-disable-next-line
    const [userApplications, setAppliactions] = useState([
        { id: 'app01', name: 'Application 01', link: 'https://www.google.com' },
        { id: 'app02', name: 'Application 02', link: 'https://www.fb.com' },
        { id: 'app03', name: 'Application 03', link: 'https://www.twitter.com' }
    ]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetchInfo();
            const { user } = response.data;
            setUserData(user);
        } catch (error) {
            alert(error.response.data.message + 'Please login again!');
            //if token is invalid or not provided, redirect to login page
            if (error.response.status === 403 || error.response.status === 401) history.push('/');
        }
    };

    const onClick = (link) => {
        window.open(link, '_blank');
    };
    const applications = userApplications.map((application) => (
        <div key={application.id} className="app-item">
            <div>{application.name}</div>
            <button onClick={() => onClick(application.link)}>
                Go to application
            </button>
        </div>
    ));

    return (
        <>
            <Topbar />
            <div className="container">
                <div className="info-container">
                    <div className="info-item">User ID: {userData.id}</div>
                    <div className="info-item">Name: {userData.name}</div>
                    <div className="info-item">Email: {userData.email}</div>
                </div>
                <GroupTable groups={userData.groups} />

                <div className="app-container">{applications}</div>
            </div>
        </>
    );
};

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
            <tr>
                <th>Group Name</th>
                <th>Desicription</th>
            </tr>
            {groupList}
        </table>
    );
};

export default UserPage;
