import React from 'react';
import { Link, navigate } from '@reach/router';

export default function Header({ loggedInUser, changeLoggedInUser }) {
  function handleLoginClick() {
    navigate('/login');
  }
  function handleLogoutClick() {
    const username = '';
    changeLoggedInUser(username);
  }
  return (
    <header>
      <Link to='/'>
        <h1>
          <span>N</span>C-NEWS
        </h1>
      </Link>
      {loggedInUser ? (
        <div className='logout'>
          <p>Logged in as '{loggedInUser}'</p>
          <button onClick={() => handleLogoutClick()}>Log Out</button>
        </div>
      ) : (
        <div className='login'>
          <button onClick={() => handleLoginClick()}>Login</button>
        </div>
      )}
    </header>
  );
}
