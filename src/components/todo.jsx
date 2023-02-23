import React, {Component} from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import withNavigation from './WithNavigation.jsx' 
import withParams from './WithParams.jsx'

import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'


class TodoApp extends Component {
    render() {
      const LoginComponentWithNavigation = withNavigation(LoginComponent);

      const WelcomeComponentWithParams = withParams(WelcomeComponent);

      const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return (
            <div className="TodoApp">
              <Router>
                <HeaderComponentWithNavigation/>
                <Routes>
                  <Route path="/" element={<LoginComponentWithNavigation />} />
                  <Route path="/login" element={<LoginComponentWithNavigation />} />
                  <Route path="/welcome/:name" element={
                    <AuthenticatedRoute>
                      <WelcomeComponentWithParams />
                    </AuthenticatedRoute>
                  } />
                  <Route path="/todos" element={
                    <AuthenticatedRoute>
                      <ListTodosComponent />
                    </AuthenticatedRoute>
                  } />
                  <Route path="/logout" element={
                    <AuthenticatedRoute>
                      <LogoutComponent />
                    </AuthenticatedRoute>
                  } />
                  <Route path="*" element={<ErrorComponent />} />
                </Routes>
                <FooterComponent/>
              </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.google.com" className="navbar-brand">Google</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 @in28minutes</span>
            </footer>
        )
    }
}

class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'in28minutes',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  loginClicked() {
    if(this.state.username==='sarita' && this.state.password==='dummy'){
      AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
      this.props.navigate(`/welcome/${this.state.username}`)
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    console.log(this.state)
  }

    render() {
        return (
          <div className='form-outline mb-4'>
              {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
              <div className="TodoApp">
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
              </div>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
             {id: 1, description : 'Learn to Dance', done:false, targetDate: new Date()},
             {id: 2, description : 'Become an Expert at React', done:false, targetDate: new Date()},
             {id: 3, description : 'Visit India', done:false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                 <h1>List Todos</h1>
                 <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                 </div>
            </div>
        )
    }
}

export default TodoApp