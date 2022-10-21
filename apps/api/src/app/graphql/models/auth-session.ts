import { RequestUser } from "../../auth/models/request-user";

export interface AuthSession {
  id: RequestUser['id'];
  token: string;
  roles: string[];
  rememberMe: boolean;
  expiresIn: number;
  rules: object[];
}
