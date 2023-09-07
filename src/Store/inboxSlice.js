import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
  emails: [],
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState: initialInboxState,
  reducers: {
    onEmailFetch(state, action) {
      state.emails = action.payload;
      
    },
  },
});

export default inboxSlice.reducer;
export const inboxActions = inboxSlice.actions;