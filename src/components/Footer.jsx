import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_80%_100%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-white"
        >
          Let’s create something exceptional
        </motion.h3>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Open to select collaborations, consulting, and full‑time opportunities.
        </p>
        <motion.a
          href="mailto:hello@portfolio.dev"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex mt-8 px-6 py-3 rounded-xl bg-white text-black font-medium shadow-lg shadow-black/40"
        >
          hello@portfolio.dev
        </motion.a>
        <div className="mt-12 text-white/40 text-sm">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}
