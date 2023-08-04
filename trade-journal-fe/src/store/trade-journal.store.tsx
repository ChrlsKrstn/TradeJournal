import { create } from "zustand"; 
import { persist } from "zustand/middleware";
import { UserState, UserAction, USER_INITIAL_STATE } from "../utils/user/user.state";   

export const useUserStore = create<UserState & UserAction>()(persist(((set, get) => ({ 
  ...USER_INITIAL_STATE,
  setUser: (user: UserState) => {     
    set(() => ({
      isLogin: true,
      id: user.id,
      username: user.username,
      password: user.password,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname
    }))
  },
  logoutUser: () => {
    set(() => ({
      isLogin: false, 
    }))
  }
})), {
  name: 'login-storage'
}));


