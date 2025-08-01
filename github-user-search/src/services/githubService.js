import axios from "axios";
const apiUrl = "https://api.github.com/users/";

export async function fetchUserData(userName) {
  try {
    const response = await axios.get(`${apiUrl}${userName}`);
    return response.data;
  } catch (err) {
    console.log(err); //testing purpose
    throw err;
  }
}
