import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { MathDiagramType } from '../types';

interface QuestionImageProps {
  src?: string;
  diagramType?: MathDiagramType;
  caption?: string;
  alt: string;
  compact?: boolean;
}

const renderMathDiagram = (type: MathDiagramType) => {
  switch (type) {
    case 'harga_alat_tulis':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" role="img" aria-label="Daftar Harga Alat Tulis Koperasi Sekolah">
          <rect width="400" height="220" fill="#f8fafc" />
          <rect x="16" y="14" width="368" height="32" rx="8" fill="#1e3a8a" />
          <text x="200" y="35" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            KOPERASI SEKOLAH - DAFTAR HARGA
          </text>

          {/* Kartu 1: Buku Tulis */}
          <rect x="20" y="60" width="110" height="142" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="47" y="76" width="56" height="64" rx="5" fill="#fbbf24" stroke="#92400e" strokeWidth="2" />
          <rect x="47" y="76" width="10" height="64" rx="2" fill="#d97706" />
          <line x1="63" y1="92" x2="95" y2="92" stroke="#78350f" strokeWidth="2" />
          <line x1="63" y1="102" x2="95" y2="102" stroke="#78350f" strokeWidth="2" />
          <text x="75" y="160" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Buku Tulis
          </text>
          <rect x="30" y="168" width="90" height="24" rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <text x="75" y="184" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Rp3.250
          </text>

          {/* Kartu 2: Tempat Pensil */}
          <rect x="145" y="60" width="110" height="142" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="165" y="92" width="70" height="36" rx="10" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
          <line x1="172" y1="104" x2="228" y2="104" stroke="#fecaca" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="222" cy="104" r="4" fill="#fde047" stroke="#991b1b" strokeWidth="1.5" />
          <text x="200" y="160" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Tempat Pensil
          </text>
          <rect x="155" y="168" width="90" height="24" rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <text x="200" y="184" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Rp4.500
          </text>

          {/* Kartu 3: Penggaris */}
          <rect x="270" y="60" width="110" height="142" rx="12" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
          <rect x="285" y="95" width="80" height="26" rx="4" fill="#38bdf8" stroke="#0369a1" strokeWidth="2" />
          {[0, 1, 2, 3, 4, 5, 6].map((tick) => (
            <line
              key={tick}
              x1={295 + tick * 10}
              y1="95"
              x2={295 + tick * 10}
              y2={tick % 2 === 0 ? '106' : '102'}
              stroke="#0c4a6e"
              strokeWidth="1.5"
            />
          ))}
          <text x="325" y="160" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Penggaris
          </text>
          <rect x="280" y="168" width="90" height="24" rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <text x="325" y="184" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Rp1.750
          </text>
        </svg>
      );

    case 'pita_pecahan':
      return (
        <svg viewBox="0 0 400 180" className="w-full h-full" role="img" aria-label="Pita Pecahan 7 Bagian Sama Besar">
          <rect width="400" height="180" fill="#ffffff" />
          <text x="200" y="34" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
            Pita Pecahan (7 Bagian Sama Besar)
          </text>
          {/* 7 kotak pita pecahan: 2 biru, 3 hijau, 2 putih */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            const fill = i < 2 ? '#2563eb' : i < 5 ? '#10b981' : '#f8fafc';
            return (
              <rect
                key={i}
                x={25 + i * 50}
                y="60"
                width="50"
                height="52"
                fill={fill}
                stroke="#1e293b"
                strokeWidth="2"
              />
            );
          })}
          {/* Penanda bawah 2/7 dan 3/7 */}
          <path d="M 25 120 L 25 128 L 125 128 L 125 120" fill="none" stroke="#1d4ed8" strokeWidth="2" />
          <text x="75" y="146" textAnchor="middle" fill="#1d4ed8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Biru = 2/7
          </text>

          <path d="M 127 120 L 127 128 L 275 128 L 275 120" fill="none" stroke="#047857" strokeWidth="2" />
          <text x="201" y="146" textAnchor="middle" fill="#047857" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Hijau = 3/7
          </text>

          <text x="325" y="146" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Putih = 2/7
          </text>
        </svg>
      );

    case 'grid_desimal':
      return (
        <svg viewBox="0 0 360 270" className="w-full h-full" role="img" aria-label="Petak Perseratusan 10x10 dengan 35 kotak diarsir">
          <rect width="360" height="270" fill="#ffffff" />
          <text x="180" y="24" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Petak Perseratusan (10 × 10 = 100 Kotak)
          </text>
          <g transform="translate(75, 36)">
            {Array.from({ length: 10 }).map((_, col) =>
              Array.from({ length: 10 }).map((__, row) => {
                // 3 kolom penuh (30 kotak) + 5 kotak pertama di kolom ke-4 = 35 kotak
                const isShaded = col < 3 || (col === 3 && row < 5);
                return (
                  <rect
                    key={`${col}-${row}`}
                    x={col * 21}
                    y={row * 21}
                    width="21"
                    height="21"
                    fill={isShaded ? '#0ea5e9' : '#f8fafc'}
                    stroke="#334155"
                    strokeWidth="1.1"
                  />
                );
              })
            )}
            <rect x="0" y="0" width="210" height="210" fill="none" stroke="#0f172a" strokeWidth="2" />
          </g>
        </svg>
      );

    case 'pola_persegi':
      return (
        <svg viewBox="0 0 420 200" className="w-full h-full" role="img" aria-label="Pola Gambar Susunan Kotak 2, 5, 8, 11">
          <rect width="420" height="200" fill="#f8fafc" />
          <text x="210" y="24" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Pola Gambar Susunan Persegi
          </text>

          {/* Pola 1: 2 kotak */}
          <g transform="translate(22, 130)">
            {[0, 1].map((i) => (
              <rect key={i} x={i * 16} y={0} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            <text x="15" y="34" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 1
            </text>
          </g>

          {/* Pola 2: 5 kotak (2 + 3) */}
          <g transform="translate(94, 114)">
            {[0, 1].map((c) => (
              <rect key={`r1-${c}`} x={c * 16} y={0} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            {[0, 1, 2].map((c) => (
              <rect key={`r2-${c}`} x={c * 16} y={16} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            <text x="23" y="50" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 2
            </text>
          </g>

          {/* Pola 3: 8 kotak (2 + 3 + 3) */}
          <g transform="translate(182, 98)">
            {[0, 1].map((c) => (
              <rect key={`r0-${c}`} x={c * 16} y={0} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            {[0, 1, 2].map((c) => (
              <rect key={`r1-${c}`} x={c * 16} y={16} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            {[0, 1, 2].map((c) => (
              <rect key={`r2-${c}`} x={c * 16} y={32} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            <text x="23" y="66" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 3
            </text>
          </g>

          {/* Pola 4: 11 kotak (2 + 3 + 3 + 3) */}
          <g transform="translate(274, 82)">
            {[0, 1].map((c) => (
              <rect key={`r0-${c}`} x={c * 16} y={0} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            {[0, 1, 2].map((c) => (
              <rect key={`r1-${c}`} x={c * 16} y={16} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            {[0, 1, 2].map((c) => (
              <rect key={`r2-${c}`} x={c * 16} y={32} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            {[0, 1, 2].map((c) => (
              <rect key={`r3-${c}`} x={c * 16} y={48} width="14" height="14" rx="2" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.2" />
            ))}
            <text x="23" y="82" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 4
            </text>
          </g>

          {/* Pola 5: ? */}
          <g transform="translate(356, 98)">
            <rect x="0" y="0" width="44" height="44" rx="10" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 3" />
            <text x="22" y="29" textAnchor="middle" fill="#3730a3" fontSize="20" fontWeight="bold" fontFamily="sans-serif">
              ?
            </text>
            <text x="22" y="66" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 5
            </text>
          </g>
        </svg>
      );

    case 'pola_kelereng':
      return (
        <svg viewBox="0 0 420 200" className="w-full h-full" role="img" aria-label="Pola Gambar Susunan Kelereng Segitiga 1, 3, 6, 10">
          <rect width="420" height="200" fill="#ffffff" />
          <text x="210" y="24" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Pola Susunan Kelereng Berbentuk Segitiga
          </text>

          {/* Pola 1: 1 */}
          <g transform="translate(42, 130)">
            <circle cx="0" cy="0" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <text x="0" y="34" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 1 (1)
            </text>
          </g>

          {/* Pola 2: 3 */}
          <g transform="translate(118, 114)">
            <circle cx="0" cy="0" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-9" cy="16" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="9" cy="16" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <text x="0" y="50" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 2 (3)
            </text>
          </g>

          {/* Pola 3: 6 */}
          <g transform="translate(206, 98)">
            <circle cx="0" cy="0" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-9" cy="16" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="9" cy="16" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-18" cy="32" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="0" cy="32" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="18" cy="32" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <text x="0" y="66" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 3 (6)
            </text>
          </g>

          {/* Pola 4: 10 */}
          <g transform="translate(310, 82)">
            <circle cx="0" cy="0" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-9" cy="16" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="9" cy="16" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-18" cy="32" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="0" cy="32" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="18" cy="32" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-27" cy="48" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="-9" cy="48" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="9" cy="48" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <circle cx="27" cy="48" r="7" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5" />
            <text x="0" y="82" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 4 (10)
            </text>
          </g>

          {/* Pola 5 */}
          <g transform="translate(382, 102)">
            <circle cx="0" cy="18" r="18" fill="#fef3c7" stroke="#d97706" strokeWidth="2" strokeDasharray="4 3" />
            <text x="0" y="25" textAnchor="middle" fill="#b45309" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
              ?
            </text>
            <text x="0" y="62" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Pola 5
            </text>
          </g>
        </svg>
      );

    case 'pola_bangun':
      return (
        <svg viewBox="0 0 420 175" className="w-full h-full" role="img" aria-label="Pola Bangun Datar Berulang">
          <rect width="420" height="175" fill="#f8fafc" />
          <text x="210" y="26" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
            Pola Bangun Datar Berulang
          </text>

          {[1, 2, 3, 4, 5, 6].map((pos, idx) => {
            const cx = 42 + idx * 58;
            const kind = idx % 3;
            return (
              <g key={pos}>
                <rect x={cx - 22} y="48" width="44" height="58" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
                {kind === 0 && (
                  <circle cx={cx} cy="77" r="14" fill="#2563eb" stroke="#1e3a8a" strokeWidth="1.5" />
                )}
                {kind === 1 && (
                  <polygon
                    points={`${cx},61 ${cx - 15},90 ${cx + 15},90`}
                    fill="#facc15"
                    stroke="#a16207"
                    strokeWidth="1.5"
                  />
                )}
                {kind === 2 && (
                  <rect x={cx - 13} y="64" width="26" height="26" rx="2" fill="#10b981" stroke="#065f46" strokeWidth="1.5" />
                )}
                <text x={cx} y="124" textAnchor="middle" fill="#475569" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  Ke-{pos}
                </text>
              </g>
            );
          })}

          <text x="386" y="83" textAnchor="middle" fill="#64748b" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
            ...
          </text>
          <text x="210" y="152" textAnchor="middle" fill="#1e40af" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            Urutan: Lingkaran Biru → Segitiga Kuning → Persegi Hijau → (berulang)
          </text>
        </svg>
      );
  }
};

export const QuestionImage: React.FC<QuestionImageProps> = ({
  src,
  diagramType,
  caption,
  alt,
  compact = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src && !diagramType) return null;

  return (
    <figure
      className={`mb-4 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 ${
        compact ? 'max-w-xs' : 'max-w-md'
      }`}
    >
      {diagramType ? (
        <div className="w-full bg-white flex items-center justify-center overflow-hidden p-2">
          {renderMathDiagram(diagramType)}
        </div>
      ) : !hasError && src ? (
        <div className="aspect-[4/3] w-full bg-white flex items-center justify-center overflow-hidden">
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center justify-center p-4 text-center gap-2 text-slate-600">
          <Calculator className="w-8 h-8 text-blue-600" />
          <span className="text-xs font-semibold">{alt}</span>
        </div>
      )}
      {caption && (
        <figcaption className="px-3 py-2 text-[11px] text-slate-600 bg-slate-50 border-t border-slate-200 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
