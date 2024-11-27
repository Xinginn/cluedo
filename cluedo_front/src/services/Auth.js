import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const connection = async (payload = null) => {
  const response = await axios.post(`${API_KEY}/connect`, payload)
  return response.data
}