import React from "react";

import BlogPosts from "./BlogPosts";


// Mock data for blog posts
const mockPosts = [
  {
    id: "1",
    author: "Stachu Korick",
    date: "16 Jun 2025",
    title: "First Steps of Darklang Inc.",
    excerpt:
      "Darklang Inc is the new steward of the Darklang language, whose team has been working on Darklang for several years. In this post, we'll cover three big changes...",
    imageUrl: "/assets/Cole_Thomas_The_Oxbow_-The_Connecticut_River_near_Northampton_1836-.jpeg",
    slug: "https://blog.darklang.com/first-steps-of-darklang-inc/",
  },
  {
    id: "2",
    author: "Paul Biggar",
    date: "16 Jun 2025",
    title: "Goodbye Dark Inc. - Hello Darklang Inc.",
    excerpt:
      "Dark Inc has officially run out of money. Dark Inc is the company we founded in 2017 to build Darklang...",
    imageUrl: "/assets/Velazquez-The_Surrender_of_Breda.jpeg",
    slug: "https://blog.darklang.com/goodbye-dark-inc-welcome-darklang-inc/",
  },
  {
    id: "3",
    author: "Stachu Korick",
    date: "16 Jun 2025",
    title: "Darklang Goes Open Source",
    excerpt:
      "As part of shutting down Dark Inc. and forming Darklang Inc., we've finally open-sourced all of our repositories. Our source code is now under the Apache License 2.0....",
    imageUrl: "/assets/The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpeg",
    slug: "https://blog.darklang.com/darklang-goes-open-source/",
  },
];

export const BlogPostsExample: React.FC = () => {
  return <BlogPosts posts={mockPosts} />;
};

export default BlogPostsExample;
