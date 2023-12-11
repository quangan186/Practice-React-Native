import {configureStore} from '@reduxjs/toolkit';
import sessionSliceReducer from './auth/index';
const store = configureStore({
  reducer: {
    auth: sessionSliceReducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
