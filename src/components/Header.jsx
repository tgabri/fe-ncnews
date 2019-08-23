import React from 'react';
import SearchBar from './SearchBar';
import { Link } from '@reach/router';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>NC-NEWS</h1>
      </Link>
      <SearchBar />
      <Link to='/topics'>Topics</Link>
    </header>
  );
}
