import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { connection, registration } from '../services/Auth'
import { jwtDecode } from "jwt-decode"

export const userHistorySlice = createSlice({
  name: 'userHistory',
  initialState: {
    user: null,
    isConnected: false,
    token: null,
    status: 'idle',
    errors: null
  },
  reducers: {
    disconnectUser: (state) => {
      return userHistorySlice.getInitialState()
    }
  },
  extraReducers(builder) {
    builder
      .addCase(connectUser.pending, (state) => {
        state.status = "loading"
        console.log('Connect user: loading')
      })
      .addCase(connectUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isConnected = true
        state.status = "success"
        console.log('Connected user: success')
      })
      .addCase(connectUser.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('Connecting user failed:', action.payload)
      })

      .addCase(registerUser.pending, (state) => {
        state.status = "loading"
        console.log('Register user: loading')
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.isConnected = true
        state.status = "success"
        console.log('Register user: success')
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('Register user failed:', action.payload)
      })
  }
})

export const connectUser = createAsyncThunk(
  'userHistory/connectUser',
  async (payload) => {
    try {
      const result = await connection(payload)
      const token = result.token
      const user = result.user
      return { user, token }
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la connection")
    }
  }
)

export const registerUser = createAsyncThunk(
  'userHistory/registerUser',
  async (payload) => {
    try {
      const result = await registration(payload)
      const token = result.token
      const user = result.user
      return { user, token }
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la connection")
    }
  }
)

export const { disconnectUser } = userHistorySlice.actions