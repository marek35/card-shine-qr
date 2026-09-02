export function PageLoader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background">
      <div className="relative flex size-20 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-google-yellow/20 border-t-google-yellow" />
        <svg
          viewBox="0 0 100 60"
          className="size-10 animate-bounce text-foreground"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Schwanz */}
          <path
            d="M76 36 C90 36, 93 22, 82 17 C75 14, 68 19, 72 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Ohren */}
          <path d="M18 20 L22 6 L29 18 Z" />
          <path d="M29 18 L33 5 L39 19 Z" />
          {/* Kopf */}
          <circle cx="28" cy="27" r="14" />
          {/* Körper */}
          <ellipse cx="55" cy="35" rx="26" ry="15" />
          {/* Pfote */}
          <ellipse cx="30" cy="43" rx="6" ry="4" />
          {/* Augen */}
          <circle cx="23" cy="25" r="1.8" fill="white" />
          <circle cx="32" cy="25" r="1.8" fill="white" />
        </svg>
      </div>
      <p className="text-sm font-medium text-muted-foreground">Wird geladen…</p>
    </div>
  );
}
