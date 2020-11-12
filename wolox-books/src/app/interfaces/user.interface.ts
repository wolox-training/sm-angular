interface IUser {
  user: IUserInfo;
}

interface IUserInfo {
  'first_name': string;
  'last_name': string;
  'email': string;
  'password': string;
  'password_confirmation': string;
}

export {
  IUser,
  IUserInfo,
}
