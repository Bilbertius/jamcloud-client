import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SongList from './SongsList';
import './Discover.css';

function Discover(props) {
	return (
	<Router className>
		<Link to='/songs'>Songs</Link>
		
		<Link to='/jamlist'>JamLists</Link>
		
		<Switch>
			<Route path='/songs'>
				<SongList />
			</Route>
		
			<Route to='/jamlists'>
				<h3>Jamlists</h3>
				<ul>
					<li>Jam1</li>
					<li>Jam2</li>
					<li>Jam3</li>
					<li>Jam4</li>
					<li>Jam5</li>
					<li>Jam6</li>
					<li>Jam7</li>
					<li>Jam8</li>
					<li>Jam9</li>
					<li>Jam10</li>
					<li>Jam11</li>
					<li>Jam12</li>
					<li>Jam13</li>
					<li>Jam14</li>
					<li>Jam15</li>
					<li>Jam16</li>
					<li>Jam17</li>
					<li>Jam18</li>
					<li>Jam19</li>
					<li>Jam20</li>
				</ul>
			</Route>
		</Switch>
	</Router>
	)
}

export default Discover;