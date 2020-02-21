import React from 'react';
import SongListContext from './SongListContext';

const UserContext = React.createContext({
	user: '',
	error: null,
	setError: () => {},
	clearError: () => {},
	setUser: () => {},
	
});

export default UserContext;

export class UserContextProvider extends React.Component {
	state = {
		user: '',
		error: null,
	};
	
	setUser = user => {
		this.setState({user});
	};
	
	setError = error => {
		console.error(error);
		this.setState({error})
	};
	
	clearError = () => {
		this.setState({error: null})
	};
	
	render() {
		const value = {
			user: this.state.user,
			error: this.state.error,
			setError: this.setError,
			clearError: this.clearError,
			setUser: this.setUser,
			
		};
		
		return (
			<UserContext.Provider value={value}>
				{this.props.children}
			</UserContext.Provider>
		);
	};
}