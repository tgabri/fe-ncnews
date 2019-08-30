import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getTopics } from '../utils';
import ErrorPage from './reusable/ErrorPage';

export default class TopicsList extends Component {
  state = {
    isLoading: true,
    topics: null,
    error: null
  };
  render() {
    const { isLoading, topics, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <ErrorPage />;
    return (
      <main>
        <ul className='topicsList'>
          <Link to='/articles/'>
            <h2>GO TO ARTICLES</h2>
          </Link>
          <div className='imgBox'>
            <h3>TOPICS</h3>
            {topics.map(topic => (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}/articles`}>
                  <img src={`/img/${topic.slug}.jpg`} alt={topic.slug}></img>
                  <h2> {topic.slug}</h2>
                  <p>{topic.description}</p>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </main>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
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
