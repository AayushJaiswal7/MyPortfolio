import Container from "@/components/ui/Container/Container"




export default function Hero() {
   return (
      <section>
         <Container>
            <div className="flex
            flex-col
            gap-12
            md:flex-row
            md:items-center
            md:justify-between">
            <div className="flex flex-col gap-8 text-white">
                  <p>👋 Hello,I'm</p>
                  <h1>AAYUSH KUMAR</h1>
                  <h2>Computer Science Engineer| Full Stack Developer</h2>
                  <p> I build modern web applications with React,
         TypeScript and Node.js.</p>
            </div>

            <div><p className="text-slate-500 font-mono">Right</p></div>
            </div>
            
         </Container>
      </section>
   )
}