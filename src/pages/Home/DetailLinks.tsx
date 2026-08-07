import React from "react";
import { Link } from "react-router-dom";

interface DetailLink {
  label: string;
  to: string;
}

const DetailLinks: React.FC<{ links: DetailLink[]; color?: string }> = ({
  links,
  color = "text-purple-lbg",
}) => (
  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-base md:text-lg">
    {links.map(link => (
      <Link
        key={link.to}
        to={link.to}
        className={`group inline-flex items-center gap-1.5 ${color} font-medium`}
      >
        {link.label}
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    ))}
  </div>
);

export default DetailLinks;
