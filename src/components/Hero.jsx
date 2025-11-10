import { useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section id="top" ref={containerRef} className="relative min-h-[88vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradients overlay for depth, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative z-10 w-full max-w-6xl px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <p className="text-white/70 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Software Engineer • Creative Technologist</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            Crafting elegant, future‑proof software with a designer’s eye.
          </h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            I build premium digital experiences with performance, polish, and precision — from immersive frontends to reliable backend systems.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl bg-white text-black font-medium shadow-lg shadow-black/40"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
