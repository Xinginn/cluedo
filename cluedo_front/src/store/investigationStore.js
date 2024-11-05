import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'

const currentInvestigationHistorySlice = createSlice({
  name: 'currentInvestigationHistory',
  initialState: {
    inverstigation: {},
    status: 'idle',
    errors: null
  },
  reducers: {},
  extraReducers(builder) { }
})

export const CurrentInvestigationStore = configureStore({
  reducer: {
    currentInvestigationHistory: currentInvestigationHistorySlice.reducer
  }
})
