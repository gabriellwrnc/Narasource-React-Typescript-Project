import axios from "axios"
import { config } from "yargs"

export const httpRequest = axios.create({
    baseURL: 'https://api.tobang.ga/'
}) //tergantung backend

export const httpRequestAdmin = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
}) //tergantung backend


// httpRequest.interceptors.request.use(config=> {
//     const appToken = localStorage.getItem('@token')
    
//     if(appToken){
//         config.headers = {
//             'Authorization': `Bearer ${appToken}`
//         }
//     } else {
//         window.location.href = '/auth/login'
//     }

//     return config
// })

export default httpRequest