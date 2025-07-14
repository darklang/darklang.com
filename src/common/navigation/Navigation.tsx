import React from "react";
import { Link } from "react-router-dom";
import { NavigationSection, NavigationItem, socialLinks } from "./config";
import Dropdown from "../ui/Dropdown";

interface SocialLinksProps {
  githubLogoSrc: string;
  onClose?: () => void;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  githubLogoSrc,
  onClose,
  className = "",
}) => {
  const renderIcon = (iconType: string, name: string) => {
    if (iconType === "discord") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="17"
          viewBox="0 0 23 17"
          fill="none"
        >
          <path
            d="M19.071 1.55192C17.6856 0.906087 16.1856 0.437337 14.6231 0.166504C14.5956 0.166895 14.5694 0.178128 14.5502 0.197754C14.3627 0.541504 14.1439 0.98942 13.9981 1.33317C12.3408 1.08333 10.6554 1.08333 8.99809 1.33317C8.85225 0.979004 8.6335 0.541504 8.43559 0.197754C8.42517 0.176921 8.39392 0.166504 8.36267 0.166504C6.80017 0.437337 5.31059 0.906087 3.91475 1.55192C3.90434 1.55192 3.89392 1.56234 3.8835 1.57275C1.05017 5.81234 0.268921 9.93734 0.654338 14.0207C0.654338 14.0415 0.664754 14.0623 0.685588 14.0728C2.56059 15.4478 4.36267 16.2811 6.14392 16.8332C6.17517 16.8436 6.20642 16.8332 6.21684 16.8123C6.6335 16.2394 7.0085 15.6353 7.33142 14.9998C7.35225 14.9582 7.33142 14.9165 7.28975 14.9061C6.696 14.6769 6.1335 14.4061 5.58142 14.0936C5.53975 14.0728 5.53975 14.0103 5.571 13.979C5.68559 13.8957 5.80017 13.8019 5.91475 13.7186C5.93559 13.6978 5.96684 13.6978 5.98767 13.7082C9.571 15.3436 13.4356 15.3436 16.9773 13.7082C16.9981 13.6978 17.0293 13.6978 17.0502 13.7186C17.1648 13.8123 17.2793 13.8957 17.3939 13.9894C17.4356 14.0207 17.4356 14.0832 17.3835 14.104C16.8418 14.4269 16.2689 14.6873 15.6752 14.9165C15.6335 14.9269 15.6231 14.979 15.6335 15.0103C15.9668 15.6457 16.3418 16.2498 16.7481 16.8228C16.7793 16.8332 16.8106 16.8436 16.8418 16.8332C18.6335 16.2811 20.4356 15.4478 22.3106 14.0728C22.3314 14.0623 22.3418 14.0415 22.3418 14.0207C22.8002 9.30192 21.5814 5.20817 19.1127 1.57275C19.1023 1.56234 19.0918 1.55192 19.071 1.55192ZM7.87309 11.5311C6.80017 11.5311 5.90434 10.5415 5.90434 9.32275C5.90434 8.104 6.77934 7.11442 7.87309 7.11442C8.97725 7.11442 9.85225 8.11442 9.84184 9.32275C9.84184 10.5415 8.96684 11.5311 7.87309 11.5311ZM15.1335 11.5311C14.0606 11.5311 13.1648 10.5415 13.1648 9.32275C13.1648 8.104 14.0398 7.11442 15.1335 7.11442C16.2377 7.11442 17.1127 8.11442 17.1023 9.32275C17.1023 10.5415 16.2377 11.5311 15.1335 11.5311Z"
            fill="#7B85FF"
          />
        </svg>
      );
    } else if (iconType === "github") {
      return <img src={githubLogoSrc} alt={name} className="h-5" />;
    }
    return null;
  };

  return (
    <div className={`flex space-x-4 items-center ${className}`}>
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-dbg"
          onClick={onClose}
        >
          {renderIcon(social.icon, social.name)}
        </a>
      ))}
    </div>
  );
};

export { SocialLinks };

interface DesktopNavigationProps {
  sections: NavigationSection[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  sections,
}) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {sections.map((section, index) => (
          <li key={index}>
            {section.type === "dropdown" ? (
              <Dropdown label={section.label} items={section.items} />
            ) : (
              <Link
                to={section.href!}
                className="hover:text-blue-dbg text-sm font-medium"
                {...(section.target && {
                  target: section.target,
                  rel: "noopener noreferrer",
                })}
              >
                {section.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface MobileNavigationProps {
  sections: NavigationSection[];
  isOpen: boolean;
  onClose: () => void;
  bgColor: string;
  githubLogoSrc: string;
  currentPage: string;
  classicItems: NavigationItem[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  sections,
  isOpen,
  onClose,
  bgColor,
  githubLogoSrc,
  currentPage,
  classicItems,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden ${bgColor} py-4 px-6 absolute w-full z-50 shadow-lg`}
    >
      <nav>
        <ul className="space-y-4">
          {sections.map((section, index) => (
            <li
              key={index}
              className={section.type === "dropdown" ? "py-2" : ""}
            >
              {section.type === "dropdown" ? (
                <>
                  <div className="font-medium text-sm mb-2">
                    {section.label}
                  </div>
                  <ul className="pl-4 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.href}
                          className="block hover:text-blue-dbg text-sm"
                          onClick={onClose}
                          {...(item.target && {
                            target: item.target,
                            rel: "noopener noreferrer",
                          })}
                        >
                          {item.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={section.href!}
                  className="block hover:text-blue-dbg text-sm font-medium"
                  onClick={onClose}
                  {...(section.target && {
                    target: section.target,
                    rel: "noopener noreferrer",
                  })}
                >
                  {section.label}
                </Link>
              )}
            </li>
          ))}

          {/* Darklang Classic Section */}
          {currentPage === "classic" ? (
            <li className="pt-2">
              <a
                href="https://login.darklang.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-blue-dbg text-white rounded-md hover:bg-purple-dbg text-sm font-medium transition-colors text-center"
                onClick={onClose}
              >
                Log in
              </a>
            </li>
          ) : (
            <li className="pt-2">
              <div className="font-medium text-sm mb-2">Darklang Classic</div>
              <ul className="pl-4 space-y-2">
                {classicItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="block hover:text-blue-dbg text-sm"
                      onClick={onClose}
                      {...(item.target && {
                        target: item.target,
                        rel: "noopener noreferrer",
                      })}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}

          {/* Social Links */}
          <li className="pt-4">
            <SocialLinks
              githubLogoSrc={githubLogoSrc}
              onClose={onClose}
              className="justify-end"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};
