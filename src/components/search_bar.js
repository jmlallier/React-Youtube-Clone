import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<input onChange={e => console.log('Input: ', e.target.value)} type="search" />
		);
	}
}

export default SearchBar;