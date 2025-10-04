import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export interface SocialLinksProps {
  links?: { facebook?: string; instagram?: string; customIcon?: string };
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4 justify-center">
      {links?.facebook && (
        <Link
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Facebook className="h-6 w-6" />
        </Link>
      )}
      {links?.instagram && (
        <Link
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          <Instagram className="h-6 w-6" />
        </Link>
      )}
      {links?.customIcon && (
        <Link
          href={links.customIcon}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80"
        >
          {/* Custom SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </Link>
      )}
    </div>
  );
}
