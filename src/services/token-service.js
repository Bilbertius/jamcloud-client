import config from '../config'

const TokenService = {
	saveAuthToken(token) {
		window.localStorage.setItem(config.JWT_SECRET, token)
	},
	getAuthToken() {
		return window.localStorage.getItem(config.JWT_SECRET)
	},
	clearAuthToken() {
		window.localStorage.removeItem(config.JWT_SECRET)
	},
	hasAuthToken() {
		return !!TokenService.getAuthToken()
	},
	makeBasicAuthToken(userName, password) {
		return window.btoa(`${userName}:${password}`)
	},
}

export default TokenService;