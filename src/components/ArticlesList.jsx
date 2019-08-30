import React, { Component } from 'react';
import { getArticles } from '../utils';
import Articles from './Articles';
import SortButtons from './SortButtons';
import { Link } from '@reach/router';
import ErrorPage from './reusable/ErrorPage';
import Loading from './reusable/Loading';

export default class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, articles, error } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <ErrorPage error={error} />;
    return (
      <main>
        <div className='addArticleBtn'>
          {this.props.loggedInUser && (
            <Link to='/createarticle'>
              <p>Add Article</p>
            </Link>
          )}
        </div>
        <SortButtons fetchArticles={this.fetchArticles} />
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
