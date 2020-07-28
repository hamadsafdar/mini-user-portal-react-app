import React, { useState, useEffect } from 'react';
import { fetchInfo } from '../../services';
import './styles.css';

const UserPage = (props) => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const result = await fetchInfo();

			setData(result.data.userInfo);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const tableData = data.map((user, index) => (
		<tr key={index}>
			<td>{user.title}</td>
			<td>{user.first_name}</td>
			<td>{user.last_name}</td>
			<td>{user.username}</td>
			<td>{user.gender}</td>
			<td>{user.email}</td>
			<td>{user.phone_number}</td>
			<td>{user.birthdate}</td>
			<td>{user.location}</td>
		</tr>
	));

	return (
		<div className="container">
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Username</th>
							<th>Gender</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>DOB</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>{tableData}</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserPage;
