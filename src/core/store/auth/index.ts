import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type SessionProps = {
  isLoggedin: boolean;
  user: UserModel;
};

export type UserModel = {
  username: string;
  password: string;
};
const initialState: SessionProps = {
  isLoggedin: false,
  user: {
    username: '',
    password: '',
  },
};

const sessionSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: any, action: PayloadAction<UserModel>) => {
      state.isLoggedin = true;
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
    },
  },
});

export default sessionSlice.reducer;
export const {login} = sessionSlice.actions;
