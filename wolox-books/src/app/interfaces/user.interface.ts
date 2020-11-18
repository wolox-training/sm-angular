export interface IUserComplete extends IUserBasic {
  first_name: string;
  last_name: string;
  password_confirmation?: string;
  locale?: string;
}

export interface IUserBasic {
  email: string;
  password: string;
}

export interface IUserHTTPResponse {
  data: {
    id: number;
    email: string;
    provider: string;
    uid: string;
    allow_password_change: boolean;
    first_name: string;
    last_name: string;
    locale: string;
  };
}
