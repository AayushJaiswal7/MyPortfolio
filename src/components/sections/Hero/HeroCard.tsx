export default function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-10 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/60 bg-slate-950/70 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative flex min-h-[520px] flex-col items-center justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-blue-300/80 bg-slate-700/70 shadow-[0_0_60px_rgba(59,130,246,0.15)]">
            <div className="absolute -inset-12 rounded-full border border-blue-400/20" />

            <div className="text-center">
              <p className="text-7xl font-bold text-white">AK</p>
              <p className="mt-2 text-sm font-medium text-blue-200">
                full-stack engineer
              </p>
            </div>
          </div>

          <div className="relative z-10 -mt-4 rounded-full border border-emerald-400/40 bg-slate-950/90 px-6 py-3 text-sm text-emerald-100 shadow-lg backdrop-blur-md">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Open to internships and product teams
          </div>

          <div className="mt-10 grid w-full grid-cols-3 divide-x divide-blue-500/20 rounded-3xl border border-blue-500/50 bg-slate-950/80 p-5 backdrop-blur-xl">
            <Stat value="2+" label="Years of Learning" />
            <Stat value="10+" label="Projects Completed" />
            <Stat value="5+" label="Certifications" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 text-center">
      <p className="text-2xl font-bold text-blue-400">{value}</p>
      <p className="mt-1 text-xs text-slate-300">{label}</p>
    </div>
  );
}