
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, Heart, Gift, Briefcase, BookOpen, Video, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spiritual Offerings & Services | Shikharji Darshan',
  description: 'Enrich your spiritual journey with our services: digital guided tours, curated yatra packages, seva opportunities, Shikharji gift boxes, and spiritual wellness sessions.',
  openGraph: {
    title: 'Services to Enrich Your Spiritual Journey',
    description: 'Explore digital tours, yatra packages, seva opportunities, and more.',
  },
};

const services = [
    {
        icon: Headphones,
        title: "Digital Guided Tours",
        description: "Unlock audio commentaries for every tonk and spiritual site. Multilingual support in Hindi, English, and Gujarati.",
        cta: "View Tour Map",
        href: "/services/digital-tours"
    },
    {
        icon: Heart,
        title: "Contribute & Earn Punya",
        description: "Sponsor meals, temple restoration, dharamshala upgrades. Earn spiritual merit through service.",
        cta: "Explore Seva Opportunities",
        href: "/contribute"
    },
    {
        icon: Gift,
        title: "Shikharji Gift Box",
        description: "Get home-delivered Prasad, puja items, and handmade souvenirs from Shikharji.",
        cta: "Order Now",
        href: "/services/gift-box"
    },
    {
        icon: Briefcase,
        title: "Curated Yatra Packages",
        description: "Seamless, all-inclusive pilgrimage plans with local guides, vehicles, and stay.",
        cta: "See Package Options",
        href: "/services/yatra-packages"
    },
    {
        icon: BookOpen,
        title: "Learn Jainism Library",
        description: "Download stotras, children’s stories, and e-books on Jain dharma. Always growing, always free.",
        cta: "Browse Library",
        href: "/dharma"
    },
    {
        icon: Video,
        title: "Spiritual Wellness",
        description: "Join live meditations, virtual pravachans, and spiritual workshops led by Jain scholars.",
        cta: "Join Session",
        href: "/services/spiritual-wellness"
    }
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Sacred Mandala Art representing spiritual services and offerings."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="sacred mandala"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-primary">
              Enrich Your Journey Beyond the Climb
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Explore our hand-picked spiritual services and offerings — designed to deepen your connection and ease your path.
            </p>
          </div>
        </div>
      </section>

       {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <Card key={service.title} className="flex flex-col text-center items-center shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                        <CardHeader className="items-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-2">
                                <service.icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                            <CardFooter className="w-full p-6">
                            <Button asChild className="w-full font-headline">
                                <Link href={service.href}>
                                    {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
