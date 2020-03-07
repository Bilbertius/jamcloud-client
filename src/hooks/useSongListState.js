import { useState } from 'react';

export default (initialValue) => {
	const [songList, setSongList] = useState(initialValue);
	
	return {
		songList,
		addSong: (newSong) => {
			setSongList([...songList, newSong]);
		},
		
		setSongList
	};
};