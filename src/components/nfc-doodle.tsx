export function NfcDoodle({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className}>
      <defs>
        <style>
          {`
            .stroke-main { stroke: #1a2b4c; stroke-width: 5; stroke-linecap: round; stroke-linejoin: round; }
            .bg-circle { fill: #9bb1f0; }
            .phone-body { fill: #c2d6fc; }
            .hand-skin { fill: #ff9b93; }
            .sleeve { fill: #1a2b4c; }
            .text-nfc { fill: #1a2b4c; font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; font-weight: bold; font-size: 38px; }
          `}
        </style>
      </defs>

      {/* Signal-Kreis im Hintergrund */}
      <g id="nfc-target">
        <circle cx="310" cy="160" r="75" className="bg-circle stroke-main" />
        {/* Signal-Wellen */}
        <path d="M 270 185 A 50 50 0 0 1 350 185" fill="none" className="stroke-main" strokeWidth="6" />
        <path d="M 280 155 A 35 35 0 0 1 340 155" fill="none" className="stroke-main" strokeWidth="6" />
        <path d="M 292 130 A 20 20 0 0 1 328 130" fill="none" className="stroke-main" strokeWidth="6" />
        {/* Strahlen oben */}
        <line x1="200" y1="80" x2="215" y2="100" className="stroke-main" strokeWidth="5" />
        <line x1="235" y1="65" x2="238" y2="90" className="stroke-main" strokeWidth="5" />
        <line x1="268" y1="65" x2="263" y2="88" className="stroke-main" strokeWidth="5" />
      </g>

      {/* Arm / Ärmel */}
      <path d="M 10 320 L 140 375 L 80 500 L -10 500 Z" className="sleeve stroke-main" />
      {/* Ärmelsegment/Manschette */}
      <path d="M 125 368 L 140 375" className="stroke-main" />

      {/* Hand und Finger */}
      <g id="hand">
        {/* Daumen hinten & Handfläche */}
        <path
          d="M 130 365
             C 100 290, 140 200, 160 180
             C 175 165, 185 185, 175 220
             C 165 250, 145 280, 150 310
             C 152 330, 135 365, 130 365 Z"
          className="hand-skin stroke-main"
        />

        {/* Kleine Finger rechts am Smartphone */}
        <path d="M 268 220 C 280 220, 285 235, 272 242" className="hand-skin stroke-main" />
        <path d="M 262 245 C 275 247, 280 260, 265 268" className="hand-skin stroke-main" />
        <path d="M 252 272 C 265 275, 270 288, 255 295" className="hand-skin stroke-main" />
        <path d="M 242 298 C 255 300, 258 312, 245 318" className="hand-skin stroke-main" />
      </g>

      {/* Smartphone */}
      <g id="phone" transform="rotate(-20 200 220)">
        <rect x="140" y="100" width="95" height="180" rx="18" className="phone-body stroke-main" />
        {/* Lautsprecher-Schlitz */}
        <line x1="170" y1="115" x2="205" y2="115" className="stroke-main" strokeWidth="4" />
        {/* NFC Text */}
        <text x="150" y="180" className="text-nfc" transform="rotate(5 150 180)">
          NFC
        </text>
      </g>
    </svg>
  );
}
