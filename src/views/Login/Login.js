import React, { useState } from 'react';
import './styles.css';
import { useHistory, Link } from 'react-router-dom';
import { authenticate } from '../../services';

const Login = (props) => {
	const [creds, setCreds] = useState({
		username: '',
		password: ''
	});
	const history = useHistory();
	const onChnageHandler = (event) => {
		const { name, value } = event.target;
		setCreds({
			...creds,
			[name]: value
		});
	};
	const onLogInClick = async () => {
		try {
			const result = await authenticate(creds);
			localStorage.setItem('token', result.data.token);
			history.push('/homepage');
		} catch (error) {
			alert(error.response.data.message + '\nPlease Try Again!');
		}
	};
	return (
		<div className="container">
			<div className="topbar">Login</div>
			<div className="login-form">
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={creds.username}
					onChange={onChnageHandler}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={creds.password}
					onChange={onChnageHandler}
				/>
				<button onClick={onLogInClick}>Login</button>
				<Link to="/register">Register?</Link>
			</div>
		</div>
	);
};

export default Login;
