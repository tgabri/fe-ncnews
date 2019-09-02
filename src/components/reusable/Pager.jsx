import React from 'react';

export default function Pager({ changePage, page, maxPage }) {
  return (
    <div className='pager'>
      <button onClick={() => changePage(-1)} disabled={page === 1}>
        Prev
      </button>
      <p>{page}</p>
      <button onClick={() => changePage(1)} disabled={page === maxPage}>
        Next
      </button>
    </div>
  );
}
