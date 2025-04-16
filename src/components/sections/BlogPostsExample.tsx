import React from "react";
import BlogPosts from "./BlogPosts";

// Mock data for blog posts
const mockPosts = [
  {
    id: "1",
    author: "Stachu Korick",
    date: "12 Mar 2024",
    title: "An overdue status update on Darklang",
    excerpt:
      "An overdue status update on Darklang. We've been working hard at Darklang for the past year, but haven't been very vocal about what we've been up to...",
    imageUrl: "src/assets/The_Sower-1.jpg",
    slug: "https://blog.darklang.com/an-overdue-status-update/",
  },
  {
    id: "2",
    author: "Paul Biggar",
    date: "28 Mar 2023",
    title: "Darklang is going all-in on AI",
    excerpt:
      "Like an aging rock star making a final stab at glory, I'm delighted to announce that Darklang is going all in on AI/GPT. As everyone knows, the folks over at...",
    imageUrl: "src/assets/murmuration.webp",
    slug: "https://blog.darklang.com/gpt/",
  },
  {
    id: "3",
    author: "Paul Biggar",
    date: "24 Feb 2023",
    title: "Sponsoring Darklang",
    excerpt:
      "We'd love you to sponsor Darklang's development! Long term, we'd like Darklang to be sustainable from the community. In the future, we expect paid accounts will support our development...",
    imageUrl: "src/assets/John_Constable_-_The_Hay_Wain_-1821-.jpg",
    slug: "https://blog.darklang.com/sponsor-darklang/",
  },
];

export const BlogPostsExample: React.FC = () => {
  return <BlogPosts posts={mockPosts} />;
};

export default BlogPostsExample;
