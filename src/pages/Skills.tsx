import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { skills } from "@/data/portfolio";
import {
  Box, Blocks, Component, Hash, Code2, FileCode2, Gamepad2, Boxes,
  Smartphone, Headset, Users, Monitor, Film, Cog, Atom, Zap,
  Gauge, Database, MousePointer2, GitBranch, GitCompare, TrendingUp, Bug,
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

const Skills = () => (
  <Layout>
    <PageHeader eyebrow="Stat Sheet" title="Skills" subtitle="Tools, languages, and disciplines I use to ship games." />
    <section className="container pb-16 grid md:grid-cols-2 gap-6">
      {skills.map((s) => (
        <div key={s.category} className="glass rounded-2xl p-7">
          <h2 className="text-lg font-bold text-gradient">{s.category}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-muted border border-border hover:border-primary/60 hover:bg-primary/5 transition-colors"
                >
                  {Icon && <Icon className="h-4 w-4 text-primary shrink-0" />}
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  </Layout>
);

export default Skills;
