import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { experience, education } from "@/data/portfolio";
import {
  GraduationCap, Swords, CheckCircle2, Clock, Star, Zap, MapPin, Calendar,
} from "lucide-react";

/* ---------- quest metadata (chronological, oldest → newest) ---------- */
const questColors = [
  "hsl(210 65% 60%)",   // Lv.1 — MBS Games
  "hsl(168 100% 52%)",  // Lv.2 — Freelance
  "hsl(280 90% 65%)",   // Lv.3 — Carina Intern
  "hsl(320 95% 60%)",   // Lv.4 — Carina Jr Dev
];
const questXp = [150, 300, 450, 900];

// experience is stored newest-first; reverse for a level-up narrative
const quests = [...experience].reverse().map((e, i) => ({
  ...e,
  level: i + 1,
  color: questColors[i % questColors.length],
  xp: questXp[i % questXp.length],
  ongoing: /present/i.test(e.period),
}));

const totalXp = quests.reduce((n, q) => n + q.xp, 0);
const inProgress = quests.filter((q) => q.ongoing).length;

const Experience = () => (
  <Layout>
    {/* Header */}
    <section className="container pt-12 sm:pt-16 pb-10">
      <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary mb-5 animate-fade-up">
        Career Log
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold animate-fade-up" style={{ animationDelay: "80ms" }}>
        Quest <span className="text-gradient">Log</span>
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "160ms" }}>
        Every job is a quest — here's the campaign so far.
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-muted text-foreground/80">
          <Swords className="h-3.5 w-3.5 text-primary" /> {quests.length} QUESTS
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-muted text-foreground/80">
          <GraduationCap className="h-3.5 w-3.5 text-primary" /> {education.length} TRAINING
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-muted text-foreground/80">
          <Clock className="h-3.5 w-3.5 text-primary" /> {inProgress} IN PROGRESS
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-primary/10 text-primary">
          <Zap className="h-3.5 w-3.5" /> TOTAL XP: {totalXp.toLocaleString()}
        </span>
      </div>
    </section>

    {/* Quest Log */}
    <section className="container pb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
          <Swords className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Main Quests</h2>
          <p className="text-xs text-muted-foreground font-mono">CAMPAIGN · LEVEL 1 → {quests.length}</p>
        </div>
      </div>
      <div className="relative border-l border-border/70 pl-6 md:pl-10 space-y-8">
        {quests.map((q, i) => (
          <article key={`${q.company}-${q.role}`} className="relative">
            <span
              className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full glow"
              style={{ background: q.color, boxShadow: `0 0 12px ${q.color}` }}
            />
            <Reveal delay={i * 60}>
              <div className="glass rounded-xl p-6 hover:border-primary/40 transition-colors">
                {/* level + status */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-1 rounded-md"
                    style={{ color: q.color, border: `1px solid ${q.color}`, background: `${q.color}1a` }}
                  >
                    <Star className="h-3 w-3" /> LV.{q.level}
                  </span>
                  {q.ongoing ? (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/40">
                      <Clock className="h-3 w-3 animate-pulse" /> IN PROGRESS
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/40">
                      <CheckCircle2 className="h-3 w-3" /> COMPLETED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold">
                  {q.role} <span className="text-muted-foreground font-normal">@ {q.company}</span>
                </h3>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {q.period}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {q.location}</span>
                </div>

                {/* objectives */}
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Objectives</p>
                  <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5 marker:text-primary">
                    {q.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>

                {/* xp reward */}
                <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-primary">
                  <Zap className="h-3.5 w-3.5" /> +{q.xp} XP
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>

    {/* Training Grounds */}
    <section className="container pb-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
          <GraduationCap className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Training Grounds</h2>
          <p className="text-xs text-muted-foreground font-mono">TUTORIAL · CHARACTER CREATION</p>
        </div>
      </div>
      <div className="relative border-l border-border/70 pl-6 md:pl-10 space-y-8">
        {education.map((e, i) => (
          <article key={e.school} className="relative">
            <span className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-muted border-2 border-border" />
            <Reveal delay={i * 80}>
              <div className="glass rounded-xl p-6 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Tutorial</span>
                </div>
                <h3 className="text-lg font-bold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{e.school}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {e.period}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" /> {e.location}</span>
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Experience;
