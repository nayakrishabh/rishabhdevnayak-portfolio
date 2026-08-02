import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="border-t border-border/50 mt-24">
    <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.</p>
      <div className="flex gap-4">
        <a href={`mailto:${profile.email}`} className="hover:text-primary">{profile.email}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
