import questions from "./questions";
import users from "./users";
import { combineReducers } from "@reduxjs/toolkit";
import authedUser from "./authedUser";


export default combineReducers({
    authedUser,
    users,
    questions,
});
