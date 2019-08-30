import React from 'react';

export default class SortButtons extends React.Component {
  state = {
    buttons: ['DATE', 'COMMENTS', 'LIKES'],
    sortByValues: ['created_at', 'comment_count', 'votes']
  };
  render() {
    const { buttons, sortByValues } = this.state;
    return (
      <div className='sortMenu'>
        {sortByValues.map((sortByValue, i) => (
          <button
            key={`${sortByValue}`}
            onClick={e => this.props.fetchArticles(sortByValue)}
            value={`${sortByValue}`}
          >
            {`${buttons[i]}`}
          </button>
        ))}
      </div>
    );
  }
}
