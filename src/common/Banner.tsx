import React from "react";
import { Link } from "react-router-dom";

interface BannerProps {
  text: string;
}

const Banner: React.FC<BannerProps> = ({ text }) => {
  return (
    <div className="w-full bg-purple-dbg text-white py-2 px-4 md:text-center font-medium text-sm flex flex-wrap items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
      <span className="mr-1">
        {text}.{" "}
        <Link
          to="/"
          className="ml-1 hover:underline whitespace-nowrap flex-shrink-0"
        >
          Stay Tuned — Join Our Newsletter  →
        </Link>
      </span>
    </div>
  );
};

export default Banner;
