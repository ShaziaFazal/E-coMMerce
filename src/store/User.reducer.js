import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    id: null,
    email: "",
    password: "",
    role: "",
    username: "",
  },
  loading: false,
  feedback:{
    fullname:"",
    mail:"",
    subject:"",
    message:"",
  },
  category:""
};

export const postFeedback = createAsyncThunk("postFeedback",async(data,rejectWithValue)=>{
  console.log(data);
  const response = await fetch("http://localhost:4000/postFeedback/postComment",{
    method: "POST",
    headers: {
      "Content-Type":"application/json",
  },
    body: JSON.stringify(data),
  });
  try {
    const result = await response.json();
    console.log("response from api ",result);
    return result;
} catch (error) {
    return rejectWithValue(error.response);
}
});

export const changeCategory = createAsyncThunk("changeCategory",async(category,rejectWithValue)=>{
  console.log("category in thunk",category);
  const response = await fetch(`http://localhost:4000/productInfo/getProductByCategory?category=${category}`);
  try {
    const result = await response?.json();
    console.log(result);
  } catch (error) {
    return rejectWithValue(error);
  }
})

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
  extraReducers:(builder)=>{
    builder.addCase(postFeedback.pending,(state)=>{
      state.loading = true;       
    }).addCase(postFeedback.fulfilled,(state,action)=>{
      state.loading = false;
      state.feedback = action.payload;
    }).addCase(postFeedback.rejected,(state,action)=>{
      state.loading = false;
      state.feedback = action.payload
    }).addCase(changeCategory.pending,(state)=>{
      state.loading = true;
    }).addCase(changeCategory.fulfilled,(state,action)=>{
      state.loading = false;
      state.category = action.payload;
    }).addCase(changeCategory.rejected,(state,action)=>{
      state.loading = false;
      state.category = action.payload;
    })
  }
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
