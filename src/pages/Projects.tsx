import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";
import { ExternalLink, ImageIcon } from "lucide-react";

const Projects = () => (
  <Layout>
    <PageHeader eyebrow="Press Start" title="Projects" subtitle="Selected shipped titles and gameplay modules." />
    <section className="container pb-16 grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 120}>
          <Link
            to={`/projects/${p.slug}`}
            className="group glass rounded-2xl overflow-hidden hover:border-primary/60 hover:shadow-glow transition-all block h-full"
          >
            {/* Project Image */}
            <div className="shimmer aspect-video bg-muted/30 flex items-center justify-center overflow-hidden">
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                <ImageIcon className="h-10 w-10" />
                <span className="text-xs font-mono">no screenshot</span>
              </div>
            )}
          </div>
          <div className="p-7">
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
          </div>
          </Link>
        </Reveal>
      ))}
    </section>
  </Layout>
);

export default Projects;
