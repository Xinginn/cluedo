import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const postDiscussionPrompt = async (characterId, prompt, token) => {
  const response = await axios.post(`${API_KEY}/discussions`, { characterId, prompt }, { headers: { 'Authorization': `Bearer ${token}` } })
  return response.data
}
