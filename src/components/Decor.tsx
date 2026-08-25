export function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 180" aria-hidden="true">
      <path d="M60 172 C58 130 61 86 77 22" />
      <path d="M64 127 C43 119 30 105 25 87" />
      <path d="M66 111 C86 102 98 87 103 68" />
      <path d="M70 82 C54 71 47 58 46 42" />
      <path d="M73 65 C89 57 97 45 100 31" />
      <ellipse cx="27" cy="86" rx="8" ry="16" transform="rotate(-42 27 86)" />
      <ellipse cx="42" cy="105" rx="7" ry="14" transform="rotate(-52 42 105)" />
      <ellipse cx="99" cy="68" rx="7" ry="15" transform="rotate(44 99 68)" />
      <ellipse cx="89" cy="88" rx="6" ry="13" transform="rotate(40 89 88)" />
      <ellipse cx="47" cy="42" rx="6" ry="13" transform="rotate(-22 47 42)" />
      <ellipse cx="99" cy="31" rx="6" ry="12" transform="rotate(28 99 31)" />
      <circle cx="78" cy="20" r="4" />
    </svg>
  );
}

export function MountainSketch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 190" aria-hidden="true">
      <path d="M8 157 C78 146 128 146 194 151 C278 157 349 149 512 155" />
      <path d="M23 145 L110 78 L162 120 L223 39 L286 121 L346 65 L430 145" />
      <path d="M82 101 L110 78 L124 103 L143 96 L162 120" />
      <path d="M185 82 L223 39 L251 86 L268 75 L286 121" />
      <path d="M315 99 L346 65 L367 98 L390 90 L430 145" />
      <path d="M358 150 V122 H394 V150" />
      <path d="M365 122 L376 112 L389 122" />
      <path d="M93 150 V129 H126 V150" />
      <path d="M98 129 L110 118 L122 129" />
      <path d="M462 154 V117 M452 130 L462 117 L472 130 M454 142 L462 131 L470 142" />
    </svg>
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

export function PaperNote({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`paper-note handwritten ${className}`}>
      <Tape />
      {children}
    </div>
  );
}
