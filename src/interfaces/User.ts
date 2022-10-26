export interface UserLogin {
  username: string,
  password: string,
}

export interface User extends UserLogin {
  classe: string,
  level: number,
}

export interface UserToken {
  id: number,
  username: string,
}

export interface UserData extends User {
  id: number,
}