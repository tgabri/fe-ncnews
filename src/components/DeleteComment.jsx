import React, { Component } from 'react';
import { removeComment } from '../utils';

export default class DeleteComment extends Component {
  render() {
    return (
      <button
        onClick={() => this.handleClick(this.props.comment_id)}
        className='deleteBtn'
      >
        X
      </button>
    );
  }
  handleClick(comment_id) {
    removeComment(comment_id);
  }
}
