import  { AxiosResponse } from 'axios';
import { LoginRequest, LoginResponse } from './../types/Login';
import { RegisterRequest, RegisterResponse } from "../types/Register";
import httpRequest from "./api";

export const register = async (request: RegisterRequest): Promise<AxiosResponse<RegisterResponse>> =>{
    return await httpRequest.post('auth/register', request) //tergantung backend
}

export const login = async (request: LoginRequest): Promise<AxiosResponse<LoginResponse>> =>{
    return await httpRequest.post('auth/login', request) //tergantung backend
}