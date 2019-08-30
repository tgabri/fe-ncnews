import React from 'react';

export default function ErrorPage({ error }) {
  return (
    <div className='errorMsg'>
      <p>
        Status:{error.status}, {error.msg}
      </p>
    </div>
  );
}
