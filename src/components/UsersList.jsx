import React, { Component } from 'react';
import { getUsers } from '../utils';
import Loading from './reusable/Loading';
import ErrorPage from './reusable/ErrorPage';

export default class UsersList extends Component {
  state = {
    users: null,
    isLoading: true,
    error: null
  };
  render() {
    const { isLoading, users, error } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <ErrorPage error={error} />;

    return (
      <main>
        <div className='usersListContainer'>
          <h3>Registered Users:</h3>
          <ul>
            {users.map(user => (
              <li key={user.username}>
                <p onClick={() => this.handleClick(user.username)}>
                  {user.username}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }
  handleClick = username => {
    this.props.selectUser(username, this.users);
  };

  fetchUsers = () => {
    getUsers()
      .then(users => {
        this.setState({
          users,
          isLoading: false,
          error: null
        });
        this.props.getRegisteredUsers(users);
      })
      .catch(error => {
        const {
          response: {
            status,
            data: { msg }
          }
        } = error;

        this.setState({
          error: { msg, status },
          isLoading: false
        });
      });
  };
}
