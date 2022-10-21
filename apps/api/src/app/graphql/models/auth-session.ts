import { User } from '@nx-prisma/prisma-clients/Auth';

export interface AuthSession {
  id: User['id'];
  token: string;
  roles: string[];
  rememberMe: boolean;
  expiresIn: number;
  rules: object[];
}
