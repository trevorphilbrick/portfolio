import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './slices/blogSlice'


export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch