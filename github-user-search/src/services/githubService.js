import axios from "axios";
const apiUrl = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData(userName) {
  try {
    const response = await axios.get(`${apiUrl}${userName}`);
    return response.data;
  } catch (err) {
    console.log(err); //testing purpose
    throw err;
  }
}
