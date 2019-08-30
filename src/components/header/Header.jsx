import React from 'react';
import SearchBar from '../SearchBar';
import { Link } from '@reach/router';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default function Header(props) {
  return (
    <header>
      <Link to='/'>
        <h1>
          <span>N</span>C-NEWS
        </h1>
      </Link>
      {props.loggedInUser ? (
        <p>Logged in as {props.loggedInUser}</p>
      ) : (
        <>
          <LoginPage />
          <SignUpPage />
        </>
      )}
      {/* <SearchBar /> */}
    </header>
  );
}
