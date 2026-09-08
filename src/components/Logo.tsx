// Innovative Centre wordmark — brush check + name, rebuilt as inline SVG.
// Swap for the official raster at /public/logos if you prefer the exact file.

export function CheckMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* Brush-style check swoosh */}
      <path
        d="M4 22 C4 22 9 25 13 33 C13.6 34.3 15.4 34.4 16 33 C21 21.5 30 9 37 4.5 C38.5 3.5 37 6 35 8.5 C29 16 21.5 25 16.5 33.5 C15.8 34.7 14 34.6 13.4 33.2 C11 27.5 7.5 24 4.5 23 C3.4 22.6 3.4 22 4 22 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  showTagline = false,
  className = "",
}: {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
}) {
  const nameColor = variant === "light" ? "text-white" : "text-ic-800";
  const tagColor = variant === "light" ? "text-ic-200" : "text-ic-500";
  const markColor = variant === "light" ? "text-white" : "text-ic-800";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <CheckMark className={`h-8 w-8 flex-shrink-0 ${markColor}`} />
      <span className="leading-tight">
        <span className={`block text-[17px] font-extrabold tracking-tight ${nameColor}`}>
          Innovative Centre
        </span>
        {showTagline && (
          <span className={`block text-[11px] font-medium ${tagColor}`}>
            Enabling world-class education
          </span>
        )}
      </span>
    </span>
  );
}
