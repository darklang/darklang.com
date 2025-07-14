import React from "react";

import { BlogPostCard } from "../../common/ui/BlogPostCard";
import SectionTitle from "../../common/ui/SectionTitle";

interface BlogPost {
  id: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}

export const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <section className="py-16 mb-64 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle align="center" className="mb-12" subtitleStyle="button">
          Recent Blog Posts
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map(post => (
            <BlogPostCard
              key={post.id}
              author={post.author}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              slug={post.slug}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://blog.darklang.com/"
            className="inline-flex items-center justify-center px-6 py-2 border border-purple-lbg text-sm font-medium rounded-full text-purple-lbg bg-white hover:bg-purple-lbg hover:text-white transition-colors duration-200"
          >
            See All Blog Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
