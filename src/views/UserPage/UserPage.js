import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Topbar } from '../../components';
import { ApplicationTable, GroupTable } from './user/components';
import { fetchApplications, fetchInfo } from './user/services';
import './styles.css';

const UserPage = (props) => {
    const [userData, setData] = useState({});
    //eslint-disable-next-line
    const [userApplications, setAppliactions] = useState([]);

    useEffect(() => {
        fetchData();
        fetchAppData();
    }, []);
    const history = useHistory();
    const fetchAppData = async () => {
        try {
            const response = await fetchApplications();
            const { applications } = await response.data;
            setAppliactions(applications);
        } catch (error) {
            alert(error.response.data.message + 'Please login again!');
            //if token is invalid or not provided, redirect to login page
            if (error.response.status === 403 || error.response.status === 401)
                history.push('/');
        }
    };
    const fetchData = async () => {
        try {
            const response = await fetchInfo();
            const { user } = await response.data;
            setData(user);
        } catch (error) {
            alert(error.response.data.message + 'Please login again!');
            //if token is invalid or not provided, redirect to login page
            if (error.response.status === 403 || error.response.status === 401)
                history.push('/');
        }
    };

    return (
        <>
            <Topbar />
            <div className="container">
                <div className="info-container">
                    <div className="info-item">User ID: {userData._id}</div>
                    <div className="info-item">
                        SAM Account Name: {userData.sAMAccountName}
                    </div>
                    <div className="info-item">
                        Status: {userData.isEnable ? 'Enabled' : 'Disabled'}
                    </div>
                </div>
                {userData.groupMembership ? (
                    <GroupTable groups={userData.groupMembership} />
                ) : (
                    <div>No data</div>
                )}
                {userApplications ? (
                    <ApplicationTable applications={userApplications} />
                ) : (
                    <div>No data</div>
                )}
            </div>
        </>
    );
};

export default UserPage;
