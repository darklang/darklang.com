import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-7xl font-bold text-purple-lbg mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-black-custom mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-custom max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="space-x-4">
        <Link
          to="/"
          className="px-6 py-3 bg-purple-lbg text-white rounded-md hover:bg-purple-secondary transition-colors"
        >
          Go Home
        </Link>
        <a
          href="https://docs.darklang.com"
          className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Visit Docs
        </a>
      </div>
    </div>
  );
};

export default NotFound;
