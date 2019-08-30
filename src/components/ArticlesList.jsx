import React, { Component } from 'react';
import { getArticles } from '../utils';
import Articles from './Articles';
import SortButtons from './SortButtons';
import { Link } from '@reach/router';
import ErrorPage from './reusable/ErrorPage';

export default class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, articles, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <ErrorPage error={error} />;
    return (
      <main>
        <SortButtons fetchArticles={this.fetchArticles} />
        <div className='addArticleBtn'>
          {this.props.loggedInUser && (
            <Link to='/createarticle'>
              <p>Add Article</p>
            </Link>
          )}
        </div>
        <Articles
          articles={articles}
          fetchArticles={this.fetchArticles}
          changeLike={this.changeLike}
          loggedInUser={this.props.loggedInUser}
        />
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = sorted_by => {
    const { topic_slug } = this.props;
    getArticles(topic_slug, sorted_by)
      .then(articles => {
        this.setState({
          articles,
          isLoading: false,
          error: null
        });
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
