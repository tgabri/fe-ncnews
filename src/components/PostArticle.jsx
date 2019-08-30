import React, { Component } from 'react';
import { insertArticle } from '../utils';
import { navigate } from '@reach/router';

export default class PostArticle extends Component {
  state = {
    title: '',
    topic: '',
    body: '',
    article: null
  };
  render() {
    let { title, body } = this.state;
    return (
      <div className='postArticleContainer'>
        <form className='addArticle' onSubmit={this.handleSubmit}>
          <label>
            <p>Topic</p>
            <select onChange={this.handleChange} name='topic'>
              <option value='coding'>Coding</option>
              <option value='football'>Football</option>
              <option value='cooking'>Cooking</option>
            </select>
            {/* <input
              type='text'
              required
              name='topic'
              value={topic}
              onChange={this.handleChange}
            /> */}
          </label>
          <label>
            <p>Title</p>
            <input
              type='text'
              required
              name='title'
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <p> Body</p>
            <textarea
              required
              rows='15'
              cols='30'
              name='body'
              value={body}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type='submit'>SEND</button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { title, topic, body } = this.state;
    const { loggedInUser } = this.props;
    insertArticle({ title, topic, body, author: loggedInUser }).then(() => {
      navigate('/articles/');
    });
  };
}
