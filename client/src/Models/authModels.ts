export interface SigninPayload {
  email: string;
  password: string;
}

export interface SignupPayload extends SigninPayload {
  username: string;
}

export interface FavoritePayload {
  favorite: number;
}
