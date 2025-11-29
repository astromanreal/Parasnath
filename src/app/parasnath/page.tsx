
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mountain, Route, MapPin, Footprints, Clock, Wind, Sun, Moon, CheckCircle2, XCircle, Landmark, BookOpen, Star, Globe, TrendingUp, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parasnath Mountain Trekking Guide | Shikharji Darshan',
  description: 'A comprehensive guide to trekking Parasnath Mountain (Shikharji). Explore routes, sacred Tonks, preparation tips, and the spiritual significance of this Jain Tirth.',
  openGraph: {
    title: 'Your Guide to Trekking Parasnath Mountain (Shikharji)',
    description: 'Everything you need to know for a sacred ascent to the summit where 20 Tirthankaras attained moksha.',
    images: ['/og/parasnath.jpg'],
  },
};

const keyInfo = {
  religion: {
    title: 'Religion',
    icon: Landmark,
    details: [
      { label: 'Affiliation', value: 'Jainism' },
      { label: 'Deity', value: 'Tirthankar' },
      { label: 'Festivals', value: 'Paryushana' },
    ],
  },
  location: {
    title: 'Location',
    icon: Globe,
    details: [
      { label: 'Location', value: 'Giridih, Jharkhand, India' },
      { label: 'Coordinates', value: '23°57′40″N 86°8′13.5″E' },
    ],
  },
  geography: {
    title: 'Geography',
    icon: TrendingUp,
    details: [
        { label: 'Elevation', value: '1,365 m (4,478 ft)' },
    ]
  },
};


const trekkingRoutes = [
  {
    icon: Route,
    title: "Madhuban Route (East)",
    distance: "~27 km (to and fro)",
    description: "The traditional and most frequented pilgrimage path starting from Madhuban village. It covers all major Tonks and offers a spiritually immersive journey through forests and scenic points.",
    bestFor: "Traditional pilgrims, comprehensive Tonk darshan.",
    difficulty: "Moderate to Hard",
  },
  {
    icon: Route,
    title: "Isri Bazaar Route (West)",
    distance: "~9 km one way",
    description: "A steeper but shorter and more direct route, often preferred by trekkers looking for a quicker ascent. It has fewer Tonks directly on the path but offers stunning views.",
    bestFor: "Trekkers, those short on time.",
    difficulty: "Hard",
  },
];

const tonks = [
  {
    tonkNumber: 1,
    tirthankara: "Gautam Swami",
    description: "The first shrine marks the beginning of the sacred ascent, dedicated to Lord Mahavira's chief disciple."
  },
  {
    tonkNumber: 2,
    tirthankara: "Kunthunath",
    description: "The 17th Tirthankara, who was also a Chakravartin, attained liberation here, symbolizing victory over karma."
  },
  {
    tonkNumber: 3,
    tirthankara: "Rishabhanatha (Adinath)",
    description: "Though his primary moksha sthali is Ashtapad, this Tonk honors the first Tirthankara's presence on the sacred hill."
  },
  {
    tonkNumber: 4,
    tirthankara: "Chandranan",
    description: "This Tonk is dedicated to Chandranan, one of the eternal Tirthankaras."
  },
  {
    tonkNumber: 5,
    tirthankara: "Neminath",
    description: "The 22nd Tirthankara, a cousin of Lord Krishna, renounced worldly life to attain moksha here."
  }
];

const preparationDos = [
    "Carry a valid ID and emergency contacts.",
    "Start the trek early morning (around 2-3 AM) to avoid heat.",
    "Stay hydrated. Carry your own water bottle or purchase along the way.",
    "Wear comfortable trekking shoes if allowed, or walk barefoot with care.",
    "Respect the sanctity of the place. Maintain silence and chant mantras.",
];

const preparationDonts = [
    "Do not carry or consume any leather items, non-vegetarian food, alcohol, or tobacco.",
    "Do not litter. Keep the sacred mountain clean.",
    "Avoid loud music or conversations. It's a place of spiritual reflection.",
    "Do not pluck flowers or harm any living being.",
    "Avoid photography inside the sacred Tonk areas.",
];

const landmarks = [
    {
        icon: Landmark,
        name: "Jal Mandir",
        description: "A serene temple located at the base in Madhuban, often the starting point of the pilgrimage."
    },
    {
        icon: Footprints,
        name: "Charan Paduka",
        description: "Sacred spots marked with the footprints of Tirthankaras, ideal for meditation."
    },
     {
        icon: Landmark,
        name: "Gautam Swami Tonk",
        description: "The first major shrine on the trek, dedicated to the chief disciple of Lord Mahavira."
    },
]

export default function ParasnathPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image 
              src="https://i.pinimg.com/1200x/0c/ab/fa/0cabfa36e665f82e0e4aece363c3fed4.jpg"
              alt="Parasnath Mountain peak with clouds, a sacred Jain Tirth for trekking."
              layout="fill"
              objectFit="cover"
              data-ai-hint="sacred mountain cloudy"
              priority
          />
        </div>
        <div className="container px-4 md:px-6 py-12 md:py-16 text-center">
           <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Mountain className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Parasnath Mountain Guide
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A sacred ascent into divinity and endurance. Your comprehensive guide to trekking Shri Sammed Shikharji.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
          
          {/* Key Info Section */}
          <section>
            <div className="text-center mb-12">
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                    <Badge variant="secondary">Sammet Shikharji</Badge>
                    <Badge variant="secondary">Shikharji</Badge>
                    <Badge variant="secondary">Jain Temples at Shikarji</Badge>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-lg border-0 bg-card/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <keyInfo.religion.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">{keyInfo.religion.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {keyInfo.religion.details.map(detail => (
                            <div key={detail.label} className="flex justify-between text-muted-foreground">
                                <span className="font-semibold text-accent">{detail.label}:</span>
                                <span>{detail.value}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                 <Card className="shadow-lg border-0 bg-card/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <keyInfo.location.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">{keyInfo.location.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {keyInfo.location.details.map(detail => (
                            <div key={detail.label} className="flex justify-between text-muted-foreground">
                                <span className="font-semibold text-accent">{detail.label}:</span>
                                <span>{detail.value}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                 <Card className="shadow-lg border-0 bg-card/50">
                    <CardHeader className="flex-row items-center gap-4">
                        <keyInfo.geography.icon className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">{keyInfo.geography.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {keyInfo.geography.details.map(detail => (
                            <div key={detail.label} className="flex justify-between text-muted-foreground">
                                <span className="font-semibold text-accent">{detail.label}:</span>
                                <span>{detail.value}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
          </section>

          {/* Overview Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">The Sacred Summit</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Parasnath Mountain, revered as Sammed Shikharji, is the paramount Jain pilgrimage site where 20 of the 24 Tirthankaras attained moksha (liberation). Located in Jharkhand, this sacred hill is not just a trek; it's a journey of faith, endurance, and spiritual purification that draws millions of devotees from around the world.
            </p>
          </section>

          {/* Trekking Routes */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Trekking Routes</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                Two primary paths lead to the summit. Choose the one that aligns with your spiritual and physical goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {trekkingRoutes.map((route) => (
                <Card key={route.title} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                  <CardHeader className="flex-row items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                        <route.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-2xl">{route.title}</CardTitle>
                        <p className="font-semibold text-primary">{route.distance}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{route.description}</p>
                    <p><strong className="text-accent">Best For:</strong> {route.bestFor}</p>
                    <p><strong className="text-accent">Difficulty:</strong> {route.difficulty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* The Sacred Tonks */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">The Sacred Tonks</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                The pilgrimage involves visiting the 20 Tonks (footprint shrines) where the Tirthankaras attained moksha.
              </p>
            </div>
             <Accordion type="single" collapsible className="w-full">
                {tonks.map((tonk, index) => (
                    <AccordionItem value={`item-${index}`} key={tonk.tirthankara} className="bg-card/50 rounded-lg mb-2 px-4 shadow-sm border-0">
                    <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline">
                        <div className="flex items-center gap-4">
                           <Footprints className="h-6 w-6 text-primary"/>
                           <span>Tonk #{tonk.tonkNumber}: {tonk.tirthankara}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-muted-foreground">
                        {tonk.description}
                    </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </section>

           {/* Landmarks */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Important Landmarks</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {landmarks.map((landmark) => (
                         <Card key={landmark.name} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card text-center">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <landmark.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{landmark.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{landmark.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

          {/* Preparation Guide */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Preparation Guide</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                A sacred journey requires mindful preparation. Follow these guidelines to ensure a safe and spiritually fulfilling pilgrimage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg border-0 bg-card/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl text-green-600"><CheckCircle2/>Do's</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-none space-y-3 text-muted-foreground">
                           {preparationDos.map((item, index) => <li key={index} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 mt-1 shrink-0"/><span>{item}</span></li>)}
                        </ul>
                    </CardContent>
                </Card>
                <Card className="shadow-lg border-0 bg-card/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline text-2xl text-destructive"><XCircle/>Don'ts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-none space-y-3 text-muted-foreground">
                           {preparationDonts.map((item, index) => <li key={index} className="flex items-start gap-3"><XCircle className="h-5 w-5 text-destructive mt-1 shrink-0"/><span>{item}</span></li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </section>

          {/* Spiritual Significance */}
          <section>
             <Card className="shadow-lg border-0 bg-primary/10">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl flex items-center gap-3"><BookOpen className="text-primary"/>Spiritual &amp; Historical Significance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground text-lg">
                    <p>Shikharji is mentioned in ancient texts like the Kalpasutra. The act of climbing the mountain symbolizes the soul's journey of shedding karma. Each step taken with devotion is considered a form of penance (tapasya).</p>
                    <p>The mountain's name, 'Parasnath', is derived from the 23rd Tirthankara, Parshvanatha, who attained moksha here. The site's sanctity was recently reaffirmed by the 'Save Shikharji' movement, where the Jain community successfully protested government plans to commercialize the hill for tourism, ensuring its status as a sacred place of worship is preserved.</p>
                </CardContent>
             </Card>
          </section>

        </div>
      </div>
    </div>
  );
}
