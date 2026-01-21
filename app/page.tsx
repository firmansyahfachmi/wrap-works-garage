'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Portfolio } from '@/components/Portfolio';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-[#FF6B35] selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
