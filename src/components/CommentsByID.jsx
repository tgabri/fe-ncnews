import React, { Component } from 'react';
import { getComments } from '../utils';
import PostComment from './PostComment';
import DeleteComment from './DeleteComment';
import { insertComment } from '../utils';
import { removeComment } from '../utils';
import Voter from './reusable/Voter';
import Pager from './reusable/Pager';

export default class CommentsByID extends Component {
  state = {
    comments: null,
    isLoading: true,
    error: null,
    page: 1,
    maxPage: null
  };
  render() {
    const { isLoading, comments, error, page, maxPage } = this.state;
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
        <Pager page={page} maxPage={maxPage} changePage={this.changePage} />
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
              <Voter data={comment} />
            </>
          </div>
        ))}
      </main>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const pageChange = this.state.page !== prevState.page;
    if (pageChange) this.fetchComments();
  }

  componentDidMount() {
    this.fetchComments();
  }

  changePage = direction => {
    this.setState(({ page }) => {
      return { page: page + direction };
    });
  };

  fetchComments = () => {
    const { article_id, comment_count } = this.props;
    const { page } = this.state;
    getComments(article_id, page).then(({ comments }) => {
      const maxPage = Math.ceil(comment_count / 10);
      this.setState({ comments, isLoading: false, maxPage });
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
