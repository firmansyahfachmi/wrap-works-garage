import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { content } from '@/lib/content';

export function FAQ() {
  const { faq } = content;
  
  return (
    <section id="faq" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{faq.title}</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            {faq.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faq.items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 dark:text-zinc-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
