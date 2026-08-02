import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { profile, education } from "@/data/portfolio";
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Resume = () => (
  <Layout>
    <PageHeader eyebrow="Final Boss" title="Resume & Contact" subtitle="Reach out for collaborations, contracts, or full-time gigs." />

    <section className="container pb-16 grid lg:grid-cols-3 gap-6">
      <aside className="glass rounded-2xl p-7 space-y-5 lg:col-span-1 h-fit">
        <div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
        </div>
        <div className="space-y-3 text-sm">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary">
            <Mail className="h-4 w-4 text-primary" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-3 hover:text-primary">
            <Phone className="h-4 w-4 text-primary" /> {profile.phone}
          </a>
          <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {profile.location}</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary break-all">
            <Linkedin className="h-4 w-4 text-primary" /> LinkedIn
          </a>
        </div>
        <Button asChild className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
          <a href={profile.resumeUrl} download>
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </a>
        </Button>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">Education</h3>
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.school} className="text-sm">
                <p className="font-semibold">{e.degree}</p>
                <p className="text-muted-foreground text-xs">{e.school}</p>
                <p className="text-muted-foreground text-xs">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="lg:col-span-2 glass rounded-2xl p-2 overflow-hidden">
        <object data={profile.resumeUrl} type="application/pdf" className="w-full h-[60vh] sm:h-[75vh] lg:h-[80vh] rounded-xl">
          <p className="p-6 text-sm text-muted-foreground">
            Your browser can't preview the PDF.{" "}
            <a href={profile.resumeUrl} className="text-primary underline" download>Download it here</a>.
          </p>
        </object>
      </div>
    </section>
  </Layout>
);

export default Resume;
