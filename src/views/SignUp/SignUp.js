import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../services';

const SignUp = (props) => {
	const [creds, setCreds] = useState({
		username: '',
		password: ''
	});
	const history = useHistory();
	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setCreds({
			...creds,
			[name]: value
		});
	};
	const onClickHandler = async () => {
		try {
			await register(creds);
			history.push('/');
		} catch (error) {
			console.log('SignUp', error);
		}
	};
	return (
		<div className="container">
			<div className="topbar">TopBar</div>
			<div className="login-form">
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={creds.username}
					onChange={onChangeHandler}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={creds.password}
					onChange={onChangeHandler}
				/>
				<button onClick={onClickHandler}>Register</button>
				<Link to="/">Login?</Link>
			</div>
		</div>
	);
};

export default SignUp;
