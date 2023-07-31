import { create } from "zustand";

import { UserState, UserAction } from "../utils/user/user.state";

export const UserStore = create<UserState & UserAction>((set) => ({
    id: 0,
    username: '',
    password: '',
    firstname: '',
    middlename: '',
    lastname: '',
    setUsername: (username) => set(() => ({username : username})),
    setPassword: (password) => set(() => ({password : password})),
    setFirstName: (firstname) => set(() => ({firstname : firstname})),
    setMiddleName: (middlename) => set(() => ({middlename : middlename})),
    setLastName: (lastname) => set(() => ({lastname : lastname})), 
}));



