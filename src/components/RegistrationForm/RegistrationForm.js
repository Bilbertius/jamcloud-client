import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service';

export default class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {}
	}
	
	state = {error: null}
	
	handleSubmitUser = e => {
		e.preventDefault();
	
		this.setState({ error: null });
		const { user_name, user_email, password} = e.target;
		AuthApiService.postUser({
			user_name: user_name.value,
			user_email: user_email.value,
			password: password.value
			
			
		})
			.then(res => {
				user_name.value = '';
				user_email.value = '';
				password.value = '';
				this.props.onRegistrationSuccess()
			})
			.catch(res => {
				this.setState({ error: res.error })
			})
	}
	
	render() {

		return (
			<form
				className='RegForm'
				onSubmit={this.handleSubmitUser}
			>
			
			<h2 id='reg_header'>Register</h2>
				{this.state.error ? <p className='error'>{this.state.error}</p> : null}
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
				
				<Button class='sign-in-reg' type='submit'>
					Register
				</Button>
			</form>
		)
	}
}