
import React, {Component} from "react"
import TodoDataService from '../api/todo/TodoDataService'
import AuthenticationService from "./AuthenticationService"
class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
            //  {id: 1, description : 'Learn to Dance', done:false, targetDate: new Date()},
            //  {id: 2, description : 'Become an Expert at React', done:false, targetDate: new Date()},
            //  {id: 3, description : 'Visit India', done:false, targetDate: new Date()}
            ]
        }
    }
    componentDidMount()
    {
       TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUserName())
       .then(response=>
        {
            //console.log(response)
            this.setState({todos:response.data})
        })
       .catch()

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
export default ListTodosComponent
