export interface UserState {
  registerFailed: boolean,
  loginFailed: boolean,
  isLogin: boolean, 
  id: number,
  username: string,
  password: string,
  firstname: string,
  middlename: string,
  lastname: string
}  

export const USER_INITIAL_STATE = {
  registerFailed: false,
  loginFailed: false,
  isLogin: false,
  id: 0,
  username: "",
  password: "",
  firstname: "",
  middlename: "",
  lastname: ""
} 

export interface UserAction {
  setUser: (user:UserState) => void;
  setLoginFailed: (loginFailed: boolean) => void;
  setRegisterFailed: (registerFailed: boolean) => void;
  logoutUser: () => void;
} 