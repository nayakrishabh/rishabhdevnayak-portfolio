import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useRef, useState, useCallback } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: -100, y: -100 });
  const smoothRef = useRef({ x: -100, y: -100 });

  // Smooth cursor animation via requestAnimationFrame
  const animate = useCallback(() => {
    const dx = mouseRef.current.x - smoothRef.current.x;
    const dy = mouseRef.current.y - smoothRef.current.y;
    smoothRef.current.x += dx * 0.15;
    smoothRef.current.y += dy * 0.15;

    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${smoothRef.current.x}px, ${smoothRef.current.y}px)`;
    }
    if (cursorRingRef.current) {
      cursorRingRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Update glow position
      const x = ((e.clientX / window.innerWidth) * 100).toFixed(1);
      const y = ((e.clientY / window.innerHeight) * 100).toFixed(1);
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    // Detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (interactive) setHovering(true);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = (e.relatedTarget as HTMLElement) || null;
      // Only unset if we're leaving an interactive element and not entering another
      const targetInteractive = target.closest(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const relatedInteractive = related?.closest(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (targetInteractive && !relatedInteractive) setHovering(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col bg-hero relative"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Global mouse-following glow — behind everything */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), hsl(168 100% 52% / 0.05), transparent 50%)",
        }}
      />

      {/* Custom cursor — dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ marginLeft: "-4px", marginTop: "-4px" }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            hovering
              ? "w-2 h-2 bg-primary shadow-[0_0_12px_hsl(168_100%_52%/0.8)]"
              : "w-2 h-2 bg-primary shadow-[0_0_8px_hsl(168_100%_52%/0.6)]"
          }`}
        />
      </div>

      {/* Custom cursor — ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          marginLeft: hovering ? "-24px" : "-16px",
          marginTop: hovering ? "-24px" : "-16px",
        }}
      >
        <div
          className={`rounded-full border border-primary/40 transition-all duration-300 ${
            hovering
              ? "w-12 h-12 border-primary/70 shadow-[0_0_20px_hsl(168_100%_52%/0.3)]"
              : "w-8 h-8"
          }`}
        />
      </div>

      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
