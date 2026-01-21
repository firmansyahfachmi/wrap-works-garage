import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { content } from '@/lib/content';

export function Services() {
  const { services } = content;

  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">{services.title}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`${service.color} text-white rounded-t-lg p-6 flex items-center justify-center h-48`}>
                <service.icon className="w-16 h-16" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="mb-4 text-sm text-zinc-500">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                     <li key={i} className="text-sm text-zinc-600 flex items-center gap-2">
                        <span className="text-[#FF6B35]">✔</span> {feature}
                     </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
