import React, { useState } from 'react';

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Login functionality
      if (username && password) {
        console.log('Login successful!');
      } else {
        setError('Please enter both username and password');
      }
    } else {
      // Signup functionality
      if (username && password && confirmPassword) {
        if (password === confirmPassword) {
          console.log('Signup successful!');
        } else {
          setError('Passwords do not match');
        }
      } else {
        setError('Please enter all fields');
      }
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="Account-page">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        {!isLogin && (
          <>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <br />
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <p>
        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
        <button onClick={handleToggle}>{isLogin ? 'Signup' : 'Login'}</button>
      </p>
    </div>
  );
};

export default AccountPage;