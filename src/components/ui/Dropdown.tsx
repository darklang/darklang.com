import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
  label: string;
  labelColor?: string;
  items: {
    text: string;
    href: string;
    target?: string;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, labelColor, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mt-1" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center text-sm font-medium ${labelColor} hover:text-blue-dbg focus:outline-none`}
      >
        <span>{label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10">
          <div className="py-1 rounded-md bg-white-custom border border-gray-200">
            {items.map((item, index) => (
              <React.Fragment key={item.text}>
                <Link
                  to={item.href}
                  target={item.target}
                  className="block px-4 py-3 text-sm text-black-custom hover:bg-purple-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
                {index < items.length - 1 && (
                  <div className="mx-4 border-t border-gray-100"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
