import { useState } from "react";

/**
 * SmartImage
 * - Lazy loads by default
 * - Shows an elegant SVG placeholder if the image is missing/broken
 * - Smooth fade-in once loaded
 */
export default function SmartImage({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  placeholderLabel,
}) {
  const [status, setStatus] = useState("loading"); // loading | loaded | error

  const showPlaceholder = !src || status === "error";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showPlaceholder ? (
        <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
          <div className="flex flex-col items-center gap-3 text-gold/40">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            {placeholderLabel && (
              <span className="text-xs font-medium tracking-wide text-gold/50 px-4 text-center">
                {placeholderLabel}
              </span>
            )}
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={`h-full w-full object-cover transition-all duration-700 ${
            status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
