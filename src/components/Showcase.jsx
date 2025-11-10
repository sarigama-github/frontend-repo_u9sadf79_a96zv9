import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Neural UI Kit",
    desc: "A component library with glassmorphic patterns and motion primitives.",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Realtime Analytics",
    desc: "Stream processing dashboard with anomaly detection and alerts.",
    tags: ["FastAPI", "WebSockets", "Timeseries"],
  },
  {
    title: "3D Commerce",
    desc: "Interactive product explorer with Spline and WebGL shaders.",
    tags: ["Spline", "Three.js", "Ecommerce"],
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="work" ref={ref} className="relative py-24 md:py-36">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_20%_0%,rgba(120,120,255,0.08),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white">Selected Work</h2>
            <p className="text-white/60 mt-2">A curation of recent projects focused on performance and polish.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              style={{ y }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-white/10 to-transparent" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-white">{p.title}</h3>
                <span className="text-xs text-white/50">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-white/60 mt-3">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">{t}</span>
                ))}
              </div>
              <motion.div
                className="mt-6 h-28 rounded-2xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
