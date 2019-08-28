import React, { Component } from 'react';
import { changeVotes } from '../utils';

export default class Voter extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    return (
      <>
        <div className='likesBar'>
          <div className='likeBox'>
            {this.props.article.votes ? (
              <p>{this.props.article.votes + voteChange} likes</p>
            ) : (
              <p>0 like</p>
            )}
          </div>
          <div className='commentBox'>
            {this.props.article.comment_count ? (
              <p>{this.props.article.comment_count} comments</p>
            ) : (
              <p>0 comment</p>
            )}
          </div>
        </div>
        <div className='elementBtn'>
          <button
            onClick={e => this.changeLike(this.props.article.article_id, 1)}
          >
            Like
          </button>
          <button
            onClick={e => this.changeLike(this.props.article.article_id, -1)}
          >
            Dislike
          </button>
          <button>Comment</button>
        </div>
      </>
    );
  }

  changeLike = (article_id, value) => {
    changeVotes(article_id, value).then(article => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + value };
      });
    });
  };
}
