import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const getEnvestigations = async () => {
  const response = await axios.get(`${API_KEY}/investigations`)
  return response.data
}