import axios from "axios";
const searchApiUrl = "https://api.github.com/search/users?q=";
const usersApiUrl = "https://api.github.com/users/";

export async function fetchUserData(userName, location = "", minRepos = 0) {
  let query = encodeURIComponent(userName);
  try {
    // Add location filter if provided
    if (location.trim() !== "") {
      query += `+location:${encodeURIComponent(location)}`;
    }
    // Add minRepos filter if a positive number
    if (minRepos && !isNaN(minRepos) && Number(minRepos) > 0) {
      query += `+repos:>${encodeURIComponent(minRepos)}`;
    }

    // First request: search users
    const response = await axios.get(`${searchApiUrl}${query}`);
    let users = response.data.items;

    if (!users) {
      return "No user found.";
    }

    let userNamesArray = users.map((user) => user.login);
    let topFiveUserNamesArray = userNamesArray.slice(0, 6); //Reduce the number of names obtained

    let userDetailsPromises = topFiveUserNamesArray.map((username) =>
      axios.get(`${usersApiUrl}${username}`)
    );

    let promiseFeedback = await Promise.all(userDetailsPromises);
    const result = promiseFeedback.map((detailPromise) => detailPromise.data);

    // console.log(result);
    return result;
  } catch (err) {
    console.log(err); //testing purpose
    throw err;
  }
}
