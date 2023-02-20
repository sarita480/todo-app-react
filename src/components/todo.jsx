import React,{Component} from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import withNavigation from "./WithNavigation";
import withParams from "./withParams";

class TodoApp extends Component
{
    render()
    {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);

        return(
            <div>
                <Router>
                    <Routes>
                   {/* const LoginComponentWithNavigation = withNavigation(LoginComponent);*/}

                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome:name" element={<WelcomeComponentWithParams />} />
                        <Route path ="*" element={<ErrorComponent />}/>
                    </Routes>
                </Router>
            {/*<LoginComponent></LoginComponent>
            <WelcomeComponent></WelcomeComponent>*/}
            </div>
        )
    }
}
class WelcomeComponent extends Component
{
    render()
    {
        return (
            <div>Welcome`${this.props.params.name}`</div>
        )
    }

}
class LoginComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            username:'sarita',
            password:'',
            haslogInFailed:false,
            showSuccessMessage:false
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleUserPasswordChange= this.handleUserPasswordChange.bind(this)
        this.logInClicked = this.logInClicked.bind(this)
        
        

    }
    handleUserNameChange(event)
    {
        //gives the value which is being changed
       // console.log(event.target.value);
        this.setState({username:event.target.value })
    }
    handleUserPasswordChange(event)
    {
       // console.log(event.target.value)
        this.setState({password:event.target.value})
    }
    logInClicked()
    {
        //sarita, dummy(hard coded username and password)
        if(this.state.username === 'sarita' && this.state.password==='dummy')
        {
            this.props.navigate(`/welcome`)
            this.setState({showSuccessMessage:true})
            this.setState({haslogInFailed:false})
        }
        else
        {
            console.log("login failed")
            this.setState({showSuccessMessage:false})
            this.setState({haslogInFailed:true})
        }
       // console.log(this.state)

    }
    render()
    {
        return(
            <div>
               {/* <ShowInvalidCredentials haslogInFailed={this.state.haslogInFailed}/>
               <LogInSuccess showSuccessMessage={this.state.showSuccessMessage} />  */}
                {this.state.haslogInFailed && <div>Invalid Credentials</div>}
               {this.state.showSuccessMessage && <div>Login successful</div>}
           User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange}/>
           Password: <input type="password" name="password" value={this.state.password} onChange={this.handleUserPasswordChange}/>
           <button back onClick={this.logInClicked}>Login</button>
           </div>
        )
    }
    
}
function ErrorComponent()
{
    return(
        <div>None of the url matched. I don't know where to redirect.</div>
    )
}

// function ShowInvalidCredentials(props)
//     {
//         if(props.haslogInFailed)
//         {
//             return <div>Invalid Credentials</div>
//         }
    
//        return null
//     }
//  function LogInSuccess(props)
//     {
//         if(props.showSuccessMessage)
//         {
//             return <div>Login successful</div>
//         }
        
//         return null
//     }
export default TodoApp