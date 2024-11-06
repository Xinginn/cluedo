import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { scenes } from '../data/Scenes'
import { getRandomElements } from '../components/scripts/getRandomElements'

export const currentSceneHistorySlice = createSlice({
  name: 'currentSceneHistory',
  initialState: {
    currentScene: scenes[1],
    characters: [
      {
        id: 1,
        face: 'face_2.png',
        body: 'body_2.png',
        description: "Edward a toujours vécu dans l'ombre de la fortune de May. En quête de pouvoir, il a élaboré un plan machiavélique pour s'emparer de son héritage. Son charme dissimule une jalousie profonde et une ambition démesurée. Il cache un passé d'échecs financiers et une dépendance au jeu, ce qui le pousse à commettre l'irréparable pour assurer son avenir. Charles Whitmore ",
        personnality: "Manipulateur, ambitieux, sournois",
        isKiller: false,
        name: 'Jessica Harrington',
        role: 'Cousin',
        gender: 'female'
      }
    ]
  },
  reducers: {
    updateCurrentScene: (state, action) => {
      state.currentScene = scenes.filter((scene) => scene.id === action.payload)[0]
    },
    updateCharacters: (state, action) => {
      const characters = action.payload.characters

      const newScene = action.payload.scene
      state.currentScene = scenes.filter((scene) => scene.id === newScene)[0]
      const newCharacters = getRandomElements(characters, 2)
      state.characters = newCharacters
    }
  }
})

export const { updateCurrentScene, updateCharacters } = currentSceneHistorySlice.actions