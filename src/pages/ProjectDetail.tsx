import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, ImageIcon } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="container pt-20 pb-16 text-center">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">
            ← Back to projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container pt-10 sm:pt-16 pb-16">
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        {/* Hero image */}
        <Reveal className="aspect-video w-full rounded-2xl overflow-hidden bg-muted/30 mb-10 border border-border">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain animate-fade-in"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground/40">
              <ImageIcon className="h-16 w-16" />
              <span className="text-sm font-mono">no screenshot</span>
            </div>
          )}
        </Reveal>

        {/* Title + meta */}
        <div className="mb-10 animate-fade-up">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            {project.platform}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{project.title}</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <Reveal as="section" delay={100}>
              <h2 className="text-2xl font-bold mb-4">About the project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </Reveal>

            {/* Key Highlights */}
            <section className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-semibold mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: `${250 + i * 90}ms` }}>
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar — Project Details */}
          <aside className="lg:col-span-1 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="glass rounded-2xl p-7 space-y-6 sticky top-24">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                PROJECT DETAILS
              </h3>

              <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
                <DetailRow label="Role" value={project.role} />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "460ms" }}>
                <DetailRow label="Year" value={project.year} />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "520ms" }}>
                <DetailRow label="Engine" value={project.engine} />
              </div>
              <div className="animate-fade-up" style={{ animationDelay: "580ms" }}>
                <DetailRow label="Status" value={project.status} />
              </div>

              {/* Platforms */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {project.platforms.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {p.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded bg-muted text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* External link */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="animate-fade-up flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 glow transition-opacity"
                style={{ animationDelay: "650ms" }}
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="text-sm font-medium mt-0.5">{value}</p>
  </div>
);

export default ProjectDetail;
