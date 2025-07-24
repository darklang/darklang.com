/**
 * Header Component
 */

import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../ui/Dropdown";
import {
  navigationConfig,
  classicNavigationConfig,
} from "../navigation/config";
import {
  DesktopNavigation,
  MobileNavigation,
  SocialLinks,
} from "../navigation/Navigation";

type PageName = "home" | "classic" | "roadmap" | "cli" | string;

interface HeaderProps {
  currentPage: PageName;
}

const Header = ({ currentPage }: HeaderProps) => {
  // Define background colors for different pages
  const bgColors: Record<string, string> = {
    home: "bg-white",
    classic: "bg-dark text-white",
    roadmap: "bg-white",
    cli: "bg-dark text-white",
    editing: "bg-dark text-white",
    packages: "bg-dark text-white",
    // Default for any other page (like NotFound)
    default: "bg-white",
  };

  // Get the color for the current page, or use default if not defined
  // any page starting with "packages" should use dark background
  const bgColor = currentPage.startsWith("packages")
    ? bgColors.packages
    : bgColors[currentPage] || bgColors.default;

  const isDarkBg = bgColor.includes("bg-dark");

  const logoSrc = isDarkBg ? "/assets/darklang-logo-dbg.png" : "/assets/darklang-logo.png";
  const githubLogoSrc = isDarkBg ? "/assets/github-logo-white.png" : "/assets/github-logo.png";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${bgColor} py-4`}>
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="Darklang Logo" className="h-11" />
        </Link>
        <DesktopNavigation sections={navigationConfig} />
        <div className="hidden md:flex items-center space-x-3">
          <SocialLinks githubLogoSrc={githubLogoSrc} />

          {currentPage === "classic" ? (
            <a
              href="https://login.darklang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-blue-dbg border border-blue-dbg hover:bg-transparent text-white rounded-md text-sm font-medium ml-3"
            >
              Log in
            </a>
          ) : (
            <>
              <div className="border-l border-gray-200 h-6 mx-3"></div>
              <Dropdown
                label="Darklang Classic"
                labelColor=""
                items={[
                  { text: "About", href: "/classic" },
                  {
                    text: "Log in",
                    href: "https://login.darklang.com",
                    target: "_blank",
                  },
                ]}
              />
            </>
          )}
        </div>
        {/* Burger Menu Button (mobile only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileNavigation
        sections={navigationConfig}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        bgColor={bgColor}
        githubLogoSrc={githubLogoSrc}
        currentPage={currentPage}
        classicItems={classicNavigationConfig.items}
      />
    </header>
  );
};

export default Header;
