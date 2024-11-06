import { createSlice } from '@reduxjs/toolkit'

export const currentSceneHistorySlice = createSlice({
  name: 'currentSceneHistory',
  initialState: {
    currentScene: {
      id: 1,
      url: '/assets/img/backgrounds/cabaret.png',
      title: 'Cabaret',
      leftScene: {
        title: 'street',
        url: '/assets/img/backgrounds/street.png'
      },
      rightScene: {
        title: 'slum',
        url: '/assets/img/backgrounds/slum.png'
      }
    }
  },
  reducers: {
    updateCurrentScene: (state, action) => {
      state.currentScene = action.payload
    }
  }
})

export const { updateCurrentScene } = currentSceneHistorySlice.actions