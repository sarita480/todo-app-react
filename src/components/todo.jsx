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
    render()
    {
        return(
            <div >
           User Name:<input type="text" name="username" />
           Password:<imput type="text" name="password"/>
           <button>Login</button>
           </div>
        )
    }
}
export default TodoApp