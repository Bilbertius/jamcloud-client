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
	
	deleteSong(songID) {
		return fetch(`${config.API_BASE_URL}/songs/${songID}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify(songID)
		})
			.then(res => {
				!res.ok ? res.json().then(e => Promise.reject(e.statusText))
					: res.json()
			})
		
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