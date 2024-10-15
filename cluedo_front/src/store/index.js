import { createSlice, configureStore } from '@reduxjs/toolkit'

const characterHistorySlice = createSlice({
  name: 'characterHistory',
  initialState: {
    characters: [
      {
        id: 1,
        name: 'John',
        face: '/assets/img/faces/face_1.png',
        body: '/assets/img/bodies/body_1.png',
        role: 'Père de la victime',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        
      },
      {
        id: 2,
        name: 'Vanessa',
        face: '/assets/img/faces/face_2.png',
        body: '/assets/img/bodies/body_2.png',
        role: 'Soeur de la victime',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ],
    currentCharacter: {
      id: 1,
      name: 'John',
      face: '/assets/img/faces/face_1.png',
      body: '/assets/img/bodies/body_1.png',
      role: 'Père de la victime',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  },
  reducers: {
    updateCurrentCharacter: (state, action) => {
      const character = state.characters.find(
        (char) => char.id === action.payload.id
      )
      if (character) {
        state.currentCharacter = character
      }
    }
  }
})

export const { updateCurrentCharacter } = characterHistorySlice.actions

export const store = configureStore({
  reducer: {
    characterHistory: characterHistorySlice.reducer
  }
})
