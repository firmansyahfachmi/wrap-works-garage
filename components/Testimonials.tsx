import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { content } from '@/lib/content';

export function Testimonials() {
  const { testimonials } = content;

  return (
    <section id="reviews" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{testimonials.title}</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            {testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.items.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-50 dark:bg-zinc-900 border-none">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-xs text-zinc-500">{testimonial.role}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-[#FF6B35] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'text-zinc-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 italic">
                  &quot;{testimonial.content}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
