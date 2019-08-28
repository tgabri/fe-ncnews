import React, { Component } from 'react';
import { getComments } from '../utils';
import PostComment from './PostComment';
import DeleteComment from './DeleteComment';
export default class CommentsByID extends Component {
  state = {
    comments: null,
    isLoading: true,
    error: null
  };
  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <main>
        <PostComment article_id={this.props.path} />
        <div className='comments'>
          <h2>Comments</h2>
        </div>
        {comments.map(comment => (
          <div key={comment.comment_id} className='commentsContainer'>
            <div className='topBar'>
              <img
                src='https://image.flaticon.com/icons/svg/149/149452.svg'
                alt=''
              />
              <p>{comment.author}</p>
              <DeleteComment comment_id={comment.comment_id} />
            </div>
            <article>{comment.body}.</article>
            <div className='likesBar'>
              <img
                src='https://image.flaticon.com/icons/svg/149/149918.svg'
                alt=''
              />
              <div className='dateBox'>
                <p>{comment.created_at}.</p>
              </div>
              <div className='likeBox'>
                {comment.votes ? <p>{comment.votes} likes</p> : <p>0 like</p>}
              </div>
            </div>

            <div className='elementBtn'>
              <button>Like</button>
            </div>
          </div>
        ))}
      </main>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { path } = this.props;
    getComments(path).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };
}
