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
      // const characters = action.payload.characters
      // TODO
      const characters = [
        {
          "id": 34,
          "body": "body_1.png",
          "face": "face_1.png",
          "name": "Edward Upworth",
          "gender": "male",
          "role": "Frère de la victime",
          "personality": "Furieux, Manipulateur, Calculateur",
          "description": "Edward Upworth, le frère de May, est un homme d'apparence respectable, mais cachant une rage intense. Le soir du meurtre, il était préoccupé par l'honneur de la famille et l'angoisse de voir sa sœur ternir leur nom. Il a agi par désespoir en empoisonnant May, craignant les conséquences de la lettre menaçante. Edward a réussi à dissimuler son crime, mais son comportement suspect pourrait le trahir.",
          "isKiller": true,
          "investigationId": 18
        },
        {
          "id": 35,
          "body": "body_2.png",
          "face": "face_2.png",
          "name": "Clara Upworth",
          "gender": "female",
          "role": "Sœur de la victime",
          "personality": "Silencieuse, Observatrice, Loyale",
          "description": "Clara, la sœur de May, est une jeune femme discrète, souvent dans l'ombre de son frère. Le soir du meurtre, elle a été témoin de l'empoisonnement sans intervenir, tiraillée entre sa loyauté envers Edward et son affection pour May. Clara cache un secret : elle avait également reçu des menaces, mais elle ne sait pas si elle doit se confier. Son silence pourrait la rendre complice, mais elle n'est pas l'auteure du crime.",
          "isKiller": false,
          "investigationId": 18
        },
        {
          "id": 36,
          "body": "body_1.png",
          "face": "face_1.png",
          "name": "Margaret Hargrove",
          "gender": "male",
          "role": "Amie de la victime",
          "personality": "Joviale, Intrigante, Curieuse",
          "description": "Margaret Hargrove, amie proche de May, était présente au dîner familial. Elle a toujours été celle qui posait trop de questions et fouillait dans les affaires des autres. Ce soir-là, elle était préoccupée par le comportement d'Edward et avait remarqué la tension. Bien qu'elle ait un penchant pour le commérage, elle n'a pas tué May. Cependant, elle pourrait détenir des informations cruciales sur les menaces que May a reçues.",
          "isKiller": false,
          "investigationId": 18
        }
      ]
      const newScene = action.payload.scene
      state.currentScene = scenes.filter((scene) => scene.id === newScene)[0]
      const newCharacters = getRandomElements(characters, 2)
      state.characters = newCharacters
    }
  }
})

export const { updateCurrentScene, updateCharacters } = currentSceneHistorySlice.actions