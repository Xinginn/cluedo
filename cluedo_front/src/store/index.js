import { configureStore } from "@reduxjs/toolkit"
import { currentCharacterHistorySlice } from "./currentCharacterStore"
import { investigationHistorySlice } from "./investigationStore"
import { currentSceneHistorySlice } from "./currentSceneStore"

export const store = configureStore({
  reducer: {
    currentCharacterHistorySlice: currentCharacterHistorySlice.reducer,
    investigationHistorySlice: investigationHistorySlice.reducer,
    currentSceneHistorySlice: currentSceneHistorySlice.reducer,
  }
})
