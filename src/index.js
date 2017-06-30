import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const YOUTUBE_API_KEY = 'AIzaSyC-hB3S9Wr7QEXiMxQLV7uAfk6LR7jwwiw';

// App
// Search
// Video & description
// Video list
// -- video item

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));