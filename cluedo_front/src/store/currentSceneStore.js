import { createSlice } from '@reduxjs/toolkit'

import { scenes } from '../data/Scenes'

export const currentSceneHistorySlice = createSlice({
  name: 'currentSceneHistory',
  initialState: {
    currentScene: scenes[1]
  },
  reducers: {
    updateCurrentScene: (state, action) => {
      state.currentScene = scenes.filter((scene) => scene.id === action.payload)[0]
    }
  }
})

export const { updateCurrentScene } = currentSceneHistorySlice.actions