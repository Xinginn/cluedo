import { configureStore } from "@reduxjs/toolkit"
import { currentCharacterHistorySlice } from "./currentCharacterStore"
import { investigationHistorySlice } from "./investigationStore"

export const store = configureStore({
  reducer: {
    currentCharacterHistorySlice: currentCharacterHistorySlice.reducer,
    investigationHistory: investigationHistorySlice.reducer,
  }
})
