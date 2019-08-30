import React, { Component } from 'react';
import { changeCommentVotes } from '../../utils';

export default class CommentVoter extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    return (
      <>
        <div className='likesBar'>
          <img
            src='https://image.flaticon.com/icons/svg/149/149918.svg'
            alt={`${this.props.comment.created_at}`}
          />
          <div className='dateBox'>
            <p>{new Date(this.props.comment.created_at).toLocaleString()}</p>
          </div>
          <div className='likeBox'>
            {this.props.comment.votes ? (
              <p>{this.props.comment.votes + voteChange} likes</p>
            ) : (
              <p>0 like</p>
            )}
          </div>
        </div>
        <div className='elementBtn'>
          {voteChange < 1 && (
            <button
              disabled={voteChange === 1}
              onClick={e => this.changeLike(this.props.comment.comment_id, 1)}
            >
              Like
            </button>
          )}
          {voteChange > -1 && (
            <button
              disabled={voteChange === -1}
              onClick={e => this.changeLike(this.props.comment.comment_id, -1)}
            >
              Dislike
            </button>
          )}
        </div>
      </>
    );
  }

  changeLike = (comment_id, value) => {
    changeCommentVotes(comment_id, value).then(() => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + value };
      });
    });
  };
}
