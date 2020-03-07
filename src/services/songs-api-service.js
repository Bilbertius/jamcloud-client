import TokenService from './token-service';

import config from '../config';



const SongsApiService = {
	
	getSongs() {
		return fetch(`${config.API_BASE_URL}/songs`, {
			method: 'GET',
			headers: {
				'content-type' : 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`
			}
		})
			.then(res => !res.ok ? res.json().then(err => Promise.reject(err.statusText)) : res.json())
	},
	
	deleteSong(song_id) {

		return fetch(`${config.API_BASE_URL}/songs/${song_id}`, {
		
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`,
				'mode': 'cors'
			}
			
		})
			.then(res => res.ok ? Promise.resolve('Deleted note successfully') : Promise.reject('Cannot delete note'))
			
			.catch(err => console.log(err))
			

	},
	
	postSong(song) {
	
		return fetch(`${config.API_BASE_URL}/songs`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify(song)
		})
			.then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())

	}
	
};


export default SongsApiService;