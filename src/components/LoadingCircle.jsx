// LoadCircle.jsx

/**
 * LoadCircle
 * Props:
 *  - size (number) : diameter in px (default 160)
 *  - iconSize (number) : size of each icon in px (default 20)
 *  - colors (string[]) : array of color strings for icons
 *  - speed (number) : rotation duration in seconds (default 6)
 *  - items (number) : how many icons around the circle (default 8)
 */
export default function LoadCircle({
  size = 160,
  iconSize = 20,
  colors = [
    "#EF4444",
    "#F59E0B",
    "#10B981",
    "#3B82F6",
    "#8B5CF6",
    "#EC4899",
    "#06B6D4",
    "#F97316",
  ],
  speed = 6,
  items = 8,
}) {
  const radius = Math.max(0, size / 2 - iconSize - 6); // keep icons inside circle

  // simple set of inline SVG icon generators (returns JSX)
  const iconSet = [
    // circle/dot
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    // star
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M12 2l2.9 6.26L21 9.27l-5 3.87L17.8 21 12 17.77 6.2 21 7 13.14 2 9.27l6.1-.99L12 2z" />
      </svg>
    ),
    // heart
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M12 21s-7-4.35-9.33-6.58C0.9 11.94 2 7.52 6 5.95 8.11 5.17 10.3 6.04 12 7.77c1.7-1.73 3.89-2.6 6-1.82 4 1.57 5.1 6 3.33 8.47C19 16.65 12 21 12 21z" />
      </svg>
    ),
    // bolt
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    // sun
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M6.76 4.84l-1.8-1.79L3.17 5.84l1.79 1.79 1.8-2.79zM1 13h3v-2H1v2zm10 9h2v-3h-2v3zm7.04-3.04l2.79 1.79 1.79-1.79-1.79-2.79-2.79 2.79zM17 13h6v-2h-6v2zM12 6a6 6 0 100 12 6 6 0 000-12z" />
      </svg>
    ),
    // chat bubble
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M21 6h-18v12h4v4l4-4h10z" />
      </svg>
    ),
    // check
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
      </svg>
    ),
    // triangle
    (color) => (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    ),
  ];

  // choose icons for the requested number of items
  const chosenIcons = Array.from({ length: items }).map(
    (_, i) => iconSet[i % iconSet.length]
  );

  return (
    <div className="inline-block">
      {/* local keyframes for spin + pulse */}
      <style>{`
        @keyframes lc-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes lc-pulse { 0% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.35); opacity: 0.85 } 100% { transform: scale(1); opacity: 1 } }
      `}</style>

      <div
        className="relative"
        style={{
          width: size,
          height: size,
          // center and layer styles
        }}
        aria-hidden="true"
      >
        {/* Rotating ring wrapper */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: size,
            height: size,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            // apply the spinning animation using the provided speed
            animation: `lc-spin ${speed}s linear infinite`,
          }}
        >
          {/* center dot (optional) */}
          <div
            className="absolute rounded-full"
            style={{
              width: 6,
              height: 6,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0,0,0,0.12)",
            }}
          />

          {/* icons positioned around the circle */}
          {chosenIcons.map((IconFn, i) => {
            const angle = (360 / items) * i;
            const delay = (i * 0.12) % 1.2; // stagger pulses
            const iconColor = colors[i % colors.length];
            // transform: rotate(angle) translate(radius) rotate(-angle) to keep icon upright
            const transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: iconSize,
                  height: iconSize,
                  transform, // place icon around ring and keep upright
                  transformOrigin: "center",
                  marginLeft: -iconSize / 2,
                  marginTop: -iconSize / 2,
                  // pulsing animation (independent of the ring spin)
                  animation: `lc-pulse 1.6s ease-in-out ${delay}s infinite`,
                }}
                className="flex items-center justify-center"
              >
                {/* render chosen icon with color */}
                {IconFn(iconColor)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
