import axios from "axios"

const httpRequest = axios.create({
    baseURL: 'https://api.kontenbase.com/query/api/v1/b7a3b739-06c9-4a04-bb00-b18f2447cc92/'
}) //tergantung backend

export default httpRequest