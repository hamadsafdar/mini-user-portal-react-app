import React, { useState } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../services';

const Login = (props) => {
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
    const onLogInClick = async () => {
        try {
            const response = await authenticate(creds);
            localStorage.setItem('token', response.data.token);
            if (response.status === 200) history.push('/homepage');
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
                    onChange={onChangeHandler}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={creds.password}
                    onChange={onChangeHandler}
                />
                <button onClick={onLogInClick}>Login</button>
            </div>
        </div>
    );
};

export default Login;
