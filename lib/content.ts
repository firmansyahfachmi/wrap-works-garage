import { Car, PaintBucket, Palette, Shield } from 'lucide-react';

export const content = {
    navbar: {
        logo: 'WrapWorks Garage',
        logoShort: 'W',
        items: [
            { name: 'Services', href: '#services' },
            { name: 'Reviews', href: '#reviews' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Contact', href: '#contact' },
        ],
        cta: 'Request Quote',
    },
    hero: {
        title: 'Transform Your Car',
        titleHighlight: 'With A Unique Wrap',
        description: 'Professional car wrap in the Netherlands. From full wraps to custom designs – we make your car unique.',
        cta: 'Request Free Quote',
        stats: [
            { value: '500+', label: 'Projects Completed' },
            { value: '5 Years', label: 'Experience' },
            { value: '48h', label: 'Service Time' },
        ],
        imageAlt: 'Hero Car',
    },
    services: {
        title: 'Our Services',
        description: 'Professional wrapping solutions for every car',
        items: [
            {
                title: 'Full Wrap',
                description: 'Complete transformation of your car with a full body wrap in a color of your choice.',
                icon: Car,
                color: 'bg-orange-500',
                features: ['5 year warranty', 'Premium material', '48 hour service']
            },
            {
                title: 'Partial Wrap',
                description: 'Accentuate specific parts like roof, mirrors, or hood for a unique look.',
                icon: PaintBucket,
                color: 'bg-zinc-800',
                features: ['Clean lines', 'Sharp details', 'From €250']
            },
            {
                title: 'Custom Design',
                description: 'Unique designs, prints and patterns for companies or personal style.',
                icon: Palette,
                color: 'bg-pink-600',
                features: ['Unique design', 'Full color print', 'Logo integration']
            },
            {
                title: 'Paint Protection',
                description: 'Protect your paint against stone chips and scratches with our invisible PPF film.',
                icon: Shield,
                color: 'bg-blue-600',
                features: ['Self-healing', 'Invisible', '10 year warranty']
            }
        ]
    },
    testimonials: {
        title: 'What Customers Say',
        description: 'Check out the experiences of our satisfied customers',
        items: [
            {
                name: 'Mark van Rijn',
                role: 'Porsche 911 Owner',
                content: 'Fantastic service! My car looks like new again. The color matching was perfect and the finish is top-notch.',
                rating: 5,
                initials: 'MR'
            },
            {
                name: 'Sophie Jansen',
                role: 'Tesla Model Y Owner',
                content: 'Super happy with my custom design. They understood exactly what I wanted. Fast service and good communication.',
                rating: 5,
                initials: 'SJ'
            },
            {
                name: 'Tom de Vries',
                role: 'BMW M4 Owner',
                content: 'Good value for money. You can see they have a passion for their profession. Definitely recommended!',
                rating: 4,
                initials: 'TV'
            }
        ]
    },
    portfolio: {
        title: 'Before & After Transformations',
        description: 'View our recent projects and results',
        badges: {
            before: 'BEFORE',
            after: 'AFTER'
        },
        cta: 'View All Transformations',
        items: [
            { alt: 'Transformation 1', src: '/images/before-after.png' },
            { alt: 'Transformation 2', src: '/images/before-after.png' },
            { alt: 'Transformation 3', src: '/images/before-after.png' }
        ]
    },
    faq: {
        title: 'Frequently Asked Questions',
        description: 'Everything you need to know about car wrapping',
        items: [
            {
                question: "How long does it take to wrap a car?",
                answer: "A full car wrap takes on average 2 to 4 days, depending on the complexity of the car and the chosen design. For partial wraps, this can often be done within 1 day."
            },
            {
                question: "How long does a car wrap last?",
                answer: "With good maintenance, a professional wrap lasts 5 to 7 years. We only use high-quality films from brands like 3M and Avery Dennison that are resistant to UV radiation and weather conditions."
            },
            {
                question: "Does a wrap damage the original paint?",
                answer: "No, on the contrary! A wrap protects the original paint against scratches, stone chips, and discoloration by the sun. When removed, the original paint emerges like new again."
            },
            {
                question: "What are the costs of a car wrap?",
                answer: "Costs vary greatly per car and film choice. A full wrap typically starts from €2000. For an exact price, we are happy to make a no-obligation custom quote."
            }
        ]
    },
    contact: {
        title: 'Request A Quote',
        description: 'Fill out the form and receive a no-obligation quote within 24 hours',
        labels: {
            name: 'Full Name *',
            email: 'Email Address *',
            phone: 'Phone Number',
            carModel: 'Car Brand & Model *',
            wrapType: 'Wrap Type',
            message: 'Message',
            privacy: 'I agree to the privacy policy and the processing of my data. *'
        },
        placeholders: {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+31 6 12345678',
            carModel: 'e.g. BMW 3 Series',
            wrapType: 'Select a wrap type',
            message: 'Describe your wishes or questions...'
        },
        options: {
            wrapOptions: [
                { value: 'full', label: 'Full Wrap' },
                { value: 'partial', label: 'Partial Wrap' },
                { value: 'custom', label: 'Custom Design' },
                { value: 'ppf', label: 'Paint Protection Film' },
                { value: 'chrome', label: 'Chrome Delete' },
            ]
        },
        button: {
            submitting: 'Sending...',
            default: 'Send Request'
        },
        messages: {
            success: 'Thanks for your request! We will contact you as soon as possible.',
            error: 'Something went wrong. Please try again later.',
            privacyError: 'Please agree to the privacy policy.'
        }
    },
    footer: {
        brand: 'WrapWorks',
        description: 'Professional car wrapping, full wraps and custom designs - we make your car unique.',
        contact: {
            title: 'Contact',
            address: { line1: 'WrapWorks HQ, Industrieweg 12', line2: '1234 AB Amsterdam' },
            phone: '+31 20 123 4567',
            email: 'info@wrapworks.nl'
        },
        hours: {
            title: 'Opening Hours',
            items: [
                'Mon-Fri: 09:00 - 18:00',
                'Saturday: 10:00 - 16:00',
                'Sunday: Closed'
            ]
        },
        social: {
            title: 'Follow Us',
            handle: '@wrapworksgarage'
        },
        copyright: `© ${new Date().getFullYear()} WrapWorks Garage. All rights reserved.`
    }
};
