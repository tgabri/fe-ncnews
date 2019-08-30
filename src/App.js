import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/HomePage';
import ArticlesList from './components/ArticlesList';
import ArticleCard from './components/ArticleCard';
import PostArticle from './components/PostArticle';
import ErrorPage from './components/reusable/ErrorPage';

class App extends React.Component {
  state = {
    loggedInUser: 'cooljmessy'
  };
  render() {
    return (
      <div className='App'>
        <Header loggedInUser={this.state.loggedInUser} />
        <Router>
          <HomePage path='/' />
          <ArticlesList
            path='/articles'
            loggedInUser={this.state.loggedInUser}
          />
          <ArticlesList
            path='/topics/:topic_slug/articles'
            loggedInUser={this.state.loggedInUser}
          />
          <ArticleCard
            path='/articles/:article_id'
            loggedInUser={this.state.loggedInUser}
          />
          <PostArticle
            loggedInUser={this.state.loggedInUser}
            path='/createarticle/'
          />
          <ErrorPage error={{ status: 404, msg: 'Page not found' }} default />
        </Router>
      </div>
    );
  }
}

export default App;
