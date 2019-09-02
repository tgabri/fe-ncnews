import React, { Component } from 'react';
import { changeArticleVotes, changeCommentVotes } from '../../utils';

export default class Voter extends Component {
  state = {
    voteChange: 0
  };
  render() {
    const { voteChange } = this.state;
    const {
      article_id,
      comment_id,
      votes,
      comment_count,
      created_at
    } = this.props.data;
    return (
      <>
        <div className='likesBar'>
          <img
            src='https://image.flaticon.com/icons/svg/149/149918.svg'
            alt=''
          />
          <div className='dateBox'>
            <p>{new Date(created_at).toLocaleString()}</p>
          </div>
          <div className='likeBox'>
            {votes ? <p>{votes + voteChange} like(s)</p> : <p>0 like</p>}
          </div>
          {article_id && (
            <div className='commentBox'>
              {comment_count ? (
                <p>{comment_count} comment(s)</p>
              ) : (
                <p>0 comment</p>
              )}
            </div>
          )}
        </div>
        <div className='elementBtn'>
          {voteChange < 1 && (
            <button
              disabled={voteChange === 1}
              onClick={e => this.changeLike(article_id, 1, comment_id)}
            >
              Like
            </button>
          )}
          {voteChange > -1 && (
            <button
              disabled={voteChange === -1}
              onClick={e => this.changeLike(article_id, -1, comment_id)}
            >
              Dislike
            </button>
          )}
        </div>
      </>
    );
  }

  changeLike = (article_id, value, comment_id) => {
    if (article_id) {
      changeArticleVotes(article_id, value).then(() => {
        this.setState(currentState => {
          return { voteChange: currentState.voteChange + value };
        });
      });
    } else {
      changeCommentVotes(comment_id, value).then(() => {
        this.setState(currentState => {
          return { voteChange: currentState.voteChange + value };
        });
      });
    }
  };
}
