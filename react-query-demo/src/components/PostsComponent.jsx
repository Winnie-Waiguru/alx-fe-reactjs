import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return response.data;
};

function PostsComponent() {
  const { data, refetch, isLoading, isPlaceholderData, isError, error } =
    useQuery({
      queryKey: ["posts"], //unique key for this query
      queryFn: fetchPosts, // function that fetches the posts
      staleTime: 1000 * 60 * 10, //data considered stale after 10 min
      gcTime: 1000 * 60 * 60, //data to be removed after 1 hour of inactivity
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
    });

  const handleRefetch = () => {
    refetch(); //calls refetch to trigger new data fetch
  };

  if (isLoading && isPlaceholderData) return <div>Loading new data...</div>;

  if (isLoading && isPlaceholderData) return <div>Loading posts...</div>;

  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={handleRefetch}>Refetch data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
