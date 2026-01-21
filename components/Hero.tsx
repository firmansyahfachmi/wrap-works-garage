import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { content } from '@/lib/content';
import Link from 'next/link';

export function Hero() {
  const { hero } = content;

  return (
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden py-16 md:py-24 lg:py-32">
        
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 space-y-6 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    {hero.title} <br />
                    <span className="text-[#FF6B35]">{hero.titleHighlight}</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-lg">
                    {hero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href={"#contact"}>
                     <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold h-12 px-8 text-lg">
                        {hero.cta} <ChevronRight className="ml-2 h-5 w-5" />
                     </Button>
                     </Link>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 max-w-lg">
                    {hero.stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-[#FF6B35] text-3xl font-bold">{stat.value}</div>
                            <div className="text-zinc-500 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 relative w-full h-[300px] md:h-[500px]">
                <div className="relative w-full h-full">
                     <Image 
                        src="/images/hero-car.png" 
                        alt={hero.imageAlt}
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                     />
                </div>
            </div>
        </div>
    </section>
  );
}
