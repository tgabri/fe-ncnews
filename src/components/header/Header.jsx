import React from 'react';
// import SearchBar from '../SearchBar';
import { Link } from '@reach/router';

export default function Header(props) {
  return (
    <header>
      <Link to='/'>
        <h1>
          <span>N</span>C-NEWS
        </h1>
      </Link>
      <p>Logged in as {props.loggedInUser}</p>
    </header>
  );
}
