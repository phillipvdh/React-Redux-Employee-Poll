import users from "./reducers/users";
import questions from "./reducers/questions";
import { configureStore } from '@reduxjs/toolkit';
import authedUser from "./reducers/authedUser";

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    questions,
  },
});
