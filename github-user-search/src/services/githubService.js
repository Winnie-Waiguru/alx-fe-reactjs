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
    let users = response.data.items;

    if (!users) {
      return "No user found.";
    }

    let userNamesArray = users.map((user) => user.login);
    let topFiveUserNamesArray = userNamesArray.slice(0, 6);
    console.log(topFiveUserNamesArray); //testing purposes

    let userDetailsPromises = topFiveUserNamesArray.map((username) =>
      axios.get(`${usersApiUrl}${username}`)
    );
    console.log(userDetailsPromises); //testing purposes

    let promiseFeedback = await Promise.all(userDetailsPromises);
    const result = promiseFeedback.map((detailPromise) => detailPromise.data);

    return result;
  } catch (err) {
    console.log(err); //testing purpose
    throw err;
  }
}
