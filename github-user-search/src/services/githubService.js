import axios from "axios";
const searchApiUrl = "https://api.github.com/search/users?q=";
const usersApiUrl = "https://api.github.com/users/";

export async function fetchUserData(userName, location = "", repo = 0) {
  let query = encodeURIComponent(userName);
  try {
    // Add location filter if provided
    if (location.trim() !== "") {
      query += `+location:${encodeURIComponent(location)}`;
    }
    // Add repo filter if a positive number
    if (repo && !isNaN(repo) && Number(repo) > 0) {
      query += `+repos:>${encodeURIComponent(repo)}`;
    }

    // First request: search users
    const response = await axios.get(`${searchApiUrl}${query}`);
    let user = response.data.items[0];

    if (!user) {
      return "User not found!";
    }

    let username = user.login;

    // Second request: get user details
    let userDetails = await axios.get(`${usersApiUrl}${username}`);
    return userDetails.data;
  } catch (err) {
    console.log(err); //testing purpose
    throw err;
  }
}
