'use client'

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, User, Users, Footprints, Hotel, Utensils, Bike, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const packages = [
  {
    id: 'solo',
    type: 'Solo Traveler',
    title: "The Solo Seeker's Path",
    duration: "3 Days / 2 Nights",
    price: "₹8,500",
    description: "A peaceful, reflective journey designed for individual pilgrims seeking solitude and deep spiritual connection.",
    inclusions: [
        "Private room in a clean Dharamshala",
        "All pure Jain meals (Bhojnalaya)",
        "Bike support for partial trek ascent",
        "Experienced personal guide",
        "Pickup/drop from Parasnath Station"
    ]
  },
  {
    id: 'family',
    type: 'Family Yatra',
    title: "The Family Blessings Journey",
    duration: "4 Days / 3 Nights",
    price: "₹25,000 (for 4)",
    description: "A comfortable and comprehensive package for families to experience the sacred pilgrimage together with ease.",
    inclusions: [
        "Family suite in a well-rated Hotel/Dharamshala",
        "All meals, with options for children",
        "Doli/Palanquin support for one member",
        "Private vehicle for local travel in Madhuban",
        "Knowledgeable family guide"
    ]
  },
  {
    id: 'senior',
    type: 'Senior Citizen Friendly',
    title: "The Gentle Soul's Pilgrimage",
    duration: "4 Days / 3 Nights",
    price: "₹12,000",
    description: "A relaxed-pace yatra focusing on comfort, accessibility, and rest for our respected elders.",
    inclusions: [
        "Ground floor room in accessible Dharamshala",
        "Customized, easily digestible meals",
        "Full Doli/Palanquin support for the entire trek",
        "Priority darshan arrangements",
        "Dedicated attendant for assistance"
    ]
  }
];

const testimonials = [
    {
        name: "Ritesh Kumar",
        package: "Solo Seeker's Path",
        comment: "Everything was perfectly arranged. The guide was knowledgeable, and the solitude I experienced was exactly what I needed. Highly recommended."
    },
    {
        name: "The Shah Family",
        package: "Family Blessings Journey",
        comment: "Our family yatra was seamless. The doli for my mother was a lifesaver, and the guide was excellent with our children. A truly blessed experience."
    },
    {
        name: "Kamla Ben",
        package: "Gentle Soul's Pilgrimage",
        comment: "As a senior citizen, I was worried about the trek. The team took care of everything with so much compassion. The doli service was excellent. Jai Jinendra."
    }
]

const faqs = [
    {
        question: "Are the meals provided strictly Jain?",
        answer: "Yes, all meals provided in our packages are pure, sattvic, and prepared according to strict Jain dietary principles. We partner with trusted bhojanshalas in Madhuban."
    },
    {
        question: "Can we customize a package?",
        answer: "Absolutely. While these are our most popular packages, we can customize a yatra plan based on your specific needs, duration, and budget. Please contact us to discuss."
    },
    {
        question: "What is the best time to visit Shikharji?",
        answer: "The best time to visit is from October to March, when the weather is pleasant for the trek. The monsoon season (July-September) can be challenging."
    },
     {
        question: "How do I book a package?",
        answer: "You can book a package by clicking the 'Book Now' button and filling out our contact form. Our team will get in touch with you to finalize the details and payment."
    }
]

export default function YatraPackagesPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Pilgrims trekking on a mountain path towards Shikharji summit."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="pilgrims trekking mountain"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Briefcase className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Curated Yatra Packages
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Experience a seamless and spiritually enriching pilgrimage to Shikharji with our all-inclusive packages. Focus on your devotion; we'll handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
          
          {/* Packages Section */}
          <section>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Packages</TabsTrigger>
                <TabsTrigger value="solo"><User className="mr-2"/>Solo</TabsTrigger>
                <TabsTrigger value="family"><Users className="mr-2"/>Family</TabsTrigger>
                <TabsTrigger value="senior"><Footprints className="mr-2"/>Seniors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                 </div>
              </TabsContent>
               <TabsContent value="solo">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.filter(p=>p.id==='solo').map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                 </div>
              </TabsContent>
              <TabsContent value="family">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.filter(p=>p.id==='family').map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                 </div>
              </TabsContent>
               <TabsContent value="senior">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {packages.filter(p=>p.id==='senior').map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                 </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Testimonials */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Words from Fellow Pilgrims</h2>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.name} className="shadow-lg border-0 bg-card/50">
                        <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-primary"/>)}
                            </div>
                            <blockquote className="text-muted-foreground italic">"{testimonial.comment}"</blockquote>
                        </CardContent>
                        <CardFooter className="flex-col items-start p-6 pt-0">
                            <p className="font-bold text-accent">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">({testimonial.package})</p>
                        </CardFooter>
                    </Card>
                ))}
             </div>
          </section>

           {/* FAQs */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={faq.question} className="bg-card/50 rounded-lg mb-2 px-4 shadow-sm border-0">
                        <AccordionTrigger className="text-lg font-headline hover:text-primary no-underline text-left">
                            <div className="flex items-center gap-3">
                                <HelpCircle className="h-5 w-5 text-primary"/>
                                {faq.question}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </section>

        </div>
      </div>
    </div>
  );
}


function PackageCard({ pkg }: { pkg: typeof packages[0]}) {
    return (
        <Card className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
            <CardHeader>
                <p className="font-semibold text-primary">{pkg.type}</p>
                <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                <p className="text-muted-foreground">{pkg.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="mb-4">
                    <span className="text-2xl font-bold text-accent">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground"> / {pkg.duration}</span>
                </div>
                <h4 className="font-semibold text-accent mb-2">What's Included:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.inclusions.map(item => (
                        <li key={item} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0"/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full font-headline">
                    <Link href="/contact">Book This Package</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
