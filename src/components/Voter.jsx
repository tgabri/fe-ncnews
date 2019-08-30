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
        {this.props.article.article_id && (
          <div className='likesBar'>
            <img
              src='https://image.flaticon.com/icons/svg/149/149918.svg'
              alt=''
            />
            <div className='dateBox'>
              <p>{this.props.created_at}</p>
            </div>
            <div className='likeBox'>
              {this.props.article.votes ? (
                <p>{this.props.article.votes + voteChange} like(s)</p>
              ) : (
                <p>0 like</p>
              )}
            </div>
            <div className='commentBox'>
              {this.props.article.comment_count ? (
                <p>{this.props.article.comment_count} comment(s)</p>
              ) : (
                <p>0 comment</p>
              )}
            </div>
          </div>
        )}
        <div className='elementBtn'>
          {voteChange < 1 && (
            <button
              disabled={voteChange === 1}
              onClick={e => this.changeLike(this.props.article.article_id, 1)}
            >
              Like
            </button>
          )}
          {voteChange > -1 && (
            <button
              disabled={voteChange === -1}
              onClick={e => this.changeLike(this.props.article.article_id, -1)}
            >
              Dislike
            </button>
          )}
        </div>
      </>
    );
  }

  changeLike = (article_id, value) => {
    changeVotes(article_id, value).then(() => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + value };
      });
    });
  };
}
