import { createSlice } from "@reduxjs/toolkit";

const initialSentState = {
  email: [],
};
const sentSlice = createSlice({
  name: "sent",
  initialState: initialSentState,
  reducers: {
    onEmailSent(state, action) {
      state.email = action.payload.split('@')[0];
    },
  },
});

export default sentSlice.reducer;
export const sentActions=sentSlice.actions