'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { content } from '@/lib/content';

export function ContactForm() {
    const { contact } = content;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        wrapType: '',
        message: '',
        privacy: false
    });
    const [status, setStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, wrapType: value });
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData({ ...formData, privacy: checked });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.privacy) {
            alert(contact.messages.privacyError);
            return;
        }

        setStatus('submitting');

        try {
            // Mock API call using axios
            await new Promise(resolve => setTimeout(resolve, 1500));
            
           
            setStatus('success');
            setFormData({
                name: '', email: '', phone: '', carModel: '', wrapType: '', message: '', privacy: false
            });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.title}</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">{contact.labels.name}</Label>
                        <Input 
                            id="name" 
                            name="name" 
                            placeholder={contact.placeholders.name}
                            required 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{contact.labels.email}</Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder={contact.placeholders.email}
                            required 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="phone">{contact.labels.phone}</Label>
                        <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            placeholder={contact.placeholders.phone}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="carModel">{contact.labels.carModel}</Label>
                        <Input 
                            id="carModel" 
                            name="carModel" 
                            placeholder={contact.placeholders.carModel} 
                            required 
                            value={formData.carModel}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="wrapType">{contact.labels.wrapType}</Label>
                    <Select onValueChange={handleSelectChange} value={formData.wrapType}>
                        <SelectTrigger>
                            <SelectValue placeholder={contact.placeholders.wrapType} />
                        </SelectTrigger>
                        <SelectContent>
                            {contact.options.wrapOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">{contact.labels.message}</Label>
                    <Textarea 
                        id="message" 
                        name="message" 
                        placeholder={contact.placeholders.message}
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox 
                        id="privacy" 
                        checked={formData.privacy} 
                        onCheckedChange={(checked) => handleCheckboxChange(checked as boolean)}
                    />
                    <label
                        htmlFor="privacy"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-500"
                    >
                        {contact.labels.privacy}
                    </label>
                </div>

                <div className="pt-2">
                     <Button 
                        type="submit" 
                        className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold py-6 text-lg"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? contact.button.submitting : contact.button.default}
                    </Button>
                </div>

                {status === 'success' && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
                        {contact.messages.success}
                    </div>
                )}
                 {status === 'error' && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
                        {contact.messages.error}
                    </div>
                )}
            </form>
        </div>
      </div>
    </section>
  );
}
