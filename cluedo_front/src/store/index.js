import { configureStore } from "@reduxjs/toolkit"
import { characterHistorySlice } from "./characterStore"
import { investigationHistorySlice } from "./investigationStore"

export const store = configureStore({
  reducer: {
    characterHistory: characterHistorySlice.reducer,
    investigationHistory: investigationHistorySlice.reducer,
  }
})
