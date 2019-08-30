import React, { Component } from 'react';

export default class DeleteComment extends Component {
  render() {
    return (
      <button
        onClick={() => this.handleClick(this.props.comment_id)}
        className='deleteCommentBtn'
      >
        X
      </button>
    );
  }
  handleClick(comment_id) {
    this.props.deleteComment(comment_id);
  }
}
