import { createSlice } from '@reduxjs/toolkit'

export const characterHistorySlice = createSlice({
  name: 'characterHistory',
  initialState: {
    currentCharacter: {
      id: 1,
      name: 'John',
      face: '/assets/img/faces/face_1.png',
      body: '/assets/img/bodies/body_1.png',
      role: 'Père de la victime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    status: 'idle',
    errors: null
  },
  reducers: {
    updateCurrentCharacter: (state, action) => {
      state.currentCharacter = action.payload
    }
  }
})

export const { updateCurrentCharacter } = characterHistorySlice.actions