import { User } from "./User";

// tergantung backend
export interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  access_token: string;
  level_access: string;
}
