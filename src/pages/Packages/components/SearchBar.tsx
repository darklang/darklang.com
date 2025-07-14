import React from "react";

const SearchIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M13.1145 20.9411C10.9163 20.9411 9.05321 20.1775 7.52512 18.6503C5.99796 17.1241 5.23438 15.2614 5.23438 13.0623C5.23438 10.8633 5.99796 9.00014 7.52512 7.47297C9.05229 5.9458 10.9154 5.18268 13.1145 5.18359C15.3136 5.18451 17.1762 5.94809 18.7025 7.47434C20.2287 9.00059 20.9923 10.8633 20.9932 13.0623C20.9932 14.0175 20.8241 14.942 20.4859 15.8357C20.1476 16.7295 19.703 17.494 19.1521 18.1292L27.277 26.2513C27.4053 26.3797 27.4741 26.5378 27.4832 26.7257C27.4915 26.9118 27.4227 27.0782 27.277 27.2248C27.1303 27.3715 26.9681 27.4448 26.7902 27.4448C26.6124 27.4448 26.4502 27.3715 26.3035 27.2248L18.18 19.1013C17.4925 19.6871 16.7019 20.1404 15.8081 20.4612C14.9144 20.7821 14.016 20.9425 13.1131 20.9425M13.1131 19.5675C14.9373 19.5675 16.4777 18.9396 17.7345 17.6837C18.9903 16.4279 19.6182 14.8874 19.6182 13.0623C19.6182 11.2373 18.9908 9.69726 17.7359 8.44234C16.481 7.18743 14.941 6.55951 13.1159 6.55859C11.2908 6.55859 9.75033 7.18651 8.4945 8.44234C7.23867 9.69818 6.61029 11.2382 6.60937 13.0623C6.60846 14.8865 7.23637 16.4265 8.49312 17.6823C9.74987 18.9382 11.2899 19.5661 13.1131 19.5661"
      fill="#95589F"
    />
  </svg>
);

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search packages, functions, types, constants, and more...",
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 relative">
      <div className="mb-8">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon className="w-6 h-6 text-purple-dbg" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="block w-full pl-14 pr-4 py-5 md:text-xl bg-[#242628] border border-[#383737] rounded-lg leading-5 text-white-custom placeholder-gray-light focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-lbg focus:border-purple-lbg transition-all text-ellipsis"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
