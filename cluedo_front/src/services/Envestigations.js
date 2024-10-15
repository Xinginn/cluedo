import axios from "axios"

export const getEnvestigations = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL)
}