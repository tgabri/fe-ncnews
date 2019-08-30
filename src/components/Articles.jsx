import React from 'react';
import { Link } from '@reach/router';
import Voter from './Voter';

export default function Articles(props) {
  return (
    <div className='articles'>
      <h2>ARTICLES</h2>
      <ul>
        {props.articles.map(article => (
          <li key={article.article_id}>
            <div className='topBar'>
              <div className='topicBox'>
                <img
                  src='https://image.flaticon.com/icons/svg/259/259500.svg'
                  alt='topic'
                />
                <Link to={`/topics/${article.topic}/articles`}>
                  <p> {article.topic}</p>
                </Link>
              </div>
              <div className='authorBox'>
                <img
                  src='https://image.flaticon.com/icons/svg/149/149452.svg'
                  alt=''
                />{' '}
                <p>{article.author}</p>
              </div>
            </div>
            <div className='articleContainer'>
              <Link
                to={`/articles/${article.article_id}`}
                value={article.article_id}
              >
                <h3> {article.title}</h3>
                <img src={`/img/${article.topic}.jpg`} alt='random' />
              </Link>
            </div>
            {props.loggedInUser && (
              <Voter article={article} created_at={article.created_at} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
