import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class LoginPage extends Component {
  render() {
    return (
      <Link to='/login'>
        <button className='loginBtn'>LOGIN</button>
      </Link>
    );
  }
}
