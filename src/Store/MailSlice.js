import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
  mailData: [],
  updateSend:false
};
const MailSlice = createSlice({
  name: "mail",
  initialState: initialMailState,
  reducers: {
    addedMail(state, action) {
      state.mailData = [...state.mailData, action.payload];
    },
    sendMail(state, action) {
      const newItem = action.payload;
      state.updateSend = true;
      state.mailData.push({
        id: Math.random().toString(),
        seen: newItem.seen,
        subject: newItem.subject,
        mail: newItem.mail.split('@')[0],
        text: newItem.text,
      });
    },

  },
});

export default MailSlice.reducer
export const mailAction=MailSlice.actions