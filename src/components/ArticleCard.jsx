import React, { Component } from 'react';
import { getArticle } from '../utils';
import CommentsByID from './CommentsByID';
import { Link } from '@reach/router';
import Voter from './reusable/Voter';
import DeleteArticle from './DeleteArticle';
import ErrorPage from './reusable/ErrorPage';
import Loading from './reusable/Loading';

export default class ArticleCard extends Component {
  state = {
    isLoading: true,
    article: null,
    error: null
  };
  render() {
    const { isLoading, article, error } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <ErrorPage error={error} />;
    return (
      <main>
        <div className='article'>
          <ul>
            {article.map(item => (
              <div key={item.article_id}>
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
                  </div>
                  <div className='articleBody'>
                    {item.author === this.props.loggedInUser && (
                      <DeleteArticle
                        article_id={item.article_id}
                        deleteArticle={this.props.deleteArticle}
                      />
                    )}
                    <p>{item.body}</p>
                  </div>

                  <>
                    <Voter data={item} />
                  </>
                </li>
                <div className='commentContainer'>
                  <CommentsByID
                    article_id={`${item.article_id}`}
                    loggedInUser={this.props.loggedInUser}
                  />
                </div>{' '}
              </div>
            ))}
          </ul>
        </div>
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticle();
  }
  fetchArticle = () => {
    const { article_id } = this.props;
    getArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false, error: null });
      })
      .catch(error => {
        const {
          response: {
            status,
            data: { msg }
          }
        } = error;
        this.setState({
          error: { msg, status },
          isLoading: false
        });
      });
  };
}
