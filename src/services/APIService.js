import TokenService from './token-service';
import config from '../config';



const APIService = {
	getSongs() {
		return fetch(`${config.API_ENDPOINT}/songs`)
			.then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
	},
	deleteSong(songID) {
		return fetch(`${config.API_ENDPOINT}/songs/${songID}`, {
			method: 'DELETE',
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res => !res.ok? res.json().then(e => Promise.reject(e)) : res.json())
	},
	postSong(song) {
	
		return fetch(`${config.API_ENDPOINT}/songs`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify(song)
		})
			.then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())

	},
	getSongReview(songID) {
		return fetch(`${config.API_ENDPOINT}/songs/${songID}/reviews`, {
			headers: {
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
		})
			.then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
	},
	postReview(songID, content) {
		return fetch(`${config.API_ENDPOINT}/reviews`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'authorization': `bearer ${TokenService.getAuthToken()}`,
			},
			body: JSON.stringify({
				song_id: songID,
				content,
			}),
		})
			.then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
	},
	postUser(newUser) {
		return fetch(`${config.API_ENDPOINT}/users`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newUser)
		})
			.then(res => !res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
	}
};


export default APIService;