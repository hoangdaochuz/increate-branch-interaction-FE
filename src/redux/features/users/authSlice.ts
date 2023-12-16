import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: boolean;
  address: string;
  //...
}

interface AuthState {
  user?: IUser | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    userInfo: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { logout, userInfo } = authSlice.actions;
export default authSlice.reducer;
