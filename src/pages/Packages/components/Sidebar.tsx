import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#242628] border border-[#383737] rounded-3xl p-6">
        <h3 className="text-xl font-semibold text-white-custom mb-6">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-start pb-4 border-b border-[#383737]">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded mr-3 flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-md font-bold">📦</span>
            </div>
            <div className="flex-1">
              <p className="text-white-custom font-medium">
                New Package Published
              </p>
              <p className="text-gray-light text-sm">
                Darklang.ModelContextProtocol{" "}
              </p>
            </div>
          </div>

          <div className="flex items-start pb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded mr-3 flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-white-custom font-medium">New Contributor</p>
              <p className="text-gray-light text-sm">@Alex_cb</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#242628] border border-[#383737] rounded-3xl p-6">
        <h3 className="text-xl font-semibold text-white-custom mb-4 text-center">
          Stay Updated
        </h3>
        <p className="text-white text-lg text-center mb-6 mx-2">
          Get monthly package highlights delivered to your inbox
        </p>
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#383737] rounded-lg text-white-custom placeholder-gray-light focus:outline-none focus:ring-2 focus:ring-purple-lbg focus:border-purple-lbg"
          />
          <button className="bg-purple-lbg hover:bg-purple-dbg text-white-custom text-sm py-3 px-2 rounded-lg font-medium transition-colors mx-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
