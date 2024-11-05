import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import { getEnvestigations } from '../services/Envestigations'

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
        role: 'Mère de la victime',
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
    status: 'idle',
    errors: null
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading"
        console.log('Fetching characters: loading')
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characters = action.payload[0].characters
        state.status = "success"
        console.log('Fetched characters:', action.payload)
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('Fetching characters failed:', action.payload)
      });
  }
})

export const fetchCharacters = createAsyncThunk(
  "characterHistory/fetchCharacters",
  async () => {
    try {
      const result = await getEnvestigations()
      console.log('result : ', result)
      return result
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la récupération des personnages")
    }
  }
)

export const { updateCurrentCharacter } = characterHistorySlice.actions

export const CharacterStore = configureStore({
  reducer: {
    characterHistory: characterHistorySlice.reducer
  }
})
