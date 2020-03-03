
import React, { Component } from 'react';
import SongListContext from '../contexts/SongListContext';
import SongsApiService from '../services/songs-api-service';
import { Section } from '../components/Utils/Utils';
import SongListItem from '../components/SongListItem/SongListItem';

export default class SongList extends Component {
	static contextType = SongListContext;
	
	
	
	
	componentDidMount() {
		this.context.clearError();
		SongsApiService.getSongs()
			.then(this.context.setSongList)
			.catch(this.context.setError)
	}
	
	
	
	renderSongs() {
		const { songList = [] } = this.context;
		return songList.map(song =>
			<SongListItem
				key={song.id}
				song={song}
				onDeleteSong={this.context.setSongList}
			/>
		)
	}
	
	render() {
		const { error } = this.context;
		return (
			<Section list className='SongListPage'>
				{error
					? <p className='red'>There was an error, try again</p>
					: this.renderSongs()}
			</Section>
		)
	}
}