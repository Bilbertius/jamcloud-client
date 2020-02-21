
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'
import RegistrationPage from '../../routes/RegistrationPage';

export default class LoginForm extends Component {
	static defaultProps = {
		onLoginSuccess: () => {}
	}
	
	state = { error: null }
	
	handleSubmitJwtAuth = ev => {
		ev.preventDefault()
		this.setState({ error: null })
		const { user_name, password } = ev.target
		
		AuthApiService.postLogin({
			user_name: user_name.value,
			password: password.value,
		})
			.then(res => {
				user_name.value = ''
				password.value = ''
				this.props.onLoginSuccess()
			})
			.catch(res => res.error)
	}
	
	render() {
		const { error } = this.state
		return (
			<form
				className='LoginForm'
				onSubmit={this.handleSubmitJwtAuth}
			>
				<h2 id='login_header'>Login</h2>
				
				<div role='alert'>
					{error && <p className='red'>{error}</p>}
				</div>
				<div className='user_name'>
				
					<Input
						required
						placeholder='Username'
						name='user_name'
						id='LoginForm__user_name'>
					</Input>
				</div>
				<div className='password'>
				
					<Input
						required
						name='password'
						type='password'
						id='LoginForm__password'
						placeholder='Password'
					>
					</Input>
				</div>
				<Button type='submit'>
					Login
				</Button>
				
				<span id='reglink-span'>Not registered? <Link id='reglink' to='/register'>Click here</Link> to sign up.</span>
				<Route path='/register' >
					<RegistrationPage />
				</Route>
			
			</form>
		)
	}
}