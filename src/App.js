import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/HomePage';
import ArticlesList from './components/ArticlesList';
import ArticleCard from './components/ArticleCard';
import PostArticle from './components/PostArticle';
import LoginPage from './components/header/LoginPage';
import SignUpPage from './components/header/SignUpPage';

class App extends React.Component {
  state = {
    loggedInUser: 'cooljmessy'
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <Router>
          <HomePage path='/' />
          <ArticlesList path='/articles/*' />
          <ArticlesList path='/topics/:topic_slug/articles' />
          <ArticleCard path='/articles/:article_id/*' />
          <PostArticle path='/createarticle/' />
          <LoginPage path='/login' />
          <SignUpPage path='signup' />
        </Router>
      </div>
    );
  }
}

export default App;
