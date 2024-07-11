import AppBar from "../components/AppBar";
import OneBlog from "../components/OneBlog";
import OneBlogSkeleton from "../components/OneBlogSkeleton";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, blog } = useBlog(id!);

  if (loading) {
    return (
      <>
        <AppBar />
        <OneBlogSkeleton />
      </>
    );
  }

  return (
    <>
      <AppBar />
      {blog && (
        <OneBlog 
          title={blog.title} 
          content={blog.content} 
          authorName={blog.author.name || "Anonymous"} 
        />
      )}
    </>
  );
};

export default Blog