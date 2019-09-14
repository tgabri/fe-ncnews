import React from 'react';
import TopicsList from './TopicsList';
import { Link } from '@reach/router';

export default function HomePage({ loggedInUser }) {
  return (
    <main>
      <div className='articleBtn'>
        <h1>
          <span>N</span>C-NEWS HOME
        </h1>
      </div>
      <div className='addArticleBtn'>
        {loggedInUser && (
          <Link to='/createarticle'>
            <p>Add Article</p>
          </Link>
        )}
      </div>
      <TopicsList path='/' />
    </main>
  );
}
