import React, { Component } from 'react';
import { getArticles } from '../utils';
import Articles from './Articles';
import SortButtons from './SortButtons';
import { Link } from '@reach/router';

export default class ArticlesList extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };

  render() {
    const { isLoading, articles, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Oops, ERROR</p>;
    return (
      <main>
        <SortButtons fetchArticles={this.fetchArticles} />
        <Link to='/createarticle'>
          <p>Add An Article</p>
        </Link>
        <Articles
          articles={articles}
          fetchArticles={this.fetchArticles}
          changeLike={this.changeLike}
        />
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = sorted_by => {
    const { topic_slug } = this.props;
    getArticles(topic_slug, sorted_by).then(articles => {
      this.setState({
        articles,
        isLoading: false
      });
    });
  };
}
