import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import FrontPage from './components/FrontPage';
import Profile from './components/Profile';

import Discover from './components/Discover';
import Create from './components/Create.js';
import LoginPage from './routes/LoginPage';
import IdleService from './services/idle-service';
import AuthApiService from './services/auth-api-service';
import RegistrationPage from './routes/RegistrationPage';
import TokenService from './services/token-service.js';
//import PrivateRoute from './Utils/PrivateRoute';
//import PublicOnlyRoute from './Utils/PublicRouteOnly';


export default class App extends React.Component {
    state = {hasError: false}
    
    static getDerivedStateFromError(error) {
        console.error(error)
        return {hasError: true}
    }
    
    componentDidMount() {
        
        IdleService.setIdleCallback(this.logoutFromIdle)
        
        
        if (TokenService.hasAuthToken()) {
            
            
            IdleService.regiserIdleTimerResets()
            
            
            TokenService.queueCallbackBeforeExpiry(() => {
                
                AuthApiService.postRefreshToken()
            })
        }
    }
    
    componentWillUnmount() {
        
        IdleService.unRegisterIdleResets()
        
        TokenService.clearCallbackBeforeExpiry()
    }
    
    logoutFromIdle = () => {
        /* remove the token from localStorage */
        TokenService.clearAuthToken()
        /* remove any queued calls to the refresh endpoint */
        TokenService.clearCallbackBeforeExpiry()
        /* remove the timeouts that auto logout when idle */
        IdleService.unRegisterIdleResets()
        /*
		  react won't know the token has been removed from local storage,
		  so we need to tell React to rerender
		*/
        this.forceUpdate()
    }
    
    render() {
        
        
        return (
            <Router>
                <header><h1>Jamlist</h1>
                    <nav>
                        
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/user'>Profile</Link>
                            </li>
                            <li>
                                <Link to='/songs'>Discover</Link>
                            </li>
                            <li>
                                <Link to='/maker'>Create</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Registration</Link>
                            </li>
                        
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/login'>
                        <LoginPage />
                    </Route>
                    <Route path={'/register'}>
                        <RegistrationPage />
                    </Route>
                    <Route path='/user'>
                        <Profile />
                    </Route>
                    
                    <Route path='/songs'>
                        <Discover />
                    </Route>
                    
                    <Route path='/maker'>
                        <Create />
                    </Route>
                    
                    <Route to='/'>
                        <FrontPage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}