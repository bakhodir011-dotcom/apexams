// Innovative Centre logo — smooth bold check + wordmark, rebuilt as inline SVG
// so it renders crisply at any size and adapts to light/dark via currentColor.
// The wordmark uses Quicksand (the brand typeface). To use the exact raster
// instead on a light background, drop it in /public/logos and swap the mark.

export function CheckMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M6 27 C9.5 25.8 12.8 27.6 15.4 31.4 L18.2 35.6 C19 36.8 20.7 36.7 21.4 35.4 C26.4 25.7 33.8 15.6 43 8.4 C44 7.6 43.2 9.4 41.8 11.2 C34.2 20.8 27.4 30.4 22.6 39.4 C21.6 41.2 19.2 41.2 18.1 39.4 C15.4 34.9 11.6 31 7.6 29.4 C5.9 28.7 5.2 27.3 6 27 Z"
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
      <CheckMark className={`h-9 w-9 flex-shrink-0 ${markColor}`} />
      <span className="leading-tight">
        <span className={`font-brand block text-[19px] font-bold tracking-tight ${nameColor}`}>
          Innovative Centre
        </span>
        {showTagline && (
          <span className={`font-brand block text-[11px] font-semibold ${tagColor}`}>
            Enabling world-class education
          </span>
        )}
      </span>
    </span>
  );
}
