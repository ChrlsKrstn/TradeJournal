interface UserType {
  id: number,
  username: string,
  password: string,
  firstname: string,
  middlename: string,
  lastname: string
}

export interface UserState {
  isLogin: boolean, 
  username: string,
  password: string,
  data: UserType[]
} 

export const USER_INITIAL_STATE = {
  isLogin: false, 
  username: "",
  password: "",
  data: []
} 

export interface UserAction {
  setLogin: (username: string, password: string) => void;
  loginUser: (user:UserState) => boolean;
  logoutUser: () => void;
  addUser: (user: UserState) => void;
  updateUser: (user: UserState) => void;
  deletUser: (id: number) => void;
} 