import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class SignUpPage extends Component {
  render() {
    return (
      <Link to='/signup'>
        <button className='signupBtn'>SIGNUP</button>
      </Link>
    );
  }
}
