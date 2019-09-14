import React from 'react';
import UsersList from './UsersList';

export default class LoginPage extends React.Component {
  state = {
    username: '',
    registeredUsers: null
  };
  render() {
    const { username } = this.state;
    return (
      <>
        <div className='loginContainer'>
          <h3>Login</h3>
          <form onSubmit={this.handleLoginSubmit}>
            <label>Username: </label>
            <input
              placeholder='login with a registered user'
              type='text'
              required
              name='username'
              value={username}
              onChange={this.handleChange}
            />
            <br />
            <button type='submit' onClick={() => this.handleClick(username)}>
              Login
            </button>
          </form>
          <p>Click on a user below!</p>
        </div>
        <UsersList
          selectUser={this.handleClick}
          getRegisteredUsers={this.getRegisteredUsers}
        />
      </>
    );
  }

  getRegisteredUsers = registeredUsers => {
    this.setState({ registeredUsers });
  };

  handleClick = username => {
    this.setState({ username });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const { username, registeredUsers } = this.state;
    const registered = registeredUsers.some(user => user.username === username);
    if (registered) {
      this.props.changeLoggedInUser(username);
    } else {
      alert('User Not Found!');
      this.setState({ username: '' });
    }
  };
}
