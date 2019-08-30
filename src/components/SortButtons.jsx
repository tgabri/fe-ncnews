import React from 'react';

export default function SortButtons({ fetchArticles }) {
  const buttons = ['DATE', 'COMMENTS', 'LIKES'];
  const sortByValues = ['created_at', 'comment_count', 'votes'];
  return (
    <div className='sortMenu'>
      {sortByValues.map((sortByValue, i) => (
        <button
          key={`${sortByValue}`}
          onClick={e => fetchArticles(sortByValue)}
          value={`${sortByValue}`}
        >
          {`${buttons[i]}`}
        </button>
      ))}
    </div>
  );
}
