import React, { Component } from 'react';
import { getArticle } from '../utils';
import CommentsByID from './CommentsByID';
import { Link } from '@reach/router';
import Voter from './Voter';
import DeleteArticle from './DeleteArticle';

export default class ArticleCard extends Component {
  state = {
    isLoading: true,
    article: null,
    error: null
  };
  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Oops, ERROR</p>;
    return (
      <main>
        <ul>
          {article.map(item => (
            <div key={item.article_id} className='article'>
              <h2>{item.title}</h2>
              <li>
                <div className='topBar'>
                  <div className='topicBox'>
                    <img
                      src='https://image.flaticon.com/icons/svg/259/259500.svg'
                      alt='topic'
                    />
                    <Link to={`/topics/${item.topic}/articles`}>
                      <p>{item.topic}</p>
                    </Link>
                  </div>
                  <div className='authorBox'>
                    <img
                      src='https://image.flaticon.com/icons/svg/149/149452.svg'
                      alt=''
                    />
                    <p> {item.author}</p>
                  </div>
                  <DeleteArticle article_id={item.article_id} />
                </div>
                <article>{item.body}</article>
                <div className='likesBar'>
                  <img
                    src='https://image.flaticon.com/icons/svg/149/149918.svg'
                    alt=''
                  />
                  <div className='dateBox'>
                    <p>{item.created_at}</p>
                  </div>
                  <Voter article={item} />
                </div>
                <button>SORT</button>
                <CommentsByID path={`${item.article_id}`} />
              </li>
            </div>
          ))}
        </ul>
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { article_id } = this.props;
    getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
}
