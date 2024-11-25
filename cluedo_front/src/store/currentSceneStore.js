import { createSlice } from '@reduxjs/toolkit'

import { classiqueScenes, alternativeScenes } from '../data/Scenes'
import { getRandomElements } from '../components/scripts/getRandomElements'
import { roll } from '../components/scripts/roll'

export const currentSceneHistorySlice = createSlice({
  name: 'currentSceneHistory',
  initialState: {
    currentScene: classiqueScenes[1],
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
        gender: 'female',
        discussions: [],
      }
    ]
  },
  reducers: {
    updateCurrentScene: (state, action) => {
      const characters = action.payload.characters
      const currentSceneCharacterIds = state.characters.reduce((stack, current) => {
        return [...stack, current.id]
      }, [])
      const filteredCharacters = characters.filter((character) => !currentSceneCharacterIds.includes(character.id))

      const newScene = action.payload.scene
      if (action.payload.theme)
        state.currentScene = alternativeScenes.filter((scene) => scene.id === newScene)[0]
      if (!action.payload.theme)
        state.currentScene = classiqueScenes.filter((scene) => scene.id === newScene)[0]
      let nbCharacter = 2
      if (roll(2) > 0)
        nbCharacter = 3
      const newCharacters = getRandomElements(filteredCharacters, nbCharacter)
      state.characters = newCharacters
    }
  }
})

export const { updateCurrentScene } = currentSceneHistorySlice.actions