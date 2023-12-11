import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type LoginProps = {
  isLoggedin: boolean;
  user: UserModel;
  password: '';
};

export interface UserModel {
  username: string;
  phoneNumber: string;
}

export interface AccountModel extends UserModel {
  password: string;
}

const initialState: LoginProps = {
  isLoggedin: false,
  user: {
    username: '',
    phoneNumber: '',
  },
  password: '',
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: any, action: PayloadAction<UserModel>) => {
      state.isLoggedin = true;
      state.user.username = action.payload.username;
      state.user.phoneNumber = action.payload.phoneNumber;
    },
    logout: (state: any) => {
      state.user.isLoggedin = false;
      state.user.username = '';
      state.user.phoneNumber = '';
    },
  },
});
