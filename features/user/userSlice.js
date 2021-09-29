import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  email: '',
  id: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // log user in
    userSignIn(state) {
      state.isLoggedIn = true;
    },
    // log user out
    userSignOut(state) {
      state.isLoggedIn = false;
    }
    // set the user
  }
})

export const { userSignIn, userSignOut } = userSlice.actions;
export default userSlice.reducer;