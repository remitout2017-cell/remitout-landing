import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export interface AdditionalLink {
  label: string;
  icon?: {
    url?: string;
    alt?: string;
  };
  link: string;
}

interface BuiltInLink {
  type: "facebook" | "instagram";
  url: string;
}

export interface SocialLinksProps {
  links?: {
    facebook?: string;
    instagram?: string;
    additionalLinks?: AdditionalLink[];
  };
}


export default function SocialLinks({ links }: SocialLinksProps) {
  if (!links) return null;

  const builtInLinks: BuiltInLink[] = [];
  if (links.facebook)
    builtInLinks.push({ type: "facebook", url: links.facebook });
  if (links.instagram)
    builtInLinks.push({ type: "instagram", url: links.instagram });

  const extraLinks =
    links.additionalLinks?.filter((item) => item.link && item.icon?.url) || [];

  // Limit to 5 icons total
  const combined = [...builtInLinks, ...extraLinks].slice(0, 5);

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      {combined.map((item, index) => {
        if ("type" in item) {
          if (item.type === "facebook") {
            return (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            );
          }
          if (item.type === "instagram") {
            return (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            );
          }
        }

        // Additional link
        const extra = item as AdditionalLink;

        const src = (() => {
          if (!extra.icon?.url) return null; // no URL
          if (extra.icon.url.startsWith("http")) return extra.icon.url; // absolute URL
          const base = "http://66.116.196.83:5000"; // hardcoded IP
          return `${base}${extra.icon.url.startsWith("/") ? "" : "/"}${extra.icon.url}`;
        })();
          


        return (
          <Link
            key={index}
            href={extra.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            {src && (
              <Image
                src={src}
                alt={extra.label || "icon"}
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
