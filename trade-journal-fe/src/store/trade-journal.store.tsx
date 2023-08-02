import { create } from "zustand";

import { UserState, UserAction } from "../utils/user/user.state";

export const useUserStore = create<UserState & UserAction>((set, get) => ({
  isLogin: false,
  data: [], 
  loginUser: (username: string, password: string) => {
    if (username == "charles" && password == "charles") {
      try {
        set(() => ({
          isLogin: true,
          data:[
            {
              id: 0,
              username: username,
              password: password,
              firstname: username,
              middlename: "string",
              lastname: "string"
            },
          ]
        }));   
      } catch (error) {
        return false;
      }
      
    } 
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


