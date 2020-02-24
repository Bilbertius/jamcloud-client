import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { SongListProvider } from './contexts/SongListContext';
import { SongProvider } from './contexts/SongContext';

ReactDOM.render(
	<BrowserRouter>
		<SongListProvider>
			<SongProvider>
				<App />
			</SongProvider>
		</SongListProvider>
	</BrowserRouter>,
	document.getElementById('root'));

