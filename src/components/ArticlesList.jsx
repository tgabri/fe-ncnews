import React, { Component } from 'react';
import { getData } from '../utils';
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
        <h1>ARTICLESLIST</h1>
        <ul>
          {articles.map(article => (
            <Link key={article.article_id} to='/'>
              <li>
                <h3>{article.title}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    getData().then(articles => {
      //   console.log(articles);
      this.setState({
        articles,
        isLoading: false
      });
    });
  };
}
