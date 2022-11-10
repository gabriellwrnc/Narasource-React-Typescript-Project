import { RegisterResponse } from "./Register";

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = RegisterResponse;
