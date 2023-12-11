import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AccountModel} from './login.slice';

type SignUpProps = {
  createdUser: AccountModel;
};

const initialState: SignUpProps = {
  createdUser: {
    username: '',
    phoneNumber: '',
    password: '',
  },
};

export const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signup: (state: any, action: PayloadAction<AccountModel>) => {
      state.createdUser.username = action.payload.username;
      state.createdUser.password = action.payload.password;
      state.createdUser.phoneNumber = action.payload.phoneNumber;
    },
  },
});
