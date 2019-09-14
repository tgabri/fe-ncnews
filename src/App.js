import React from 'react';
import { Router, navigate } from '@reach/router';
import './App.css';
import Header from './components/header/Header';
import HomePage from './components/HomePage';
import ArticlesList from './components/ArticlesList';
import ArticleCard from './components/ArticleCard';
import PostArticle from './components/PostArticle';
import ErrorPage from './components/reusable/ErrorPage';
import LoginPage from './components/LoginPage';

class App extends React.Component {
  state = {
    loggedInUser: ''
  };
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className='App'>
        <Header
          loggedInUser={loggedInUser}
          changeLoggedInUser={this.changeLoggedInUser}
        />
        <Router>
          <HomePage path='/' loggedInUser={loggedInUser} />
          <ArticlesList path='/articles' loggedInUser={loggedInUser} />
          <ArticlesList
            path='/topics/:topic_slug/articles'
            loggedInUser={loggedInUser}
          />
          <ArticleCard
            path='/articles/:article_id'
            loggedInUser={loggedInUser}
          />
          <PostArticle path='/createarticle/' loggedInUser={loggedInUser} />
          <LoginPage
            path='/login'
            changeLoggedInUser={this.changeLoggedInUser}
          />
          <ErrorPage error={{ status: 404, msg: 'Page not found' }} default />
        </Router>
      </div>
    );
  }
  componentDidMount() {
    const loggedInUser = localStorage.getItem('username');
    this.setState({
      loggedInUser
    });
  }
  changeLoggedInUser = username => {
    localStorage.setItem('username', username);
    this.setState({
      loggedInUser: username
    });
    navigate('/');
  };
}

export default App;
