export function NfcDoodle({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 580" className={className}>
      <defs>
        <style>
          {`
            .stroke-main { stroke: #1a2b4c; stroke-width: 7; stroke-linecap: round; stroke-linejoin: round; }
            .bg-circle { fill: #9bb1f0; }
            .phone-body { fill: #c2d6fc; }
            .hand-skin { fill: #ff9b93; }
            .sleeve { fill: #1a2b4c; }
            .cuff { stroke: #fff; stroke-width: 5; stroke-linecap: round; fill: none; }
            .text-nfc { fill: #1a2b4c; font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif; font-weight: bold; font-size: 40px; }
          `}
        </style>
      </defs>

      {/* Ärmel */}
      <path d="M 0 435 L 195 505 L 130 565 L 0 565 Z" className="sleeve stroke-main" />
      <path d="M 172 497 L 192 504" className="cuff" />

      {/* Signal-Kreis */}
      <g id="nfc-target">
        <circle cx="365" cy="175" r="110" className="bg-circle stroke-main" />
        <path d="M 292 208 A 62 62 0 0 1 292 132" fill="none" className="stroke-main" />
        <path d="M 307 192 A 42 42 0 0 1 307 148" fill="none" className="stroke-main" />
        <path d="M 322 179 A 24 24 0 0 1 322 161" fill="none" className="stroke-main" />
        <line x1="228" y1="72" x2="248" y2="96" className="stroke-main" />
        <line x1="268" y1="55" x2="271" y2="86" className="stroke-main" />
        <line x1="305" y1="60" x2="297" y2="90" className="stroke-main" />
      </g>

      {/* Smartphone */}
      <g transform="rotate(-18 255 300)">
        <rect x="180" y="165" width="150" height="270" rx="22" className="phone-body stroke-main" />
        <line x1="215" y1="188" x2="262" y2="188" strokeWidth="5" className="stroke-main" />
        <text x="196" y="312" className="text-nfc">
          NFC
        </text>
      </g>

      {/* Hand — Handfläche & Daumen über dem Display */}
      <path
        d="M 150 558
           C 128 478, 160 400, 197 358
           C 218 335, 240 348, 228 385
           C 212 422, 186 462, 192 502
           C 194 524, 166 558, 150 558 Z"
        className="hand-skin stroke-main"
      />
      <path
        d="M 197 428
           C 224 386, 266 356, 308 340
           C 330 332, 342 351, 325 373
           C 298 405, 256 430, 234 462
           C 218 484, 197 460, 197 428 Z"
        className="hand-skin stroke-main"
      />

      {/* Finger, die rechts um das Smartphone greifen */}
      <path
        d="M 328 226 C 366 219, 384 240, 362 258 C 346 267, 322 256, 328 226 Z"
        className="hand-skin stroke-main"
      />
      <path
        d="M 333 273 C 373 267, 391 290, 368 308 C 351 317, 326 305, 333 273 Z"
        className="hand-skin stroke-main"
      />
      <path
        d="M 336 321 C 376 316, 393 340, 369 357 C 352 366, 328 354, 336 321 Z"
        className="hand-skin stroke-main"
      />
      <path
        d="M 336 369 C 372 365, 387 387, 364 403 C 348 411, 328 400, 336 369 Z"
        className="hand-skin stroke-main"
      />
    </svg>
  );
}
