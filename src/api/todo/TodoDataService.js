import axios from 'axios'
class TodoDataService
{

    retrieveAllTodos(name)
    {
        return axios.get(`http://localhost:8080/user/${name}/todos`)
    }
}
export default new TodoDataService()