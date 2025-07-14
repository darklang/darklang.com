import React from "react";

interface BlogPostCardProps {
  author: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  author,
  date,
  title,
  excerpt,
  imageUrl,
  slug,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm inset-shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <a href={slug} className="block flex flex-col h-full" target="_blank">
        <div className="px-8 py-6 flex-1">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-400 mt-6 mb-2">By {author}</span>
            <span className="text-xs text-gray-400 mt-6 mb-2">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-blue-lbg mb-2">{title}</h3>
          <p className="text-gray-700 overflow-hidden text-ellipsis line-clamp-4 text-sm">
            {excerpt}
          </p>
        </div>
        <div className="mt-auto mx-8">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-t-md"
          />
        </div>
      </a>
    </div>
  );
};

export default BlogPostCard;
