import React, { Component } from 'react';
import { getComments } from '../utils';
import PostComment from './PostComment';
import DeleteComment from './DeleteComment';
import { insertComment } from '../utils';
import { removeComment } from '../utils';
import CommentVoter from './reusable/CommentVoter';

export default class CommentsByID extends Component {
  state = {
    comments: null,
    isLoading: true,
    error: null
  };
  render() {
    const { isLoading, comments, error } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    return (
      <main>
        {this.props.loggedInUser && (
          <PostComment
            addComment={this.addComment}
            loggedInUser={this.props.loggedInUser}
          />
        )}
        <div className='comments'>
          <h2>Comments</h2>
        </div>
        {comments.map(comment => (
          <div key={comment.comment_id} className='commentsContainer'>
            <div className='topBar'>
              <div className='commentAuthorBox'></div>
              <img
                src='https://image.flaticon.com/icons/svg/149/149452.svg'
                alt=''
              />
              <p>{comment.author}</p>
              {comment.author === this.props.loggedInUser && (
                <DeleteComment
                  comment_id={comment.comment_id}
                  deleteComment={this.deleteComment}
                />
              )}
            </div>
            <article>{comment.body}.</article>

            <>
              <CommentVoter comment={comment} />
            </>
          </div>
        ))}
      </main>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    getComments(article_id).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  };

  addComment = newComment => {
    const { article_id } = this.props;
    insertComment(article_id, newComment).then(comment => {
      this.setState(({ comments }) => {
        return { comments: [comment, ...comments] };
      });
    });
  };

  deleteComment = comment_id => {
    removeComment(comment_id).then(() => {
      this.setState(currentState => {
        const newCommentList = currentState.comments.filter(comment => {
          return comment.comment_id !== comment_id;
        });
        return { comments: newCommentList };
      });
    });
  };
}
