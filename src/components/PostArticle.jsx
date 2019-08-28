import React, { Component } from 'react';
import { insertArticle } from '../utils';

export default class PostArticle extends Component {
  state = {
    title: '',
    topic: '',
    body: '',
    author: '',
    article: null
  };
  render() {
    const { title, topic, body, author } = this.state;
    return (
      <div className='postBtn'>
        <form className='addArticle' onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type='text'
              required
              name='author'
              value={author}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Title
            <input
              type='text'
              required
              name='title'
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Topic
            <input
              type='text'
              required
              name='topic'
              value={topic}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Body
            <textarea
              required
              rows='5'
              cols='30'
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
    const { title, topic, body, author } = this.state;
    insertArticle({ title, topic, body, author }).then(article => {
      console.log(article, 'CREATED ARTICLE');
    });
  };
}
