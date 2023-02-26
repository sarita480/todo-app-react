import axios from 'axios'
class HelloWorldService
{

    executeHelloWorldService()
    {
        //console.log("Executed Service")
        return axios.get('http://localhost:8080/hello')
    }
    executeHelloWorldBeanService()
    {
        //console.log("Executed Service")
        return axios.get('http://localhost:8080/hello-bean')
    }
}
export default new HelloWorldService()