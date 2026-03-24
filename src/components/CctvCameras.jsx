/* CCTV Camera SVG decorative components */
export function DomeCam({ className = '', style = {} }) {
  return (
    <svg
      className={`cctv-cam-svg ${className}`}
      style={{ width: 48, height: 48, opacity: 0.06, ...style }}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* dome base */}
      <ellipse cx="50" cy="70" rx="40" ry="10" stroke="#fff" strokeWidth="1.5" />
      {/* dome top */}
      <path d="M10 70 Q10 25 50 20 Q90 25 90 70" stroke="#fff" strokeWidth="1.5" fill="none" />
      {/* lens */}
      <circle cx="50" cy="50" r="10" stroke="#fff" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="4" fill="#fff" opacity="0.3" />
    </svg>
  );
}

export function BulletCam({ className = '', style = {} }) {
  return (
    <svg
      className={`cctv-cam-svg ${className}`}
      style={{ width: 56, height: 36, opacity: 0.06, ...style }}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* mount bracket */}
      <rect x="5" y="10" width="12" height="40" rx="2" stroke="#fff" strokeWidth="1.5" />
      {/* arm */}
      <line x1="17" y1="30" x2="40" y2="25" stroke="#fff" strokeWidth="1.5" />
      {/* body */}
      <rect x="38" y="15" width="60" height="24" rx="6" stroke="#fff" strokeWidth="1.5" />
      {/* lens */}
      <circle cx="95" cy="27" r="8" stroke="#fff" strokeWidth="1.2" />
      <circle cx="95" cy="27" r="3" fill="#fff" opacity="0.3" />
      {/* IR LEDs */}
      <circle cx="78" cy="21" r="1.5" fill="#fff" opacity="0.2" />
      <circle cx="78" cy="33" r="1.5" fill="#fff" opacity="0.2" />
    </svg>
  );
}
