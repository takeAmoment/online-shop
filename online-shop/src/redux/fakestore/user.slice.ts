import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, UserState } from "types/types";

const initialState: UserState = {
  user: null,
};

export const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const userAction = userInfo.actions;
export const userReducer = userInfo.reducer;
