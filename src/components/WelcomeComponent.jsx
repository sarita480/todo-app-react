
import React, {Component} from 'react'
import {Link}  from 'react-router-dom'
import HelloWorldService from '../api/todo/HelloWorldService.js'
class WelcomeComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state= {
            welcomeMessage:' '
        }
        this.handlesuccessfulResponse = this.handlesuccessfulResponse.bind(this)
    }
    render() 
    {

        return (
          <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}! You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className='container'>
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get welcome message</button>
                </div>
                <div className='container'>
                {this.state.welcomeMessage}
                </div>
            </>
        )        
    }
    retrieveWelcomeMessage()
    {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handlesuccessfulResponse(response))
        HelloWorldService.executeHelloWorldBeanService()
        .then(response => this.handlesuccessfulResponse(response))
        


    }

handlesuccessfulResponse(response)
{
    console.log(response)
   this.setState({ welcomeMessage: response.data.message})
   //console.log(response)

}
}
export default WelcomeComponent