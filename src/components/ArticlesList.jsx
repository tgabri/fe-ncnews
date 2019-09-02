import React, { Component } from 'react';
import { getArticles } from '../utils';
import Articles from './Articles';
import SortButtons from './SortButtons';
import { Link } from '@reach/router';
import ErrorPage from './reusable/ErrorPage';
import Loading from './reusable/Loading';
import Pager from './reusable/Pager';

export default class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null,
    page: 1,
    maxPage: null
  };

  render() {
    const { isLoading, articles, error, page, maxPage } = this.state;
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
        <Pager changePage={this.changePage} page={page} maxPage={maxPage} />
        <Articles
          articles={articles}
          fetchArticles={this.fetchArticles}
          changeLike={this.changeLike}
          loggedInUser={this.props.loggedInUser}
        />
        <Pager changePage={this.changePage} page={page} maxPage={maxPage} />
      </main>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const pageChange = this.state.page !== prevState.page;
    if (pageChange) this.fetchArticles();
  }

  componentDidMount() {
    this.fetchArticles();
  }

  changePage = direction => {
    this.setState(({ page }) => {
      return { page: page + direction };
    });
  };

  fetchArticles = sorted_by => {
    const { topic_slug } = this.props;
    const { page } = this.state;
    getArticles(topic_slug, sorted_by, page)
      .then(({ articles, total_count }) => {
        const maxPage = Math.ceil(total_count / 10);
        this.setState({
          articles,
          isLoading: false,
          error: null,
          maxPage
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
