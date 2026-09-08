import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-button focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <main className="min-h-screen overflow-x-hidden bg-bg">
        <Navbar />

        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
