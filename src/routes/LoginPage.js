import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { Section } from '../components/Utils/Utils';

export default class LoginPage extends React.Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};
	
	handleLoginSuccess = () => {
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/songs';
		history.push(destination)
	};
	
	render() {
		return (
			<Section className='LoginPage'>
				<LoginForm
					onLoginSuccess={this.handleLoginSuccess}
				/>
			</Section>
		)
	}
}