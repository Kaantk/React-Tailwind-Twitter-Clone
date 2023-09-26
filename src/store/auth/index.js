import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    userName: "Kaan Tetik",
    nickName: "@Kaan.tk2",
    avatar:
      "https://pbs.twimg.com/profile_images/1690999623245049856/SWu5MQpT_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      userName: "Kaan Tetik",
      nickName: "@Kaan.tk2",
      avatar:
        "https://pbs.twimg.com/profile_images/1690999623245049856/SWu5MQpT_400x400.jpg",
    },
    {
      id: 2,
      userName: "tayfunerbilen",
      nickName: "@prototurk",
      avatar:
        "https://pbs.twimg.com/profile_images/1665642354009677824/LNZo7V8x_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _setCurrentAccount } = auth.actions;
export default auth.reducer;
