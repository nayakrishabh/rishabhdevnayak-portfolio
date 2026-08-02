import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { profile, projects, skills } from "@/data/portfolio";
import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="container pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-4 sm:mb-5 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> {profile.title}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
              <br />
              I build <span className="text-gradient">playable</span> worlds.
            </h1>
            <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              {profile.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow">
                <Link to="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> {profile.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
              <div className="relative h-full w-full rounded-3xl glass p-8 flex flex-col justify-between animate-float">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">// loadout.json</span>
                  <span className="h-2 w-2 rounded-full bg-primary glow" />
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <p><span className="text-muted-foreground">engine:</span> <span className="text-primary">"Unity"</span></p>
                  <p><span className="text-muted-foreground">stack:</span> <span className="text-secondary">["C#","C++","Lua"]</span></p>
                  <p><span className="text-muted-foreground">platform:</span> <span className="text-accent">"Meta Quest"</span></p>
                  <p><span className="text-muted-foreground">mode:</span> <span className="text-primary">"multiplayer"</span></p>
                  <p><span className="text-muted-foreground">status:</span> <span className="text-secondary">"shipping"</span></p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-muted/50 py-3"><p className="text-xl font-bold text-primary">3+</p><p className="text-[10px] text-muted-foreground">Years</p></div>
                  <div className="rounded-lg bg-muted/50 py-3"><p className="text-xl font-bold text-secondary">10+</p><p className="text-[10px] text-muted-foreground">Projects</p></div>
                  <div className="rounded-lg bg-muted/50 py-3"><p className="text-xl font-bold text-accent">VR</p><p className="text-[10px] text-muted-foreground">Ready</p></div>
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
          {skills.map((s) => (
            <div key={s.category} className="glass rounded-xl p-5 hover:border-primary/50 transition-colors">
              <p className="font-mono text-xs text-primary mb-3">{s.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.items.slice(0, 5).map((i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-foreground/80">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="container pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          <Link to="/projects" className="text-sm text-primary hover:underline">All projects →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
               className="group glass rounded-xl p-6 hover:border-primary/60 hover:shadow-glow transition-all">
              <p className="font-mono text-[11px] text-primary">{p.platform}</p>
              <h3 className="mt-2 text-xl font-bold group-hover:text-gradient">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
