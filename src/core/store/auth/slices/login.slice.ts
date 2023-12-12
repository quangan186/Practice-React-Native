import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type LoginProps = {
  isLoggedin: boolean;
  user: UserModel;
};

type SessionProps = {
  session: LoginProps;
};

export interface UserModel {
  username: string;
  phoneNumber: string;
}

export interface AccountModel extends UserModel {
  password: string;
}

const initialState: SessionProps = {
  session: {
    isLoggedin: false,
    user: {
      username: '',
      phoneNumber: '',
    },
  },
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: any, action: PayloadAction<UserModel>) => {
      state.session.isLoggedin = true;
      state.session.user.username = action.payload.username;
      state.session.user.phoneNumber = action.payload.phoneNumber;
    },
    logout: (state: any) => {
      state.user.isLoggedin = false;
      state.user.username = '';
      state.user.phoneNumber = '';
    },
  },
});
