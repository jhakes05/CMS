import React, { useState } from 'react';
import Main from "./Main"
import { 
    Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        // Temporary admin credentials (to be deleted in development)
        const tempAdminUsername = 'admin';
        const tempAdminPassword = 'admin123';

        if (username === tempAdminUsername && password === tempAdminPassword) {
            window.location.href = <Link to='/main'/>; // Replace with React Router navigation
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    const redirectToCreateAccount = () => {
        alert('Redirecting to create account page. Implement your logic here.');
        // Add your logic to redirect to the create account page.
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to Certification Management System</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
                <Link to='/'>
                <button className="create-account-btn" >
                   no
                </button>
                </Link>
                {/* Create Account Button */}
                <button className="create-account-btn" onClick={redirectToCreateAccount}>
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default Login;
