import { create } from "zustand"; 
import { UserState, UserAction, USER_INITIAL_STATE } from "../utils/user/user.state";   
export const useUserStore = create<UserState & UserAction>((set, get) => ({
  ...USER_INITIAL_STATE,
  setLogin: (username: string, password: string) => {
    set(() => ({
        username: username,
        password: password
      }));   
  },
  loginUser: (user: UserState) => { 
 
    // set(() => ({
    //   isLogin: true,
    //   data:[
    //     {
    //       id: 0,
    //       username: user.data,
    //       password: password,
    //       firstname: username,
    //       middlename: "string",
    //       lastname: "string"
    //     },
    //   ]
    // }));   

    return get().isLogin;
  },
  logoutUser: () => {
    set(() => ({
      isLogin: false
    }))
  },
  addUser: (user: UserState) => {
     
  },
  updateUser: (user: UserState) => {

  },
  deletUser: (id: number) => {

  }
}));


