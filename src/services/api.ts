import axios from "axios"

const httpRequest = axios.create({
    baseURL: 'http://api.tobang.ga/'
}) //tergantung backend

export default httpRequest