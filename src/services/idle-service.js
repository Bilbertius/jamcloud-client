let _timeoutId;
let _idleCallback = null;
const _notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart' ]
const _FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

const IdleService = {
	setIdleCallback(idleCallback) {
		
		_idleCallback = idleCallback
	},
	
	resetIdleTimer(ev) {
		console.info('event:', ev.type);
		/* remove any timeouts as the user just interacted */
		clearTimeout(_timeoutId);
		/* queue the callback to happen 5 minutes from now */
		_timeoutId = setTimeout(_idleCallback, _FIVE_MINUTES_IN_MS)
	},
	regiserIdleTimerResets() {
		
		_notIdleEvents.forEach(event =>
			document.addEventListener(event, IdleService.resetIdleTimer, true)
		)
	},
	unRegisterIdleResets() {
		
		clearTimeout(_timeoutId)
		_notIdleEvents.forEach(event =>
			document.removeEventListener(event, IdleService.resetIdleTimer, true)
		)
	},
};

export default IdleService