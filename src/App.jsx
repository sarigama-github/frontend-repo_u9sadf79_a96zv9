import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("bg-neutral-950");
  }, []);

  return (
    <div className="min-h-screen text-white bg-neutral-950 selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
