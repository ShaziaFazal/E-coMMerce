import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    id: null,
    email: "",
    password: "",
    role: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      if (!action.payload || !action.payload.user) return;
      state.user = action.payload.user || {};
      state.isAuthenticated = action.payload.isAuthenticated || false;
    },
    resetUser: (state) => {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
    updateCurrentUser: (state, action) => {
      if (action.payload.location) {
        state.user.location = action.payload.location;
        delete action.payload.location;
      }
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const getCurrentUser = (state) => {
  return state.user.user ?? null;
};

export const getIsAuthenticated = (state) => {
  return state.user?.isAuthenticated;
};

export const { resetUser, setCurrentUser, updateCurrentUser } =
  userSlice.actions;

export default userSlice.reducer;
