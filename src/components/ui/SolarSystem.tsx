'use client';

import React from "react";
import { 
  Orbit as OrbitIcon, 
  Heart, 
  Moon, 
  Shield, 
  Zap, 
  Activity, 
  Leaf, 
  Sun, 
  Droplets,
  Flame,
  Dna,
  Users,
  Utensils
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

/**
 * ============================================================================
 * TYPE DEFINITIONS & CUSTOMIZATION CONTRACTS
 * ============================================================================
 */

export interface SolarSystemItem {
  id: string;      
  label: string;   
  type?: string;   
  badge?: string;  
  desc?: string;   
  color: string;   
  svg: React.ReactNode; 
}

export interface OrbitConfig {
  id: string;          
  name: string;        
  radiusClass: string; 
  radiusPx: number;    
  speed: number;       
  items: SolarSystemItem[]; 
}

export interface SolarSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  centerLogo?: string | React.ReactNode;
  centerLogoAlt?: string; 
  orbits?: OrbitConfig[]; 
  isPaused?: boolean;     
  speedMultiplier?: number; 
}

/**
 * ============================================================================
 * DEFAULT ORBITS CONFIGURATION
 * ============================================================================
 */
const DEFAULT_ORBITS: OrbitConfig[] = [
  {
    id: "inner",
    name: "Inner Ring",
    radiusClass: "var(--radius-inner)", 
    radiusPx: 175,
    speed: 20,                          
    items: [
      {
        id: "gut-reset",
        label: "Gut Reset",
        desc: "A complete reset of the microbiome allows the digestive system to heal. This maximizes nutrient absorption and reduces systemic inflammation.",
        color: "#00E5FF",
        svg: <Flame className="w-5 h-5" />,
      },
      {
        id: "deep-sleep",
        label: "Deep Sleep",
        desc: "Deep sleep is the critical window where cellular repair and detoxification naturally occur. Optimizing this pillar is foundational for long-term vitality.",
        color: "#B388FF",
        svg: <Moon className="w-5 h-5" />,
      },
      {
        id: "immunity",
        label: "Immunity",
        desc: "A robust immune system is your body's first line of defense. We strengthen it through targeted nutrition and lifestyle adjustments.",
        color: "#FF007F",
        svg: <Shield className="w-5 h-5" />,
      },
      {
        id: "artery-cleanse",
        label: "Artery Cleanse",
        desc: "Clearing arterial plaque improves cardiovascular health and blood flow. This ensures oxygen and nutrients reach every cell efficiently.",
        color: "#FFD700",
        svg: <Heart className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "mid",
    name: "Middle Ring",
    radiusClass: "var(--radius-mid)",
    radiusPx: 285,
    speed: 32,
    items: [
      {
        id: "regular-exercise",
        label: "Regular Exercise & Yoga",
        desc: "Movement is medicine. Regular physical activity enhances circulation, builds resilience, and promotes mental clarity.",
        color: "#00FF88",
        svg: <Activity className="w-5 h-5" />,
      },
      {
        id: "nature-connect",
        label: "Nature Connect",
        desc: "Reconnecting with nature grounds the nervous system. It lowers stress markers and synchronizes our circadian rhythms.",
        color: "#00E5FF",
        svg: <Leaf className="w-5 h-5" />,
      },
      {
        id: "social-connect",
        label: "Social Connect",
        desc: "Meaningful relationships and community support are vital for emotional well-being. They provide a sense of purpose and belonging.",
        color: "#B388FF",
        svg: <Users className="w-5 h-5" />,
      },
      {
        id: "balanced-nutrition",
        label: "Balanced Nutrition",
        desc: "Providing the body with high-quality, whole foods fuels metabolic processes. It creates a stable foundation for lasting energy.",
        color: "#FF007F",
        svg: <Utensils className="w-5 h-5" />,
      },
    ],
  },
  {
    id: "outer",
    name: "Outer Ring",
    radiusClass: "var(--radius-outer)",
    radiusPx: 395,
    speed: 48,
    items: [
      {
        id: "deep-detox",
        label: "Deep Detox",
        desc: "Eliminating accumulated toxins at a cellular level restores organ function. This process rejuvenates the body from the inside out.",
        color: "#FFD700",
        svg: <Droplets className="w-5 h-5" />,
      },
      {
        id: "alkaline-chemistry",
        label: "Alkaline Chemistry",
        desc: "Maintaining optimal pH balance creates an environment where disease struggles to thrive. It supports bone health and metabolic efficiency.",
        color: "#00FF88",
        svg: <Sun className="w-5 h-5" />,
      },
      {
        id: "cellular-vitality",
        label: "Cellular Vitality",
        desc: "Targeting mitochondrial health boosts energy production at the source. This combats fatigue and slows the aging process.",
        color: "#00E5FF",
        svg: <Dna className="w-5 h-5" />,
      },
      {
        id: "direct-charge",
        label: "Direct Charge",
        desc: "Harnessing natural energy sources revitalizes the body's electrical systems. This provides an immediate boost to stamina and focus.",
        color: "#B388FF",
        svg: <Zap className="w-5 h-5" />,
      },
    ],
  },
];

interface OrbitNodeProps {
  item: SolarSystemItem;
  orbit: OrbitConfig;
  idx: number;
  totalItems: number;
  isPaused: boolean;
  speedMultiplier: number;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  onClick: () => void;
}

const OrbitNode = React.memo(({ item, orbit, idx, totalItems, isPaused, speedMultiplier, hoveredId, setHoveredId, onClick }: OrbitNodeProps) => {
  const isHovered = hoveredId === item.id;
  const delayValue = -(orbit.speed / totalItems) * idx;
  const durationValue = orbit.speed / speedMultiplier;

  return (
    <div
      className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none animate-custom-orbit"
      style={{
        animationDelay: `${delayValue}s`,
        animationDuration: `${durationValue}s`,
        animationPlayState: isPaused ? "paused" : "running",
        "--orbit-radius": orbit.radiusClass,
        "--orbit-duration": `${durationValue}s`,
        "--orbit-play-state": isPaused ? "paused" : "running",
        "--hover-color": item.color,
        zIndex: isHovered ? 30 : 10,
        transformStyle: "preserve-3d", 
      } as React.CSSProperties}
    >
      <div
        className="absolute right-0 top-1/2 h-[1.5px] origin-right -translate-y-1/2 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          width: orbit.radiusClass,
          opacity: isHovered ? 1 : 0,
          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(20,43,35,0.15) 20%, ${item.color} 80%, ${item.color} 100%)`,
          boxShadow: `0 0 8px ${item.color}, 0 0 16px ${item.color}40`,
        }}
      />
      <div
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
        onClick={onClick}
        className="orbit-logo-card animate-custom-billboard"
        style={{
          animationDelay: `${delayValue}s`,
          animationDuration: `${durationValue}s`,
          animationPlayState: isPaused ? "paused" : "running",
          borderColor: isHovered ? item.color : undefined,
          boxShadow: isHovered 
            ? `0 0 20px rgba(0, 0, 0, 0.1), 0 0 15px ${item.color}35`
            : undefined,
          scale: isHovered ? 1.05 : 1, 
          "--orbit-duration": `${durationValue}s`,
          "--orbit-play-state": isPaused ? "paused" : "running",
        } as React.CSSProperties}
      >
        <div 
          className="transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            color: item.color,
          }}
        >
          {item.svg}
        </div>
        <span className="text-[11px] md:text-[13px] tracking-tight">{item.label}</span>
      </div>
    </div>
  );
});
OrbitNode.displayName = "OrbitNode";

export const SolarSystem = React.forwardRef<HTMLDivElement, SolarSystemProps>(
  (
    {
      centerLogo,             
      centerLogoAlt = "Core Engine",
      orbits = DEFAULT_ORBITS, 
      isPaused = false,        
      speedMultiplier = 1,    
      className,
      ...props
    },
    ref
  ) => {
    const [hoveredId, setHoveredId] = React.useState<string | null>(null);
    const [selectedNode, setSelectedNode] = React.useState<SolarSystemItem | null>(null);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const effectivelyPaused = isPaused || hoveredId !== null || isDialogOpen;

    // Cosmic dust particle animations coordinates
    const dustItems = [
      { delay: "-4s", radius: "165px", color: "#FFD700" },
      { delay: "-11s", radius: "260px", color: "#00E5FF" },
      { delay: "-19s", radius: "340px", color: "#B388FF" },
      { delay: "-28s", radius: "395px", color: "#FF007F" },
      { delay: "-7s", radius: "200px", color: "#00FF88" },
      { delay: "-15s", radius: "365px", color: "#00E5FF" },
      { delay: "-23s", radius: "430px", color: "#FFD700" },
    ];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex items-center justify-center w-full max-w-[940px] h-[320px] md:h-[450px] perspective-distant select-none overflow-visible",
          className
        )}
        {...props}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          /* CUSTOMIZE ORBIT DIAMETER SIZES HERE */
          :root {
            --radius-inner: 175px;
            --radius-mid: 285px;
            --radius-outer: 395px;
          }

          /* Tablet Responsive Adjustments */
          @media (max-width: 768px) {
            :root {
              --radius-inner: 150px;
              --radius-mid: 240px;
              --radius-outer: 330px;
            }
          }

          /* Mobile Responsive Adjustments */
          @media (max-width: 480px) {
            :root {
              --radius-inner: 130px;
              --radius-mid: 210px;
              --radius-outer: 290px;
            }
          }

          /* Orbit revolutions */
          @keyframes custom-orbitMove {
            0% {
              transform: translate(-50%, -50%) rotateZ(0deg) translateX(var(--orbit-radius));
            }
            100% {
              transform: translate(-50%, -50%) rotateZ(-360deg) translateX(var(--orbit-radius));
            }
          }

          /* Billboard counter-rotation (cancels the 65deg X-tilt and 10deg Y-tilt) */
          @keyframes custom-billboardCancel {
            0% {
              transform: translate(-50%, -50%) rotateZ(0deg) rotateY(10deg) rotateX(-65deg);
            }
            100% {
              transform: translate(-50%, -50%) rotateZ(360deg) rotateY(10deg) rotateX(-65deg);
            }
          }

          /* Sun glow pulsations */
          @keyframes custom-sun-pulse {
            0% { transform: scale(0.9); opacity: 0.7; }
            100% { transform: scale(1.1); opacity: 1; }
          }

          /* Sun ring accessory speeds */
          @keyframes custom-spin-clockwise {
            0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(360deg); }
          }
          @keyframes custom-spin-counter {
            0% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(0deg); }
            100% { transform: rotateX(65deg) rotateY(-10deg) rotateZ(-360deg); }
          }

          .animate-custom-orbit {
            animation: custom-orbitMove var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
            will-change: transform;
          }
          .animate-custom-billboard {
            animation: custom-billboardCancel var(--orbit-duration) linear infinite;
            animation-play-state: var(--orbit-play-state);
            will-change: transform;
          }
          .animate-custom-sun-pulse {
            animation: custom-sun-pulse 4s ease-in-out infinite alternate;
            will-change: transform, opacity;
          }
          .animate-custom-spin-cw {
            animation: custom-spin-clockwise 20s linear infinite;
            will-change: transform;
          }
          .animate-custom-spin-ccw {
            animation: custom-spin-counter 30s linear infinite;
            will-change: transform;
          }

          /* Cosmic RGB Color Cycling */
          @keyframes cosmic-rgb {
            0% { background-color: #00E5FF; }
            20% { background-color: #B388FF; }
            40% { background-color: #FF007F; }
            60% { background-color: #FFD700; }
            80% { background-color: #00FF88; }
            100% { background-color: #00E5FF; }
          }
          .animate-cosmic-rgb {
            animation: cosmic-rgb 15s linear infinite;
          }

          /* Planet logo cards base styles */
          .orbit-logo-card {
            position: absolute;
            left: 50%;
            top: 50%;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0.45rem 0.95rem;
            background: rgba(10, 10, 25, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 100px;
            font-weight: 600;
            color: #ffffff;
            white-space: nowrap;
            user-select: none;
            cursor: pointer;
            pointer-events: auto;
            transition: border-color 0.3s, color 0.3s, background 0.3s, box-shadow 0.3s, scale 0.3s;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05);
            will-change: transform, box-shadow, border-color, scale;
          }
        `}} />

        {/* Tiltable Orbit Container (handles 3D tilt coordinates) */}
        <div 
          className="absolute w-[360px] h-[360px] md:w-[940px] md:h-[940px] flex items-center justify-center"
          style={{
            transform: "rotateX(65deg) rotateY(-10deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* CENTRAL SUN CORE ENGINE */}
          <div 
            className="absolute w-[160px] h-[160px] md:w-[220px] md:h-[220px] flex items-center justify-center z-20 pointer-events-none"
            style={{
              transform: "rotateY(10deg) rotateX(-65deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glowing aura */}
            <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full filter blur-md animate-custom-sun-pulse z-10 bg-[#FFD700]/15" />
            
            {/* Solar SVG Background - Animated Cosmic Colors */}
            <div 
              className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] z-10 pointer-events-none opacity-40 animate-cosmic-rgb"
              style={{
                WebkitMaskImage: 'url(/images/solar.svg)',
                maskImage: 'url(/images/solar.svg)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />

            {/* Sun Core Logo Render */}
            {centerLogo ? (
              typeof centerLogo === "string" ? (
                <Image
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full  z-20  relative object-contain p-2"
                  src={centerLogo}
                  alt={centerLogoAlt || "Center Logo"}
                  width={140}
                  height={140}
                />
              ) : (
                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#FFD700]/40 shadow-lg z-20 bg-[#05050A] flex items-center justify-center p-2 relative">
                  {centerLogo}
                </div>
              )
            ) : (
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-[#FFD700]/40 shadow-lg z-20 bg-[#05050A] flex items-center justify-center p-2 relative">
                <OrbitIcon className="w-12 h-12 text-[#FFD700] animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            )}

            {/* Sun core dash rings */}
            <div className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border border-dashed border-[#00E5FF]/20 animate-custom-spin-cw pointer-events-none" />
            <div className="absolute w-[220px] h-[220px] md:w-[310px] md:h-[310px] rounded-full border border-dashed border-[#B388FF]/15 animate-custom-spin-ccw pointer-events-none" />
          </div>

          {/* Cosmic Dust Particles */}
          {dustItems.map((dust, idx) => (
            <div
              key={idx}
              className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full opacity-40 pointer-events-none animate-custom-orbit"
              style={{
                background: dust.color,
                boxShadow: `0 0 6px ${dust.color}`,
                animationDelay: dust.delay,
                animationPlayState: effectivelyPaused ? "paused" : "running",
                animationDuration: `${24 / speedMultiplier}s`,
                "--orbit-radius": dust.radius,
                "--orbit-duration": `${24 / speedMultiplier}s`,
                "--orbit-play-state": effectivelyPaused ? "paused" : "running",
              } as React.CSSProperties}
            />
          ))}

          {/* ORBITS AND PLANET NODES RENDERING */}
          {orbits.map((orbit) => {
            return (
              <React.Fragment key={orbit.id}>
                {/* Visual Dashed Ring Line representing this orbit level */}
                <div
                  className="absolute rounded-full border border-dashed border-primary/20 pointer-events-none"
                  style={{
                    width: `calc(2 * ${orbit.radiusClass})`,
                    height: `calc(2 * ${orbit.radiusClass})`,
                    "--orbit-radius": orbit.radiusClass,
                  } as React.CSSProperties}
                />

                {/* Orbit Items / Planet Cards */}
                {orbit.items.map((item, idx, arr) => (
                  <OrbitNode
                    key={item.id}
                    item={item}
                    orbit={orbit}
                    idx={idx}
                    totalItems={arr.length}
                    isPaused={effectivelyPaused}
                    speedMultiplier={speedMultiplier}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                    onClick={() => {
                      setSelectedNode(item);
                      setIsDialogOpen(true);
                    }}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-background/95 backdrop-blur-xl border border-foreground/10 text-foreground rounded-xl max-w-md">
            <DialogHeader className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center text-secondary mb-2">
                {selectedNode?.svg}
              </div>
              <DialogTitle className="text-3xl font-bold font-bricolage">{selectedNode?.label}</DialogTitle>
              <DialogDescription className="text-lg text-foreground/80 leading-relaxed">
                {selectedNode?.desc}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);

SolarSystem.displayName = "SolarSystem";
