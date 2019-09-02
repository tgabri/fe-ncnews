import React from 'react';

export default class LoginPage extends React.Component {
  state = {
    username: ''
  };
  render() {
    const { username } = this.state;
    return (
      <div className='loginContainer'>
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            placeholder='cooljmessy'
            type='text'
            required
            name='username'
            value={username}
            onChange={this.handleChange}
          />
          <br />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;

    this.props.changeLoggedInUser(username);
  };
}
