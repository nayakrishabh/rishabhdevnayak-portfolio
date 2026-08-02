import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { skills } from "@/data/portfolio";

const Skills = () => (
  <Layout>
    <PageHeader eyebrow="Stat Sheet" title="Skills" subtitle="Tools, languages, and disciplines I use to ship games." />
    <section className="container pb-16 grid md:grid-cols-2 gap-6">
      {skills.map((s) => (
        <div key={s.category} className="glass rounded-2xl p-7">
          <h2 className="text-lg font-bold text-gradient">{s.category}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.items.map((i) => (
              <span key={i} className="text-sm px-3 py-1.5 rounded-md bg-muted border border-border hover:border-primary/60 transition-colors">
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  </Layout>
);

export default Skills;
