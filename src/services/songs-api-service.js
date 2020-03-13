import TokenService from './token-service';

import config from '../config';



const SongsApiService = {
	
	getSongs() {
		return fetch(`https://damp-eyrie-72462.herokuapp.com/api/songs`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
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
			.then(res => res.ok ? Promise.resolve('Deleted song successfully') : Promise.reject('Cannot delete song'))
			.then(data => JSON.stringify(data))
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
			.then(res => res.ok ? Promise.resolve( res.json()) : Promise.reject('Cant post song'));

	}
	
};


export default SongsApiService;