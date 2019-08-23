import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <form className='searchForm' /*onSubmit={e => this.handleSubmit(e)}*/>
        <label>
          <input
            className='searchBar'
            // onChange={e => this.handleChange(e)}
            type='text'
            // value={this.state.searchTerm}
          />
          <button
            className='searchBtn'
            // onClick={e => this.props.fetchData(null, this.state.searchTerm)}
          >
            Search
          </button>
        </label>
      </form>
    );
  }
}

export default SearchBar;
