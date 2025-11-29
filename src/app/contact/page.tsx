
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Instagram, Github, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Shikharji Darshan',
  description: 'Get in touch with the Shikharji Darshan team. Contact us for support, feedback, or inquiries about your pilgrimage.',
  openGraph: {
    title: 'Contact Us | Shikharji Darshan',
    description: 'We are here to help with your spiritual journey questions and feedback.',
  },
};


const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    handle: 'astroman6569@gmail.com',
    description: 'For inquiries, support, or feedback, drop us an email.',
    cta: 'Send Email',
    href: 'mailto:astroman6569@gmail.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    handle: '+91 8102116569',
    description: 'Speak to us directly for immediate assistance during business hours.',
    cta: 'Call Now',
    href: 'tel:+918102116569',
  },
  {
    icon: XIcon,
    title: 'Twitter / X',
    handle: '@Sathyamsarthak',
    description: 'Follow our latest updates and join the conversation on X.',
    cta: 'Follow on X',
    href: 'https://x.com/Sathyamsarthak',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    handle: '@srishikharji',
    description: 'See inspiring visuals and stories on our Instagram profile.',
    cta: 'Follow on Instagram',
    href: 'https://instagram.com/srishikharji',
  },
  {
    icon: Github,
    title: 'GitHub',
    handle: 'astromanreal',
    description: 'Explore our open-source projects and contributions on GitHub.',
    cta: 'Follow on GitHub',
    href: 'https://github.com/astromanreal',
  },
];

export default function ContactPage() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="p-3 bg-primary/20 rounded-full">
            <PhoneCall className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Get in Touch
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold font-headline mb-4">Direct Contact</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactMethods.slice(0, 2).map((method) => (
                        <Card key={method.title} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <method.icon className="w-8 h-8 text-primary" />
                                <div>
                                    <CardTitle className="font-headline text-xl">{method.title}</CardTitle>
                                    <p className="text-muted-foreground">{method.handle}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{method.description}</p>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button asChild className="w-full font-headline">
                                    <Link href={method.href} target="_blank">{method.cta}</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold font-headline mb-4">Connect Online</h2>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.slice(2).map((method) => (
                        <Card key={method.title} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 text-center items-center">
                            <CardHeader className="items-center">
                                <method.icon className="w-10 h-10 text-primary" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardTitle className="font-headline text-xl">{method.title}</CardTitle>
                                <p className="text-muted-foreground mb-4">{method.handle}</p>
                                <Button asChild variant="outline" className="font-headline">
                                    <Link href={method.href} target="_blank">{method.cta}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
