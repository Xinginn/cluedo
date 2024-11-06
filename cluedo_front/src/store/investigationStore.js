import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getInvestigations, postInvestigation } from '../services/Investigations'

export const investigationHistorySlice = createSlice({
  name: 'investigationHistory',
  initialState: {
    investigation: {
      id: 1,
      setting: '1920',
      victimName: 'Didier Cedé',
      victimFace: 'default.png',
      victimBody: 'default.png',
      autopsy: "Autopsie de May Upworth : Décès par empoisonnement aigu. La présence de toxines spécifiques a été détectée dans le sang, corroborant l'administration d'un poison. Aucune autre cause de décès n'a été identifiée. Les circonstances entourant le décès suggèrent un acte criminel.",
      events: "May Upworth, héritière d'une fortune familiale, a été tuée par son cousin, Edward Harrington, qui convoitait son héritage. Edward a manipulé la situation en feignant d'être son protecteur après qu'elle ait reçu des menaces anonymes. La veille du meurtre, il a convaincu May de l'accompagner à une soirée où il a glissé du poison dans son verre. Les témoins ont vu Edward s'éloigner juste avant qu'elle ne s'effondre. En fouillant la maison, un journal intime de May révèle ses soupçons sur Edward et une lettre d'un ancien amant, Charles Whitmore, qui avait découvert ses intentions.",
      characters: [
        {
          id: 1,
          face: 'face_1.png',
          body: 'body_1.png',
          description: "Edward a toujours vécu dans l'ombre de la fortune de May. En quête de pouvoir, il a élaboré un plan machiavélique pour s'emparer de son héritage. Son charme dissimule une jalousie profonde et une ambition démesurée. Il cache un passé d'échecs financiers et une dépendance au jeu, ce qui le pousse à commettre l'irréparable pour assurer son avenir. Charles Whitmore ",
          personnality: "Manipulateur, ambitieux, sournois",
          isKiller: false,
          name: 'Edward Harrington',
          role: 'Cousin'
        }
      ]
    },
    status: 'idle',
    errors: null
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createNewInvestigation.pending, (state) => {
        state.status = "loading"
        console.log('Creating investigation: loading')
      })
      .addCase(createNewInvestigation.fulfilled, (state, action) => {
        const { characters, ...investigation } = action.payload
        state.investigation = investigation
        state.status = "success"
        console.log('Created investigation: success')
      })
      .addCase(createNewInvestigation.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('Creating investigation failed:', action.payload)
      });
  }
})

export const createNewInvestigation = createAsyncThunk(
  'investigationHistory/createNewInvestigation',
  async () => {
    try {
      const result = await postInvestigation();
      return result;
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la creation de l'enquête")
    }
  }
)

export const fetchCharacters = createAsyncThunk(
  "currentCharacterHistorySlice/fetchCharacters",
  async () => {
    try {
      const result = await getInvestigations()
      return result
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la récupération des personnages")
    }
  }
)