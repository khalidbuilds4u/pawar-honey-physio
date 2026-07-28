import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, imageSrc, className }: PageHeaderProps) {
  return (
    <div className={cn("pt-32 pb-16 md:pt-40 md:pb-24 text-white text-center relative overflow-hidden bg-primary", className)}>
      {imageSrc ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : (
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{title}</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}
