import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const getInvestigations = async () => {
  const response = await axios.get(`${API_KEY}/investigations`)
  return response.data
}

export const getInvestigationsById = async (id) => {
  const response = await axios.get(`${API_KEY}/investigations/${id}`)
  return response.data
}

export const postInvestigation = async ({ payload = null, token }) => {
  const response = await axios.post(`${API_KEY}/investigations`, payload, { headers: { 'Authorization': `Bearer ${token}` } })
  return response.data
}