import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const Projects = () => (
  <Layout>
    <PageHeader eyebrow="Press Start" title="Projects" subtitle="Selected shipped titles and gameplay modules." />
    <section className="container pb-16 grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
           className="group glass rounded-2xl p-7 hover:border-primary/60 hover:shadow-glow transition-all">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-primary">{p.platform}</p>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
          </div>
          <h2 className="mt-2 text-2xl font-bold group-hover:text-gradient">{p.title}</h2>
          <p className="text-xs text-muted-foreground">{p.studio}</p>
          <p className="mt-4 text-sm text-foreground/85">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-1 rounded bg-muted text-foreground/80">{t}</span>
            ))}
          </div>
        </a>
      ))}
    </section>
  </Layout>
);

export default Projects;
