import React, { Component } from 'react';
import { removeArticle } from '../utils';

export default class DeleteArticle extends Component {
  render() {
    return (
      <button
        onClick={() => this.handleClick(this.props.article_id)}
        className='deleteBtn'
      >
        X
      </button>
    );
  }
  handleClick(article_id) {
    console.log(article_id);
    removeArticle(article_id);
  }
}
