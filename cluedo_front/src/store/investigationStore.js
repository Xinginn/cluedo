import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getInvestigations, getInvestigationsById, postInvestigation } from '../services/Investigations'
import { postDiscussionPrompt } from '../services/PromptGPT'

export const investigationHistorySlice = createSlice({
  name: 'investigationHistory',
  initialState: {
    investigation: null,
    isSummaryShown: true,
    remainingSeconds: 600,
    status: 'idle',
    errors: null
  },
  reducers: {
    addCharacterDiscussion: (state, action) => {
      const { characterId, discussion } = action.payload
      const character = state.investigation.characters.find(item => item.id === characterId)
      if (character) {
        character.discussions.push(discussion)
      }
    },
    toggleSummaryShown: (state) => {
      state.isSummaryShown = !state.isSummaryShown
      changeSeconds(-1)
    },
    changeSeconds: (state, action) => {
      state.remainingSeconds += action.payload
    },
    resetInvestigationStore: (state) => {
      return investigationHistorySlice.getInitialState()
    }
  },
  extraReducers(builder) {
    builder
      .addCase(createNewInvestigation.pending, (state) => {
        state.status = "loading"
        console.log('Creating investigation: loading')
      })
      .addCase(createNewInvestigation.fulfilled, (state, action) => {
        state.investigation = action.payload
        state.status = "success"
        console.log('Created investigation: success')
      })
      .addCase(createNewInvestigation.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('Creating investigation failed:', action.payload)
      })

      .addCase(fetchInvestigationById.pending, (state) => {
        state.status = "loading"
        console.log('fetch investigation by id reponse: loading')
      })
      .addCase(fetchInvestigationById.fulfilled, (state, action) => {
        console.log(action.payload)
        state.investigation = action.payload
        state.status = "success"
        console.log('fetch investigation by id reponse: success')
      })
      .addCase(fetchInvestigationById.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('fetch investigation by id reponse failed:', action.payload)
      })

      .addCase(queryAnswer.pending, (state) => {
        state.status = "loading"
        console.log('Querying prompt reponse: loading')
      })
      .addCase(queryAnswer.fulfilled, (state, action) => {
        const character = state.investigation.characters.find(item => item.id === action.payload.characterId)
        // replace character's last discussion entry (which only contained prompt) with full result
        character.discussions[character.discussions.length - 1] = action.payload
        state.status = "success"
        console.log('Querying prompt reponse: success')
      })
      .addCase(queryAnswer.rejected, (state, action) => {
        state.status = "failed"
        state.errors = action.payload
        console.error('Querying prompt reponse failed:', action.payload)
      })

  }
})

export const createNewInvestigation = createAsyncThunk(
  'investigationHistory/createNewInvestigation',
  async (token) => {
    try {
      const result = await postInvestigation({ token })
      return result
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

export const queryAnswer = createAsyncThunk(
  'investigationHistory/queryAnswer',
  async (payload) => {
    try {
      const result = await postDiscussionPrompt(payload.characterId, payload.prompt, payload.token)
      return result
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la recuperation de réponse")
    }
  }
)

export const fetchInvestigationById = createAsyncThunk(
  'investigationHistory/fetchInvestigationById',
  async (payload) => {
    try {
      const result = await getInvestigationsById(payload.id)
      return result
    } catch (error) {
      throw new Error(error.response ? error.response.data : "Une erreur est survenue lors de la recuperation de réponse")
    }
  }
)

export const { addCharacterDiscussion, toggleSummaryShown, changeSeconds, resetInvestigationStore } = investigationHistorySlice.actions