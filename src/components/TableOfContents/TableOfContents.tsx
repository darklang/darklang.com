import React, { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const tocRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      let currentSection = "";
      items.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = item.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed left-6 top-34 z-50 hidden md:block" ref={tocRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-white/80 hover:bg-white border border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm ${
            isOpen ? "bg-white border-gray-300 shadow-md" : ""
          }`}
          aria-label={
            isOpen ? "Close table of contents" : "Open table of contents"
          }
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-96 max-w-[95vw] bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg z-40">
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <h3 className="text-sm font-medium text-gray-700 mb-3 pb-2 border-b border-gray-100">
                Table of Contents
              </h3>
              <nav>
                <ul className="space-y-1">
                  {items.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          scrollToSection(item.id);
                          setIsOpen(false); // Close after selection
                        }}
                        className={`w-full text-left text-xs py-2.5 px-3 rounded-md transition-all duration-150 hover:bg-gray-50 hover:text-purple-lbg leading-relaxed ${
                          activeSection === item.id
                            ? "bg-purple-50 text-purple-lbg font-medium border-l-2 border-purple-lbg"
                            : "text-gray-600"
                        }`}
                        title={item.title} // Tooltip for long titles
                      >
                        <span className="block whitespace-normal">
                          {item.title}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* close when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default TableOfContents;
