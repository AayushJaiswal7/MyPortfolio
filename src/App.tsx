import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";

function App() {
  return (
      <main className="min-h-screen overflow-hidden bg-[#020617]">
      <Navbar />

      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <Hero />
    </main>
  );
}

export default App;