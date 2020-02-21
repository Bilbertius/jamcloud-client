import React from 'react';
import APIService from '../../services/APIService';



class Create extends React.Component {
	static defaultProps = {
		onSubmitSongSuccess: () => {
		
		}
	}
	
	state = { error: null }
	
	handleSubmitSong = e => {
		e.preventDefault();
		this.setState({ error: null })
		const { song, artist, album, venue, show_date } = e.target
		
		APIService.postSong({
			song: song.value,
			artist: artist.value,
			album: album.value,
			venue: venue.value,
			show_date: show_date.value
		})
			.then(res => {
				song.value = '';
				artist.value = '';
				album.value = '';
				venue.value = '';
				show_date.value = '';
				this.props.onSubmitSongSuccess()
			})
			.catch(res => {
				this.setState({ error: res.error })
			})
		
	};
	
	
	render() {
		return (
			<>
				<form onSubmit={this.handleSubmitSong}>
					<h3>Add Song</h3>
					<div>
						
						<span>
							<input id='song' name='song' type="text" placeholder='Song'/>
						</span>
						
						<span>
							<input id='artist'  name='artist' type="text" placeholder='Artist'/>
						</span>
						
						<span>
							<input id='album'  name='album' type="text" placeholder='Album'/>
						</span>
						
						<span>
							<input id='venue'  name='venue' type="text" placeholder='Venue'/>
						</span>
						
						<span>
							<input id='show_date'  name='show_date' type="date" placeholder='date'/>
						</span>
					</div>
					
					<button type='submit'>Submit</button>
				</form>
			
			</>
		)
	}
}

export default Create;