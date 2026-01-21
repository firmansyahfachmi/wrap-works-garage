import Link from 'next/link';
import { Instagram, MapPin, Phone, Mail, Youtube, Twitter } from 'lucide-react';
import { content } from '@/lib/content';

export function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-zinc-900 text-zinc-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#FF6B35] text-white font-bold">
              {content.navbar.logoShort}
            </div>
            <span className="text-white text-lg font-bold">{footer.brand}</span>
          </div>
          <p className="text-sm text-zinc-400">
            {footer.description}
          </p>
        </div>

     
        <div className="space-y-4">
          <h3 className="text-white font-bold">{footer.contact.title}</h3>
          <ul className="space-y-2 text-sm">
             <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-[#FF6B35] mt-0.5" />
              <span>
                {footer.contact.address.line1}<br />
                {footer.contact.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#FF6B35]" />
              <span>{footer.contact.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#FF6B35]" />
              <span>{footer.contact.email}</span>
            </li>
          </ul>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-white font-bold">{footer.hours.title}</h3>
          <ul className="space-y-2 text-sm">
            {footer.hours.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-white font-bold">{footer.social.title}</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#FF6B35] transition-colors"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-[#FF6B35] transition-colors"><Youtube className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-[#FF6B35] transition-colors"><Twitter className="h-5 w-5" /></Link>
          </div>
          <p className="text-xs text-zinc-500 mt-4">
            {footer.social.handle}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-500">
        {footer.copyright}
      </div>
    </footer>
  );
}
