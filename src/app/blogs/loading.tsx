import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-red-400 text-center">Loading.....</h1>
      <div className="grid grid-cols-4 gap-4">
        {blogs.map((blog: Blog) => (
          <LoadingCard key={blog.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
