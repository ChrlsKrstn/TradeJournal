interface UserType {
  id: number,
  username: string,
  password: string,
  firstname: string,
  middlename: string,
  lastname: string
}

export interface UserState {
  data: UserType[]
}

export interface UserAction {
  loginUser: (firstname: string, password: string) => void;
  addUser: (user: UserState) => void;
}