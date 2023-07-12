import { UserFB } from "../../types";

export interface LoginFormInput {
  login: String;
  password: String;
}

export interface DialogProps {
  onLogin: (status: boolean) => void
  setCurrentUser: (user: UserFB) => void
}