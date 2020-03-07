import React, {useState, useEffect } from 'react';


import SongsApiService from '../services/songs-api-service';
import { Section } from '../components/Utils/Utils';
import SongListItem from '../components/SongListItem/SongListItem';

export default function ListSong() {
	const [songList, setSongList] = useState([]);
	
	const deleteSong = (id) => {
		setSongList(songList.filter(song => song.id !== id))
	};
	useEffect(() => {
		const list = SongsApiService.getSongs();
				setSongList(list);
			
	
		}, [setSongList]);
	
	
	return (
		<Section>
			{songList.map(song => (
					
					<SongListItem
						key={song.id}
						song={song}
						deleteSong={deleteSong(song.id)}/>
			
					
			))}
		
		</Section>
	
	)
}