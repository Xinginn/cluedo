import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { connection } from '../services/Auth'
import { jwtDecode } from "jwt-decode"

export const userHistorySlice = createSlice({
  name: 'userHistory',
  initialState: {
    user: null,
    isConnected: false,
    status: 'idle',
    errors: null
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(connectUser.pending, (state) => {
        state.status = "loading"
        console.log('Connect user: loading')
      })
      .addCase(connectUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isConnected = true
        console.log(state.isConnected)
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
      return jwtDecode(result)
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la connection")
    }
  }
)