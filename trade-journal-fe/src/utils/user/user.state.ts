export interface UserState {
    id: number,
    username: string,
    password: string,
    firstname: string,
    middlename: string,
    lastname: string
}

export interface UserAction {
    setUsername: (username: UserState['username']) => void
    setPassword: (password: UserState['password']) => void
    setFirstName: (firstname: UserState['firstname']) => void
    setMiddleName: (middlename: UserState['middlename']) => void
    setLastName: (lastname: UserState['lastname']) => void  
}