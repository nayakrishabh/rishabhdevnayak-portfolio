import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <Layout>
    <PageHeader eyebrow="Career Log" title="Work Experience" subtitle="Building games, shipping features, and optimizing for real players across PC, mobile, and VR." />
    <section className="container pb-16">
      <div className="relative border-l border-border/70 pl-6 md:pl-10 space-y-10">
        {experience.map((e, i) => (
          <article key={i} className="relative">
            <span className="absolute -left-[34px] md:-left-[46px] top-1 h-4 w-4 rounded-full bg-gradient-primary glow" />
            <div className="glass rounded-xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  {e.role} <span className="text-muted-foreground font-normal">@ {e.company}</span>
                </h2>
                <span className="font-mono text-xs text-primary">{e.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{e.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/85 list-disc pl-5 marker:text-primary">
                {e.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Experience;
