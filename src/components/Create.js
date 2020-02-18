import React from 'react';
import ApiService from '../services/APIService';


class Create extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			song : '',
			artist: '',
			album: '',
			venue: '',
			date: ''
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	

	handleSubmit(event) {
		event.preventDefault();
		const { song ,artist, album, venue, show_date } = event.target;
		
		ApiService.postSong({
			song: song.value,
			artist: artist.value,
			album: album.value,
			venue: venue.value,
			show_date: show_date.value
		})
			.then(song => {
				return (
					song.value = '',
					artist.value = '',
					album.value = '',
					venue.value = '',
					show_date.value = ''
			)
	})
			
		
	}
	
	
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="song">
							Song
						</label>
						<input id='song' name='artist' type="text" />
						<label htmlFor="artist">
							Artist
						</label>
						<input id='artist'  name='artist'type="text" />
						<label htmlFor="album">
							Album
						</label>
						<input id='album'  name='album'type="text" />
						<label htmlFor="venue">
							Venue
						</label>
						<input id='venue'  name='venue'type="text" />
						<label htmlFor="show_date">
							Date
						</label>
						<input id='show_date'  name='show_date'type="text" />
					</div>
					
					<button type='submit'>Submit</button>
				</form>
			
			</>
		)
	}
}

export default Create;