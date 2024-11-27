import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { connection } from '../services/Auth'
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
    disconnectUser: (state, action) => {
      state.user = null
      state.isConnected = false
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
  }
})

export const connectUser = createAsyncThunk(
  'userHistory/connectUser',
  async (payload) => {
    try {
      const result = await connection(payload)
      const token = result
      const user = jwtDecode(result)
      return { user, token }
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la connection")
    }
  }
)

export const { disconnectUser } = userHistorySlice.actions