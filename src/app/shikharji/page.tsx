
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Hotel, UtensilsCrossed, UserCheck, Bike, Star, ArrowRight, Headphones, Heart, Gift, Briefcase, BookOpen, Video } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shikharji Guide - Accommodation, Food & Transport | Shikharji Darshan',
  description: 'Your complete travel and spiritual support partner for the sacred Sammed Shikharji pilgrimage. Find dharamshalas, bhojnalayas, guides, and transport services.',
  openGraph: {
    title: 'The Complete Guide to your Shikharji Pilgrimage',
    description: 'Plan your visit with ease—find accommodation, food, guides, and more.',
  },
};

const services = [
  {
    icon: Hotel,
    title: "Affordable Accommodation",
    description: "Jain Dharamshalas, guesthouses, and modern hotels suitable for families and solo pilgrims. Stay in a pure and peaceful environment.",
    details: "Starts from ₹500/night",
    cta: "Book Stay"
  },
  {
    icon: UtensilsCrossed,
    title: "Pure Vegetarian Food",
    description: "Access traditional Jain Bhojnalayas and Satvik cafes. We ensure adherence to strict dietary customs for a worry-free pilgrimage.",
    details: "Meals from ₹150",
    cta: "Find Bhojnalayas"
  },
  {
    icon: UserCheck,
    title: "Certified Local Guides",
    description: "Hire experienced spiritual guides for your trek. Both group and private guide options are available, fluent in Hindi and English.",
    details: "₹1000 per trek",
    cta: "Book a Guide"
  },
  {
    icon: Bike,
    title: "Vehicle Rentals",
    description: "Rent scooters, bikes, or cars for easy movement between Madhuban and the trek base points like Isri Bazaar.",
    details: "Rentals from ₹400/day",
    cta: "Reserve Ride"
  }
];

const moreServices = [
    {
        icon: Headphones,
        title: "Digital Guided Tours",
        description: "Unlock audio commentaries for each tonk and sacred site. Available in Hindi, English, and Gujarati."
    },
    {
        icon: Heart,
        title: "Contribute & Earn Punya",
        description: "Sponsor meals, temple renovations, or dharamshala upgrades to earn symbolic blessings."
    },
    {
        icon: Gift,
        title: "Shikharji Gift Box",
        description: "Get home-delivered Prasad, puja essentials, and other spiritual souvenirs."
    },
    {
        icon: Briefcase,
        title: "Curated Yatra Packages",
        description: "All-inclusive travel packages including transport, guide, and stay for a seamless journey."
    },
    {
        icon: BookOpen,
        title: "Learn Jainism Library",
        description: "Downloadable e-books, stotras, and illustrated stories for children on Jain philosophy."
    },
    {
        icon: Video,
        title: "Spiritual Wellness",
        description: "Join live meditation sessions, virtual pravachans, and wellness classes with scholars."
    }
]

export default function ShikharjiPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full py-20 md:py-32 bg-accent/10 text-center">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Map className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Shikharji Guide
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Your complete travel and spiritual support partner for the sacred Sammed Shikharji pilgrimage.
            </p>
             <p className="text-lg font-semibold text-accent">"Plan your visit with ease — stay pure, stay peaceful."</p>
             <Button size="lg" className="font-headline mt-4">
                <a href="#services">View Services</a>
            </Button>
          </div>
        </div>
      </section>

       {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-20">
            
            {/* Sacred Overview */}
            <section className="text-center">
                 <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Sammed Shikharji, nestled atop Parasnath Hill in Jharkhand, is the holiest site in Jain Dharma. It is here that 20 of the 24 Tirthankaras attained moksha. Let your journey to this sacred land be peaceful, comfortable, and spiritually fulfilling with our dedicated support services.
                </p>
            </section>
            
            {/* Core Services Section */}
            <section id="services">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Pilgrimage Support Services</h2>
                     <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        We provide verified and reliable services to ensure your pilgrimage is seamless.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="flex flex-col text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="flex-row items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                                    <p className="font-bold text-primary mt-1">{service.details}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                             <CardFooter>
                                <Button asChild className="w-full font-headline">
                                    <Link href="/contribute">
                                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* More Spiritual Services & Products Section */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">More Spiritual Services &amp; Products</h2>
                     <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Enrich your journey with our curated digital and physical offerings.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {moreServices.map((service) => (
                        <Card key={service.title} className="flex flex-col text-center items-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="items-center">
                                <div className="p-3 bg-primary/10 rounded-full mb-2">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </CardContent>
                             <CardFooter>
                                <Button variant="outline" className="w-full font-headline" asChild>
                                    <Link href="/contribute">Learn More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
