// store/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  pro_user: boolean;
}

const initialState: UserState = {
  pro_user: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProUserTrue: (state) => {
      state.pro_user = true;
    },
    resetProUser: (state) => {
      state.pro_user = false;
    },
  },
});

export const { setProUserTrue, resetProUser } = userSlice.actions;

export default userSlice.reducer;
