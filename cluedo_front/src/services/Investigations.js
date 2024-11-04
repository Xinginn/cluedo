import axios from "axios"

const API_KEY = process.env.REACT_APP_API_URL

export const getInvestigations = async () => {
  const response = await axios.get(`${API_KEY}/investigations`);
  return response.data;
}

export const postInvestigation = async (payload = null) => {
  const response = await axios.post(`${API_KEY}/investigations`, payload);
  return response.data;
}