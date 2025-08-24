import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {postId}</h2>
      <p>This is the content for blog post {postId}.</p>
    </div>
  );
}
