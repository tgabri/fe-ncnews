import React from 'react';
import SearchBar from '../SearchBar';
import { Link } from '@reach/router';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>
          <span>N</span>C-NEWS
        </h1>
      </Link>
      <SearchBar />
      <LoginPage />
      <SignUpPage />
    </header>
  );
}
