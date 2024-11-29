import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { currentCharacterHistorySlice } from "./currentCharacterStore"
import { investigationHistorySlice } from "./investigationStore"
import { currentSceneHistorySlice } from "./currentSceneStore"
import { userHistorySlice } from "./userStore"
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  storage
}

const reducer = combineReducers({
  currentCharacterHistorySlice: currentCharacterHistorySlice.reducer,
  investigationHistorySlice: investigationHistorySlice.reducer,
  currentSceneHistorySlice: currentSceneHistorySlice.reducer,
  userHistorySlice: userHistorySlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
})

export const persistor = persistStore(store)
