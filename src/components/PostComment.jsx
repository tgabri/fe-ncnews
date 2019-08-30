import React, { Component } from 'react';

export default class PostComment extends Component {
  state = {
    body: ''
  };
  render() {
    const { body } = this.state;
    return (
      <div className='postCommentContainer'>
        <form className='addCommentBox' onSubmit={this.handleSubmit}>
          <label>
            <p> Comment</p>
            <textarea
              required
              rows='5'
              cols='26'
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
    const { body } = this.state;
    const { addComment, loggedInUser } = this.props;
    addComment({ body, username: loggedInUser });
    this.setState({
      body: '',
      username: ''
    });
  };
}
