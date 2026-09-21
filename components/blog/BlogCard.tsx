import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react"

import type { BlogPost } from "../types"

export default function BlogCard({
  post,
}: {
  post: BlogPost
}) {

  return (
    <article className="blog-card">

      <Link
        href="/blog"
        className="blog-image"
      >

        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />

      </Link>

      <div className="blog-content">

        <div className="blog-meta">

          <span>
            {post.category}
          </span>

          <span>
            <CalendarDays size={13} />
            {post.date}
          </span>

        </div>

        <h3>
          {post.title}
        </h3>

        <p>
          {post.excerpt}
        </p>

        <Link
          href="/blog"
          className="read-more"
        >
          Read Article
          <ArrowUpRight size={17} />
        </Link>

      </div>

    </article>
  )
}