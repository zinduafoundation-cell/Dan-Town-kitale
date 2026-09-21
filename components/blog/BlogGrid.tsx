import type { BlogPost } from "../types"
import BlogCard from "./BlogCard"

export default function BlogGrid({
  posts,
}: {
  posts: BlogPost[]
}) {

  return (
    <div className="blog-grid">

      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}

    </div>
  )
}