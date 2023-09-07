import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import mailReducer from "./MailSlice";
import inboxReducer from "./inboxSlice";
import sentReducer from "./sentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mail: mailReducer,
    inbox: inboxReducer,
    sent: sentReducer,
  },
});

export default store;