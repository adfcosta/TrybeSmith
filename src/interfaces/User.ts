export interface UserLogin {
  username: string,
  password: string,
}

export interface User extends UserLogin {
  classe: string,
  level: number,
}