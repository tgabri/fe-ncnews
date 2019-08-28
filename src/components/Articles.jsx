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
            <Link
              to={`/articles/${article.article_id}`}
              value={article.article_id}
            >
              <h3> {article.title}</h3>
              <img
                className='articleImg'
                src={`/img/${article.topic}.jpg`}
                alt='random'
              />
            </Link>
            <div className='likesBar'>
              <img
                src='https://image.flaticon.com/icons/svg/149/149918.svg'
                alt=''
              />
              <div className='dateBox'>
                <p>{article.created_at}</p>
              </div>
            </div>
            <Voter article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
