import { cn } from "@/lib/utils";

interface SectionProps {
   children: React.ReactNode,
   id?: string;
   className?: string;
}
export default function Section({children,id,className}:SectionProps){
   return(
      <section className={cn("py-24",className)} id={id}>{children}</section>
   )
}