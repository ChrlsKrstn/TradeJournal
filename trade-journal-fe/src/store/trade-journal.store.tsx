import { create } from "zustand";

import { UserState, UserAction } from "../utils/user/user.state";

export const useUserStore = create<UserState & UserAction>((set) => ({
  data: [],
  loginUser: (username: string, password: string) => {
  },
  addUser: (user: UserState) => {
    console.log(user)
  }
}));


