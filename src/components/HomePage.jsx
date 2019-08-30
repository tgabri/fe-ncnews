import React from 'react';
import TopicsList from './TopicsList';

export default function HomePage() {
  return (
    <main>
      <div className='articleBtn'>
        <h1>
          <span>N</span>C-NEWS HOME
        </h1>
      </div>
      <TopicsList path='/' />
    </main>
  );
}
