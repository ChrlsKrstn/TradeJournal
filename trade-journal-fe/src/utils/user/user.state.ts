export interface UserState {
  isLogin: boolean, 
  id: number,
  username: string,
  password: string,
  firstname: string,
  middlename: string,
  lastname: string
}  

export const USER_INITIAL_STATE = {
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
  logoutUser: () => void;
} 