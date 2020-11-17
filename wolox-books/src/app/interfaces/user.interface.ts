export interface IUserComplete extends IUserBasic {
  first_name: string;
  last_name: string;
  password_confirmation: string;
  locale?: string;
}

export interface IUserBasic {
  email?: string;
  password?: string;
}
