import { RegisterRequest, RegisterResponse } from './../types/Register';
import { AxiosError } from 'axios';
import { LoginResponse, LoginRequest } from './../types/Login';
import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { authService } from '../services';

export const useLogin = () => useMutation<AxiosResponse<LoginResponse>,AxiosError,LoginRequest>(authService.login)

export const useRegister = () => useMutation<AxiosResponse<RegisterResponse>,AxiosError,RegisterRequest>((data) => {
    return authService.register(data);
  });