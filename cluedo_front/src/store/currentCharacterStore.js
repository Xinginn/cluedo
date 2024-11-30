import { createSlice } from '@reduxjs/toolkit'

export const currentCharacterHistorySlice = createSlice({
  name: 'currentCharacterHistory',
  initialState: {
    currentCharacter: {
      id: 1,
      name: 'John',
      face: 'face_1.png',
      body: 'body_1.png',
      role: 'Père de la victime',
      gender: 'male',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    status: 'idle',
    errors: null
  },
  reducers: {
    updateCurrentCharacter: (state, action) => {
      state.currentCharacter = action.payload
    },
    resetCurrentCharacterStore: (state) => {
      return currentCharacterHistorySlice.getInitialState()
    }
  }
})

export const { updateCurrentCharacter, resetCurrentCharacterStore } = currentCharacterHistorySlice.actions