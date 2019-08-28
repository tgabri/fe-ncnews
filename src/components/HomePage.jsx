import React from 'react';
import TopicsList from './TopicsList';
import { Router } from '@reach/router';

export default function HomePage() {
  return (
    <main>
      <div className='articleBtn'>
        <h1>
          <span>N</span>C-NEWS HOME
        </h1>
      </div>
      <Router>
        <TopicsList path='/' />
      </Router>
    </main>
  );
}
