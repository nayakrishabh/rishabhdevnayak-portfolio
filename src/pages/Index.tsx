import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import { profile, projects, skills } from "@/data/portfolio";
import { ArrowRight, Download, ImageIcon, Cpu, Monitor, Gamepad2, Smartphone, Headset,
  Box, Blocks, Component, Hash, Code2, FileCode2, Boxes,
  Film, Cog, Atom, Zap, Gauge, Database, MousePointer2, Users,
  GitBranch, GitCompare, TrendingUp, Bug,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  box: Box, blocks: Blocks, component: Component,
  hash: Hash, code2: Code2, "file-code2": FileCode2, gamepad2: Gamepad2, boxes: Boxes,
  smartphone: Smartphone, headset: Headset, users: Users, monitor: Monitor,
  film: Film, cog: Cog, atom: Atom, zap: Zap,
  gauge: Gauge, database: Database, "mouse-pointer2": MousePointer2,
  "git-branch": GitBranch, "git-compare": GitCompare, "trending-up": TrendingUp, bug: Bug,
};

const stats = [
  { value: 5, suffix: "+", label: "PROJECTS SHIPPED" },
  { value: 3, suffix: "", label: "GAME ENGINES" },
  { value: 4, suffix: "", label: "PLATFORMS" },
];

const Index = () => {
  // trigger hero-dependent animations after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <Layout>
      {/* Hero */}
      <section className="container pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="lg:col-span-7">
            <p className="animate-fade-up font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-5">
              {profile.title} · {profile.location}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              <span className="inline-block animate-fade-up" style={{ animationDelay: "80ms" }}>
                {profile.name.split(" ")[0]}{" "}
                <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
              </span>
              <br />
              <span className="inline-block animate-fade-up text-muted-foreground" style={{ animationDelay: "160ms" }}>builds games.</span>{" "}
              <span className="inline-block animate-fade-up text-gradient" style={{ animationDelay: "240ms" }}>ships experiences.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed" style={{ animationDelay: "320ms" }}>
              {profile.summary}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {stats.map((s, i) => (
                <StatCard key={s.label} target={s.value} suffix={s.suffix} label={s.label} start={mounted} delay={400 + i * 120} />
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "760ms" }}>
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow">
                <Link to="/projects">View Shipped Titles <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Professional Game Dev Identity Card */}
          <div className="lg:col-span-5 hidden lg:block animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative animate-float">
              {/* Glow behind the card */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />

              <div className="relative glass rounded-2xl p-8 space-y-6 animate-pulse-glow">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Gamepad2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg">{profile.name}</p>
                    <p className="text-xs text-primary font-mono">{profile.title}</p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Engines */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Game Engines</p>
                  <div className="space-y-2.5">
                    <SkillBar icon={Cpu} label="Unity" level={90} color="primary" start={mounted} />
                    <SkillBar icon={Cpu} label="Roblox Studio" level={80} color="secondary" start={mounted} />
                    <SkillBar icon={Cpu} label="Unreal Engine" level={55} color="accent" start={mounted} />
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Languages */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {["C#", "C++", "Lua"].map((lang) => (
                      <span key={lang} className="text-xs px-3 py-1.5 rounded-lg bg-muted text-foreground/80 font-mono">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* Platforms */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">Target Platforms</p>
                  <div className="grid grid-cols-2 gap-2">
                    <PlatformBadge icon={Monitor} label="PC" />
                    <PlatformBadge icon={Smartphone} label="Mobile" />
                    <PlatformBadge icon={Headset} label="VR / AR / MR" />
                    <PlatformBadge icon={Gamepad2} label="Console" />
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills */}
      <section className="container pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">Tech <span className="text-gradient">Loadout</span></h2>
          <Link to="/skills" className="text-sm text-primary hover:underline">All skills →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.category} delay={i * 100} className="glass rounded-xl p-5 hover:border-primary/50 transition-colors">
              <p className="font-mono text-xs text-primary mb-3">{s.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.items.slice(0, 5).map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <span key={item.name} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-muted text-foreground/80">
                      {Icon && <Icon className="h-3 w-3 text-primary shrink-0" />}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="container pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
            <p className="mt-2 text-sm text-muted-foreground">Selected games I've built and shipped.</p>
          </div>
          <Link to="/projects" className="text-sm text-primary hover:underline shrink-0">View all projects →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 120}>
              <Link to={`/projects/${p.slug}`}
                className="group glass rounded-xl overflow-hidden hover:border-primary/60 hover:shadow-glow transition-all block h-full">
              <div className="shimmer aspect-video bg-muted/30 flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="flex flex-col items-center gap-1.5 text-muted-foreground/40">
                    <ImageIcon className="h-8 w-8" />
                    <span className="text-[10px] font-mono">no screenshot</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] text-primary">{p.platform}</p>
                <h3 className="mt-2 text-xl font-bold group-hover:text-gradient">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
              </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

// Stat card — count-up number once `start` is true
const StatCard = ({ target, suffix, label, start, delay }: { target: number; suffix: string; label: string; start: boolean; delay: number }) => {
  const value = useCountUp(target, start);
  return (
    <div className="animate-fade-up glass rounded-xl p-4 text-center" style={{ animationDelay: `${delay}ms` }}>
      <p className="text-2xl sm:text-3xl font-bold text-gradient">{value}{suffix}</p>
      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 tracking-wider">{label}</p>
    </div>
  );
};

// Skill bar color map
const barColors: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

// Skill bar with progress indicator — fills from 0 once `start` is true
const SkillBar = ({ icon: Icon, label, level, color, start }: { icon: React.ComponentType<{ className?: string }>; label: string; level: number; color: "primary" | "secondary" | "accent"; start: boolean }) => (
  <div className="flex items-center gap-3">
    <Icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
    <span className="text-sm w-24 shrink-0">{label}</span>
    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
      <div
        className={`h-full rounded-full ${barColors[color]} transition-all duration-1000 ease-out`}
        style={{ width: start ? `${level}%` : "0%" }}
      />
    </div>
    <span className="text-[10px] text-muted-foreground w-8 text-right font-mono">{level}%</span>
  </div>
);

// Platform badge
const PlatformBadge = ({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) => (
  <div className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg bg-muted/50 text-foreground/70">
    <Icon className="h-3.5 w-3.5 text-primary" />
    {label}
  </div>
);

export default Index;
