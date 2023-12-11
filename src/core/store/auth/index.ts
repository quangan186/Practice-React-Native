import {loginSlice} from './slices/login.slice';
import {signUpSlice} from './slices/sign-up.slice';

export const {login, logout} = loginSlice.actions;
export const {signup} = signUpSlice.actions;
export const loginReducer = loginSlice.reducer;
export const signupReducer = signUpSlice.reducer;
