import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { useCountUp } from "@/hooks/useCountUp";
import { profile, skills, skillMeta, DEFAULT_SKILL_META, type SkillRarity } from "@/data/portfolio";
import {
  Box, Blocks, Component, Hash, Code2, FileCode2, Gamepad2, Boxes,
  Smartphone, Headset, Users, Monitor, Film, Cog, Atom, Zap,
  Gauge, Database, MousePointer2, GitBranch, GitCompare, TrendingUp, Bug,
  Wrench, Terminal,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  box: Box,
  blocks: Blocks,
  component: Component,
  hash: Hash,
  code2: Code2,
  "file-code2": FileCode2,
  gamepad2: Gamepad2,
  boxes: Boxes,
  smartphone: Smartphone,
  headset: Headset,
  users: Users,
  monitor: Monitor,
  film: Film,
  cog: Cog,
  atom: Atom,
  zap: Zap,
  gauge: Gauge,
  database: Database,
  "mouse-pointer2": MousePointer2,
  "git-branch": GitBranch,
  "git-compare": GitCompare,
  "trending-up": TrendingUp,
  bug: Bug,
};

/* ---------- category theme tokens ---------- */
type CategoryTheme = {
  color: string; // hsl string used in SVG / text
  textClass: string;
  icon: LucideIcon;
  borderClass: string; // border color on the anchor node
  glowClass: string;   // box-shadow glow on the anchor node
  labelBg: string;     // badge background on the anchor label
};
const categoryThemes: Record<string, CategoryTheme> = {
  "Game Engines":      { color: "hsl(168 100% 52%)",  textClass: "text-primary",   icon: Gamepad2, borderClass: "border-primary",   glowClass: "shadow-[0_0_22px_hsl(168_100%_52%/_0.55)]",  labelBg: "bg-primary/15" },
  "Programming":       { color: "hsl(320 95% 60%)",   textClass: "text-accent",    icon: Code2,    borderClass: "border-accent",    glowClass: "shadow-[0_0_22px_hsl(320_95%_60%/_0.55)]",   labelBg: "bg-accent/15" },
  "Game Development":  { color: "hsl(280 90% 65%)",   textClass: "text-secondary", icon: Cog,      borderClass: "border-secondary", glowClass: "shadow-[0_0_22px_hsl(280_90%_65%/_0.55)]",  labelBg: "bg-secondary/15" },
  "Tools & Workflow":  { color: "hsl(210 65% 60%)",   textClass: "text-foreground/80", icon: Wrench, borderClass: "border-[hsl(210_65%_60%)]", glowClass: "shadow-[0_0_22px_hsl(210_65%_60%/_0.45)]", labelBg: "bg-[hsl(210_65%_60%)]/15" },
};

const rarityStyles: Record<SkillRarity, { node: string; label: string }> = {
  legendary: {
    node: "h-14 w-14 border-primary shadow-[0_0_18px_hsl(168_100%_52%/_0.6)]",
    label: "text-sm font-semibold text-primary",
  },
  epic: {
    node: "h-11 w-11 border-secondary shadow-[0_0_12px_hsl(280_90%_65%/_0.5)]",
    label: "text-xs font-medium text-foreground/90",
  },
  rare: {
    node: "h-9 w-9 border-border",
    label: "text-[11px] text-muted-foreground",
  },
};

/* ---------- desktop constellation geometry ----------
 * Two concentric orbits around a central core: category anchors on a
 * small inner ring, skill satellites alternating between an outer and an
 * inner orbit for generous spacing. One angular arc per category with a
 * gap between arcs. Coordinates are in a 100 x 70 viewBox (percentages).
 */
const CORE = { x: 50, y: 35 };
const VIEW_H = 70;
const OUTER = { rx: 34, ry: 26 };  // outer satellite orbit
const INNER = { rx: 24, ry: 17 };  // inner satellite orbit
const ANCHOR = { rx: 13, ry: 9 };  // category anchor ring

const onEllipse = (deg: number, rx: number, ry: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: CORE.x + rx * Math.sin(rad), y: CORE.y - ry * Math.cos(rad) };
};

type Line = { x1: number; y1: number; x2: number; y2: number; color: string; delay: number };
type NodeEntry = {
  name: string; icon: string; category: string; x: number; y: number;
  rarity: SkillRarity; level: number; note: string; delay: number;
  isCore?: boolean; isCategory?: boolean; labelAbove?: boolean;
};

function buildConstellation() {
  const lines: Line[] = [];
  const nodes: NodeEntry[] = [];

  nodes.push({
    name: profile.name.split(" ")[0], icon: "gamepad2", category: "core",
    x: CORE.x, y: CORE.y, rarity: "legendary", level: 100,
    note: profile.title, delay: 0, isCore: true,
  });

  // Walk clockwise around the orbit, category by category, leaving one
  // empty slot between categories as a gap.
  const slotCount = skills.reduce((n, c) => n + c.items.length, 0) + skills.length;
  const step = 360 / slotCount;
  let angle = -90; // start at the top of the orbit

  skills.forEach((cat, ci) => {
    const theme = categoryThemes[cat.category];
    const catDelay = 300 + ci * 150;

    // first pass: compute this category's item angles
    const itemAngles = cat.items.map((_, ii) => angle + step * ii);
    const center = itemAngles.reduce((a, b) => a + b, 0) / itemAngles.length;
    const anchor = onEllipse(center, ANCHOR.rx, ANCHOR.ry);

    lines.push({ x1: CORE.x, y1: CORE.y, x2: anchor.x, y2: anchor.y, color: theme.color, delay: catDelay });
    nodes.push({
      name: cat.category, icon: "cog", category: cat.category,
      x: anchor.x, y: anchor.y, rarity: "epic", level: 0,
      note: `${cat.items.length} skills`, delay: catDelay + 200, isCategory: true,
    });

    cat.items.forEach((item, ii) => {
      const meta = skillMeta[item.name] ?? DEFAULT_SKILL_META;
      const delay = catDelay + 500 + ii * 80;
      // alternate rings so angular neighbours get vertical separation too
      const ring = ii % 2 === 0 ? OUTER : INNER;
      const { x, y } = onEllipse(itemAngles[ii], ring.rx, ring.ry);
      // labels point away from the center — above on the top half, below on the bottom
      const labelAbove = y < CORE.y - (ii % 2 === 0 ? 6 : 0);
      lines.push({ x1: anchor.x, y1: anchor.y, x2: x, y2: y, color: theme.color, delay });
      nodes.push({ name: item.name, icon: item.icon, category: cat.category, x, y, ...meta, delay, labelAbove });
    });

    angle += step * (cat.items.length + 1);
  });

  return { lines, nodes };
}

const { lines, nodes } = buildConstellation();

/* ---------- starfield (deterministic, faint) ---------- */
const stars = Array.from({ length: 28 }, (_, i) => ({
  x: ((i * 37.7) % 100),
  y: ((i * 53.3) % VIEW_H),
  delay: (i * 337) % 7000,
  r: 0.18 + ((i * 7) % 5) * 0.08,
}));

/* ---------- scroll-trigger ---------- */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setInView(true); return; }
    const obs = new IntersectionObserver(
      (es) => { for (const e of es) if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* =================== page =================== */
const Skills = () => (
  <Layout>
    <section className="container pt-12 sm:pt-16 pb-10">
      <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-5 animate-fade-up">
        Stat Sheet
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold animate-fade-up" style={{ animationDelay: "80ms" }}>
        Tech <span className="text-gradient">Constellation</span>
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "160ms" }}>
        Tools, languages, and disciplines I use to ship games — mapped like a skill tree.
      </p>
    </section>

    <CharacterCard />

    <div className="hidden lg:block"><Constellation /></div>
    <div className="lg:hidden"><MobileBranches /></div>

    <Legend />
    <TerminalFooter />
  </Layout>
);

/* =================== hero: character card =================== */
const attributeGauges = [
  { label: "ENGINES", value: 85 },
  { label: "CODE", value: 84 },
  { label: "GAMEPLAY", value: 87 },
];

function CharacterCard() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="container pb-14">
      <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <div className="relative shrink-0">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-primary opacity-20 blur-xl" />
          <div className="relative h-24 w-24 rounded-2xl bg-gradient-primary flex items-center justify-center">
            <Gamepad2 className="h-11 w-11 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 glass rounded-full px-2.5 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] font-mono">ONLINE</span>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="text-sm text-primary font-mono mt-1">{profile.title}</p>
          <p className="text-xs text-muted-foreground font-mono mt-2">XP: 2.5+ YRS · TITLES SHIPPED: 5</p>
        </div>
        <div className="flex gap-6 sm:ml-auto">
          {attributeGauges.map((g, i) => (
            <RingGauge key={g.label} label={g.label} value={g.value} start={inView} delay={400 + i * 200} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RingGauge({ label, value, start, delay }: { label: string; value: number; start: boolean; delay: number }) {
  const R = 30;
  const C = 2 * Math.PI * R;
  const display = useCountUp(value, start, 1300);
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative h-20 w-20">
        <svg width="80" height="80" viewBox="0 0 80 80" className="-rotate-90">
          <circle cx="40" cy="40" r={R} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
          <circle
            cx="40" cy="40" r={R} fill="none"
            stroke="url(#gaugeGrad)" strokeWidth="6" strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={start ? C * (1 - value / 100) : C}
            className="gauge-ring"
            style={{ transitionDelay: `${delay}ms` }}
          />
          <defs>
            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(168 100% 52%)" />
              <stop offset="100%" stopColor="hsl(280 90% 65%)" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">{display}</span>
      </div>
      <p className="text-[9px] font-mono tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  );
}

/* =================== desktop constellation =================== */
function Constellation() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <div ref={ref} className="container pb-10">
      <div className="relative glass rounded-3xl overflow-hidden" style={{ aspectRatio: "100 / 70" }}>
        {/* starfield + connection lines */}
        <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="hsl(168 100% 90%)"
              className="animate-twinkle" style={{ animationDelay: `${s.delay}ms` }} />
          ))}
          {lines.map((l, i) => {
            const length = Math.hypot(l.x2 - l.x1, l.y2 - l.y1);
            return (
              <line
                key={i}
                x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke={l.color} strokeOpacity="0.45" strokeWidth="0.18"
                strokeDasharray={length}
                strokeDashoffset={inView ? 0 : length}
                className="constellation-line"
                style={{ transitionDelay: `${l.delay}ms` }}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {/* nodes */}
        {nodes.map((n) => {
          const Icon = iconMap[n.icon] ?? (n.isCategory ? (categoryThemes[n.category]?.icon ?? Cog) : Cog);
          const theme = categoryThemes[n.category];
          return (
            <div
              key={n.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group/nod transition-all duration-500 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
              style={{
                left: `${n.x}%`,
                top: `${n.y / VIEW_H * 100}%`,
                transitionDelay: `${n.delay}ms`,
              }}
            >
              <div className={`rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover/nod:scale-110 ${
                n.isCore
                  ? "border-primary shadow-[0_0_28px_hsl(168_100%_52%/_0.7)] animate-pulse-glow bg-card"
                  : n.isCategory
                    ? `h-16 w-16 glass ${theme?.borderClass ?? "border-primary/70"} ${theme?.glowClass ?? ""}`
                    : rarityStyles[n.rarity].node + " bg-background/80 backdrop-blur-sm"
              }`}
                style={n.isCore ? { height: 72, width: 72 } : undefined}
              >
                <Icon className={`${n.isCore ? "h-8 w-8" : n.isCategory ? "h-6 w-6" : "h-4 w-4"} text-primary`} />
              </div>
              <p className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center font-mono px-1.5 py-0.5 rounded ${
                n.isCore ? "bg-background/70 backdrop-blur-sm" : n.isCategory ? `border ${theme?.borderClass ?? ""} ${theme?.labelBg ?? ""} backdrop-blur-sm` : "bg-background/70 backdrop-blur-sm"
              } ${
                n.labelAbove ? "bottom-full mb-1.5" : "top-full mt-1.5"
              } ${
                n.isCore ? "text-sm font-bold text-foreground" : n.isCategory ? "text-xs font-bold " + (theme?.textClass ?? "") : rarityStyles[n.rarity].label
              }`}>
                {n.name}
              </p>

              {/* tooltip */}
              {!n.isCore && !n.isCategory && (
                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/nod:opacity-100 translate-y-1 group-hover/nod:translate-y-0 transition-all duration-200 z-20">
                  <div className="glass rounded-lg px-3 py-2 whitespace-nowrap border border-primary/40">
                    <p className="text-xs font-semibold text-foreground">{n.name}</p>
                    <p className="text-[10px] text-primary font-mono">LV.{Math.round(n.level / 10)} · {n.level}%</p>
                    <p className="text-[10px] text-muted-foreground">{n.note}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =================== mobile: connected branches =================== */
function MobileBranches() {
  return (
    <section className="container pb-10 space-y-8">
      {skills.map((cat, ci) => {
        const theme = categoryThemes[cat.category];
        const CatIcon = theme?.icon ?? Cog;
        return (
          <div key={cat.category} className="relative">
            {/* category node */}
            <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: `${ci * 100}ms` }}>
              <div className={`h-11 w-11 rounded-full glass border-2 flex items-center justify-center shrink-0 ${theme?.borderClass ?? "border-primary/70"} ${theme?.glowClass ?? ""}`}>
                <CatIcon className={`h-5 w-5 ${theme?.textClass ?? "text-primary"}`} />
              </div>
              <h2 className={`text-lg font-bold ${theme?.textClass ?? ""}`}>{cat.category}</h2>
            </div>
            {/* rail + skills */}
            <div className="ml-[21px] mt-3 pl-6 space-y-3 border-l" style={{ borderColor: theme?.color }}>
              {cat.items.map((item, ii) => {
                const meta = skillMeta[item.name] ?? DEFAULT_SKILL_META;
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.name} className="relative animate-fade-up flex items-center gap-3" style={{ animationDelay: `${ci * 100 + 150 + ii * 60}ms` }}>
                    {/* connector stub */}
                    <span className="absolute -left-6 top-1/2 h-px w-5" style={{ background: theme?.color }} aria-hidden />
                    <div className={`rounded-full glass border-2 flex items-center justify-center shrink-0 ${rarityStyles[meta.rarity].node}`}>
                      {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={rarityStyles[meta.rarity].label}>{item.name}</p>
                      <div className="mt-1 h-1 rounded-full bg-muted overflow-hidden max-w-[180px]">
                        <div
                          className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                          style={{ width: `${meta.level}%`, transitionDelay: `${ci * 100 + 250 + ii * 60}ms` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* =================== legend =================== */
function Legend() {
  return (
    <div className="container pb-8">
      <div className="animate-fade-up flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono text-muted-foreground" style={{ animationDelay: "600ms" }}>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-primary shadow-[0_0_8px_hsl(168_100%_52%/_0.7)]" /> LEGENDARY
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full border-2 border-secondary shadow-[0_0_6px_hsl(280_90%_65%/_0.6)]" /> EPIC
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full border-2 border-border" /> RARE
        </span>
      </div>
    </div>
  );
}

/* =================== terminal footer =================== */
function TerminalFooter() {
  return (
    <div className="container pb-20">
      <p className="animate-fade-up font-mono text-xs text-muted-foreground text-center" style={{ animationDelay: "800ms" }}>
        <Terminal className="inline h-3.5 w-3.5 mr-2 text-primary" />
        <span className="text-primary">&gt;</span> player.stats --synced <span className="text-primary">✓</span> all skill data up to date
        <span className="animate-blink ml-1 text-primary">▌</span>
      </p>
    </div>
  );
}

export default Skills;
