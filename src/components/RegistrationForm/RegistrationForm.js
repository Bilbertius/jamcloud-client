import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'

import AuthApiService from '../../services/auth-api-service';

export default class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {}
	};
	
	state = {error: null}
	
	handleSubmit = ev => {
		ev.preventDefault();
		const { user_name, user_email, password} = ev.target;
		
			
			this.setState({error: null});
			AuthApiService.postUser({
				user_name: user_name.value,
				user_email: user_email.value,
				password: password.value,
				
			})
				.then(user => {
					user_name.value = '';
					user_email.value = '';
					password.value = '';
					this.props.onRegistrationSuccess();
				})
				.catch(res => {
					this.setState({error: res.error});
				})
		
	};
	
	render() {
		const { error } = this.state;
		return (
			<form
				className='RegForm'
				onSubmit={this.handleSubmit}
			>
			<h2 id='reg_header'>Register</h2>
				
				<div className='user_name'>
			
					<Input
						name='user_name'
						type='text'
						required
						id='user_name'
						placeholder='Username'
					>
					</Input>
				</div>
				<div className='user_email'>
				
					<Input
						name='user_email'
						type='text'
						required
						id='user_email'
						placeholder='E-mail'>
					</Input>
				</div>
				<div className='password'>
					<Input
						name='password'
						type='password'
						required
						autoComplete='new-password'
						id='password'
						placeholder='Password'
					>
					</Input>
				</div>
				
				<Button onSubmit={this.handleSubmit}type='submit'>
					Register
				</Button>
			</form>
		)
	}
}