import {configureStore} from '@reduxjs/toolkit';
import {loginReducer, signupReducer} from './auth/index';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
