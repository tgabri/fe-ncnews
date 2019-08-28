import React, { Component } from 'react';
import { insertComment } from '../utils';

export default class PostComment extends Component {
  state = {
    body: '',
    username: ''
  };
  render() {
    const { body, username } = this.state;
    return (
      <div className='postBtn'>
        <form className='addArticle' onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              type='text'
              required
              name='username'
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Comment:
            <textarea
              required
              rows='5'
              cols='30'
              name='body'
              value={body}
              onChange={this.handleChange}
            />
          </label>
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
    const { article_id } = this.props;
    const { body, username } = this.state;
    insertComment(article_id, { body, username });
    this.setState({
      body: '',
      username: ''
    });
  };
}
