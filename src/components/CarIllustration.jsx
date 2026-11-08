export default function CarIllustration({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 600 190" role="img" aria-label="Illustration of an electric vehicle">
      <defs>
        <linearGradient id="carBody" x1="0" x2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dfe6dc" /></linearGradient>
        <radialGradient id="carGlow"><stop offset="0" stopColor="#B8F36B" stopOpacity=".75" /><stop offset="1" stopColor="#B8F36B" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="300" cy="168" rx="280" ry="18" fill="url(#carGlow)" />
      <path d="M40 132c0-14 8-22 26-26l78-22c34-26 70-38 118-38h58c40 0 78 16 108 40l60 14c30 6 44 14 44 32v10H40z" fill="url(#carBody)" stroke="#c9d3c6" />
      <path d="M170 86c26-18 52-26 92-26h50c22 0 50 12 72 30H170z" fill="#1b2420" />
      <path d="M56 116h488" stroke="#8ED83D" strokeWidth="2.5" />
      {[150, 450].map((x) => (
        <g key={x}><circle cx={x} cy="142" r="31" fill="#111" /><circle cx={x} cy="142" r="14" fill="#B8F36B" /><circle cx={x} cy="142" r="5" fill="#111" /></g>
      ))}
    </svg>
  );
}
