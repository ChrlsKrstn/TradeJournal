import { create } from "zustand";

import { UserState, UserAction } from "../utils/user/user.state";

export const useUserStore = create<UserState & UserAction>((set) => ({
  isLogin: false,
  data: [], 
  loginUser: (username: string, password: string) => {
    if (username == "charles" && password == "charles") {
      set(() => ({
        isLogin: true,
        data:[
          {
            id: 0,
            username: "string",
            password: "string",
            firstname: "string",
            middlename: "string",
            lastname: "string"
          },
        ]
      })); 
    }
  },
  addUser: (user: UserState) => {
    
  },
  updateUser: (user: UserState) => {

  },
  deletUser: (id: number) => {

  }
}));


