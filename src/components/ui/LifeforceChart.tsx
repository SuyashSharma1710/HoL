"use client";

import { motion } from "framer-motion";

const data = [
  { age: 0, l: 100, c: 100 },
  { age: 10, l: 95, c: 98 },
  { age: 20, l: 90, c: 95 },
  { age: 30, l: 85, c: 90 },
  { age: 40, l: 75, c: 88 },
  { age: 50, l: 60, c: 92 },
  { age: 60, l: 45, c: 95 },
  { age: 70, l: 32, c: 92 },
  { age: 80, l: 25, c: 88 },
  { age: 90, l: 20, c: 85 },
];

// Helper to generate a smooth curve
function catmullRom2bezier(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i === 0 ? points[0] : points[i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i + 2 < points.length ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function LifeforceChart() {
  const width = 1000;
  const height = 600;
  const margin = { top: 60, right: 60, bottom: 80, left: 80 };
  
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const getX = (age: number) => margin.left + (age / 90) * innerWidth;
  const getY = (val: number) => margin.top + ((100 - val) / 100) * innerHeight;

  const lPoints = data.map((d) => ({ x: getX(d.age), y: getY(d.l), val: d.l }));
  const cPoints = data.map((d) => ({ x: getX(d.age), y: getY(d.c), val: d.c }));

  const lifeforceColor = "#b69c5f"; // Accent Gold
  const cellularColor = "#607860"; // Secondary Sage Green
  const primaryColor = "#142b23"; // Dark Green
  const gridColor = "#607860"; // Secondary for grid

  const lPath = catmullRom2bezier(lPoints);
  const cPath = catmullRom2bezier(cPoints);

  return (
    <div className="w-full bg-background/40 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 border border-secondary/20">
      <div className="text-center mb-4 sm:mb-8">
        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-primary tracking-tight">
          LIFEFORCE & <span className="text-secondary italic">CELLULAR CHARGE</span> OVER AGE
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ backgroundColor: lifeforceColor }} />
            <span className="text-primary/80">Lifeforce (Natural Decline)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded-full" style={{ backgroundColor: cellularColor }} />
            <span className="text-primary/80">Cellular Charge (With Healthy Lifestyle)</span>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-5/3 sm:aspect-4/3 lg:aspect-5/3">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible font-sans">
          
          {/* Grid Lines */}
          {[0, 20, 40, 60, 80, 100].map((tick) => {
            const y = getY(tick);
            return (
              <g key={`grid-y-${tick}`}>
                <line 
                  x1={margin.left} 
                  y1={y} 
                  x2={width - margin.right} 
                  y2={y} 
                  stroke={gridColor}
                  strokeOpacity="0.15" 
                  strokeDasharray="4 4" 
                  strokeWidth="1.5"
                />
                <text 
                  x={margin.left - 15} 
                  y={y} 
                  fill={primaryColor}
                  fillOpacity="0.7" 
                  fontSize="16" 
                  textAnchor="end"
                  alignmentBaseline="middle"
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((tick) => {
            const x = getX(tick);
            return (
              <text 
                key={`label-x-${tick}`}
                x={x} 
                y={height - margin.bottom + 30} 
                fill={primaryColor}
                fillOpacity="0.7" 
                fontSize="16" 
                textAnchor="middle"
              >
                {tick}
              </text>
            );
          })}

          {/* Axes */}
          <line 
            x1={margin.left} y1={height - margin.bottom} 
            x2={width - margin.right + 20} y2={height - margin.bottom} 
            stroke={primaryColor} strokeWidth="2.5" 
          />
          <polygon points={`${width - margin.right + 25},${height - margin.bottom} ${width - margin.right + 15},${height - margin.bottom - 5} ${width - margin.right + 15},${height - margin.bottom + 5}`} fill={primaryColor} />
          
          <line 
            x1={margin.left} y1={height - margin.bottom} 
            x2={margin.left} y2={margin.top - 20} 
            stroke={primaryColor} strokeWidth="2.5" 
          />
          <polygon points={`${margin.left},${margin.top - 25} ${margin.left - 5},${margin.top - 15} ${margin.left + 5},${margin.top - 15}`} fill={primaryColor} />

          {/* Axis Labels */}
          <text 
            x={width / 2} 
            y={height - margin.bottom + 70} 
            fill={primaryColor} 
            fontSize="20" 
            fontWeight="bold" 
            textAnchor="middle"
          >
            Age (Years)
          </text>
          
          <text 
            transform={`translate(${margin.left - 60}, ${height / 2}) rotate(-90)`}
            fill={primaryColor} 
            fontSize="20" 
            fontWeight="bold" 
            textAnchor="middle"
          >
            Relative Energy / Charge (%)
          </text>

          {/* Lifeforce Line */}
          <motion.path
            d={lPath}
            fill="none"
            stroke={lifeforceColor}
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Cellular Charge Line */}
          <motion.path
            d={cPath}
            fill="none"
            stroke={cellularColor}
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
          />

          {/* Data Points */}
          {lPoints.map((p, i) => (
            <g key={`l-point-${i}`}>
              <motion.circle 
                cx={p.x} cy={p.y} r="6" 
                fill={lifeforceColor} 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.5 + (i * 0.1), type: "spring", stiffness: 300, damping: 15 }}
              />
              <motion.text
                x={p.x} y={p.y + 28}
                fill={lifeforceColor}
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.6 + (i * 0.1) }}
              >
                {p.val}%
              </motion.text>
            </g>
          ))}

          {cPoints.map((p, i) => (
            <g key={`c-point-${i}`}>
              <motion.circle 
                cx={p.x} cy={p.y} r="6" 
                fill={cellularColor} 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 2.3 + (i * 0.1), type: "spring", stiffness: 300, damping: 15 }}
              />
              <motion.text
                x={p.x} y={p.y - 18}
                fill={cellularColor}
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 2.4 + (i * 0.1) }}
              >
                {p.val}%
              </motion.text>
            </g>
          ))}

          {/* Intervention Annotation */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 3.5, duration: 0.8, type: "spring" }}
          >
            <line 
              x1={getX(40)} y1={getY(88)} 
              x2={getX(40)} y2={height - margin.bottom} 
              stroke={cellularColor} 
              strokeDasharray="6 6"
              strokeWidth="2.5"
            />
            {/* Arrow on top of the dashed line */}
            <polygon points={`${getX(40)},${getY(88) + 18} ${getX(40) - 8},${getY(88) + 30} ${getX(40) + 8},${getY(88) + 30}`} fill={cellularColor} />
            
            <rect 
              x={getX(40) - 100} 
              y={height - margin.bottom - 55} 
              width="200" 
              height="50" 
              rx="8" 
              fill="#e9e0cf" 
              stroke={cellularColor} 
              strokeWidth="2" 
            />
            <text 
              x={getX(40)} 
              y={height - margin.bottom - 34} 
              fill={cellularColor} 
              fontSize="15" 
              fontWeight="bold"
              textAnchor="middle"
            >
              Start of
            </text>
            <text 
              x={getX(40)} 
              y={height - margin.bottom - 15} 
              fill={cellularColor} 
              fontSize="15" 
              fontWeight="bold"
              textAnchor="middle"
            >
              Lifestyle Intervention
            </text>
          </motion.g>

        </svg>
      </div>
    </div>
  );
}
