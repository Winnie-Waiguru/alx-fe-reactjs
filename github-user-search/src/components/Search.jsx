import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle the form
  async function handleSubmit(event) {
    event.preventDefault(); // prevent form default submission behaviour

    if (searchTerm.trim() === "") {
      return;
    }

    setIsLoading(true);
    setUserData(null);
    setError("");

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
      setError("");
    } catch (err) {
      setError(`User not found:${err}`);
      setUserData();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h1>GitHub User Search Application</h1>
      <form className="searchForm " onSubmit={handleSubmit}>
        <input
          className="searchBar"
          type="search"
          name="search-input"
          id="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p> Looks like we cant find the user</p>}
      {userData && (
        <div className="data-box">
          <img className="avatar" src={userData.avatar_url} alt="user-avatar" />
          <h3>Name: {userData.name}</h3>
          <p>
            <strong>Bio:</strong> {userData.bio || "No bio"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
