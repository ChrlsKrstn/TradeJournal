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
  data: UserType[]
}

export interface UserAction {
  loginUser: (firstname: string, password: string) => boolean;
  logoutUser: () => void;
  addUser: (user: UserState) => void;
  updateUser: (user: UserState) => void;
  deletUser: (id: number) => void;
} 