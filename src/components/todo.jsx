import React,{Component} from "react";

class TodoApp extends Component
{
    render()
    {
        return(
            <LoginComponent></LoginComponent>
        )
    }
}
class LoginComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state=
        {
            username:'sarita',
            password:'',
            haslogInFailed:'false',
            showSuccessMessage:'false'
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleUserPasswordChange= this.handleUserPasswordChange.bind(this)
        this.logInClicked = this.logInClicked.bind(this)

    }
    handleUserNameChange(event)
    {
        //gives the value which is being changed
        console.log(event.target.value);
        this.setState({username:event.target.value })
    }
    handleUserPasswordChange(event)
    {
        console.log(event.target.value)
        this.setState({password:event.target.value})
    }
    logInClicked()
    {
        //sarita, dummy(hard coded username and password)
        if(this.state.username === 'sarita' && this.state.password==='dummy')
        {
            console.log("successful")
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
            <div >
                <showInvalidCredentials haslogInFailed={this.state.haslogInFailed}/>
                <div>Login successful</div>
           User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange}/><br/>
           Password:<input type="password" name="password" value={this.state.password} onChange={this.handleUserPasswordChange}/><br/>
           <button back onClick={this.logInClicked}>Login</button>
           </div>
        )
    }
    
}
function showInvalidCredentials(props)
    {
        if(props.haslogInFailed)
        {
            return <div>Invalid Credentials</div>
        }
        else
        {
            return <div>Login Successful</div>
        }
    }
export default TodoApp