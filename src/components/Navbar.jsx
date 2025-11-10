import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg shadow-black/40 w-full max-w-5xl px-6 py-3 flex items-center justify-between"
      >
        <a href="#top" className="text-white/90 tracking-wide font-semibold">
          <span className="text-white">FLAMES</span>
          <span className="text-white/60">.BLUE</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              whileHover={{ y: -2 }}
              className="px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </motion.a>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-medium shadow-lg shadow-black/40"
        >
          Let’s Talk
        </motion.a>
      </motion.nav>
    </div>
  );
}
