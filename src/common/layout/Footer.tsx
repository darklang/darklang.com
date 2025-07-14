import { Link } from "react-router-dom";

import darkLangLogo from "~/assets/darklang-logo.png";
import darkLangLogoDark from "~/assets/darklang-logo-dbg.png";

// Define valid page types
type PageName = "home" | "classic" | "roadmap" | "cli" | "editing" | string;

interface FooterProps {
  currentPage: PageName;
}

const Footer = ({ currentPage }: FooterProps) => {
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
  // Determine if we're using a dark background
  const isDarkBg = bgColor.includes("bg-dark");

  const logoSrc = isDarkBg ? darkLangLogoDark : darkLangLogo;

  return (
    <footer className={`${bgColor} p-8 mt-auto`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo and Copyright */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={logoSrc} alt="Darklang" className="h-8 mr-2" />
            </div>
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} Darklang Inc.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/darklang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-purple-lbg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/darklang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-purple-lbg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://darklang.com/discord"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hover:text-purple-lbg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/c/darklang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-purple-lbg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Darklang Classic Column */}
            <div>
              <h3 className="font-semibold mb-4">Darklang Classic</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="https://login.darklang.com"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://darklang.com/desktop-client"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Desktop client
                  </Link>
                </li>
                <li>
                  <a
                    href="https://darklang.com/mailing-list"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Mailing list
                  </a>
                </li>
              </ul>
            </div>

            {/* Learning Column */}
            <div>
              <h3 className="font-semibold mb-4">Learning Darklang Classic</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="https://www.youtube.com/watch?v=orRn2kTtRXQ"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Demo video
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://youtube.com/c/Darklang/videos"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Tutorial video
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://docs.darklang.com/introduction"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://docs.darklang.com/tutorials/first-dark-application"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://docs.darklang.com/category/walk-throughs"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Walk-throughs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Development */}
            <div>
              <h3 className="font-semibold mb-4">Development</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://blog.darklang.com"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/darklang/dark"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Source
                  </a>
                </li>
                <li>
                  <a
                    href="https://darklang.com/notion"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/darklang/dark/issues"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.darklang.com/changelog"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://darklang.com/discord"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://darklang.com/code-of-conduct"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Code of conduct
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.darklang.com/contributing/getting-started"
                    className="hover:text-purple-lbg transition-colors"
                    target="_blank"
                  >
                    Contributor docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
