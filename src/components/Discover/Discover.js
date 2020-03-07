import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListSong from '../../routes/ListSong';
import './Discover.css';

function Discover(props) {
	return (
	<Router className="discoveryLists">
		
		<Switch>
			<Route path='/songs'>
				<ListSong />
			</Route>
		</Switch>
	</Router>
	)
}

export default Discover;