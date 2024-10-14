import { createSlice, configureStore } from '@reduxjs/toolkit'

const characterHistorySlice = createSlice({
  name: 'characterHistory',
  initialState: {
    characters: [
      {
        id: 1,
        name: 'John',
        face: '/assets/img/faces/face_1.png',
        body: '/assets/img/bodies/body_1.png'
      },
      {
        id: 2,
        name: 'Vanessa',
        face: '/assets/img/faces/face_2.png',
        body: '/assets/img/bodies/body_2.png'
      },
    ],
    currentCharacter: {
      id: 1,
      name: 'John',
      face: '/assets/img/faces/face_1.png',
      body: '/assets/img/bodies/body_1.png'
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
