import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { content } from '@/lib/content';

export function Portfolio() {
  const { portfolio } = content;

  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{portfolio.title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {portfolio.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {portfolio.items.map((item, index) => (
               <div key={index} className="group relative aspect-video overflow-hidden rounded-lg bg-zinc-800">
                    <Image 
                        src={item.src} 
                        alt={item.alt}
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 hover:bg-red-600">{portfolio.badges.before}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 hover:bg-green-600">{portfolio.badges.after}</Badge>
                    </div>
               </div>
           ))}
        </div>

        <div className="flex justify-center mt-12">
            <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                {portfolio.cta}
            </Button>
        </div>
      </div>
    </section>
  );
}
