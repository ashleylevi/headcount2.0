import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = (e) => {
    let value = e.target.value
    this.props.displaySearch(value)
  }
  
  render() {
    return (
      <form className="form">
        <input type="text" placeholder="Search School Districts" onChange={this.handleSearch}/>
      </form>
    )
  }
}

Search.propTypes = {
  displaySearch: PropTypes.func
}

export default Search;