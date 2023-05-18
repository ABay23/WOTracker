import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isloading: false,
  messsage: '',
}

//* Register User
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.messare ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

//* Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  console.log(user)
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isloading = false
      state.isError = false
      state.isSuccess = false
      state.messsage = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isloading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isloading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isloading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  },
})
export const { reset } = authSlice.actions

export default authSlice.reducer