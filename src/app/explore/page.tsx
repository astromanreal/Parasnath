
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Compass, Bot, Map, Mountain, Users, BookOpen, Feather, Landmark, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore All Features | Shikharji Darshan',
  description: 'Discover all the tools and guides available on Shikharji Darshan, including our AI Itinerary Planner, Shikharji Guide, Tirthankara profiles, and more.',
  openGraph: {
    title: 'Explore Shikharji Darshan',
    description: 'Discover all the tools and guides available to make your spiritual journey profound and seamless.',
  },
};

const features = [
  {
    icon: Bot,
    title: "My Journey",
    description: "Your personal dashboard to plan, track, and reflect on your sacred pilgrimage with our AI assistant.",
    href: "/itinerary",
    cta: "Plan Your Journey",
  },
  {
    icon: Map,
    title: "Shikharji Guide",
    description: "Your complete travel and spiritual support partner for the sacred Sammed Shikharji pilgrimage.",
    href: "/shikharji",
    cta: "Explore Guide",
  },
  {
    icon: Mountain,
    title: "Parasnath Mountain",
    description: "A sacred ascent into divinity and endurance. Your comprehensive guide to trekking Shri Sammed Shikharji.",
    href: "/parasnath",
    cta: "View Trek Guide",
  },
   {
    icon: Landmark,
    title: "Madhuban City",
    description: "The sacred base of Shikharji, home to timeless spiritual architecture and the starting point of a divine journey.",
    href: "/madhuban",
    cta: "Discover Madhuban",
  },
  {
    icon: Users,
    title: "All Tirthankaras",
    description: "Discover the lives and teachings of the 24 spiritual victors of Jainism who forged the path to liberation.",
    href: "/tirthankaras",
    cta: "View Tirthankaras",
  },
   {
    icon: Globe,
    title: "Global Pilgrimage Guide",
    description: "Discover sacred Jain Tirths across continents—from the holy lands of India to ancient sites across Asia.",
    href: "/pilgrimage",
    cta: "Explore Sites",
  },
  {
    icon: BookOpen,
    title: "Jain Dharma Guide",
    description: "Explore the timeless wisdom of Jainism, from its profound philosophies to its sacred scriptures.",
    href: "/dharma",
    cta: "Learn Dharma",
  },
  {
    icon: Feather,
    title: "Stories of Saints",
    description: "Inspirational accounts from the lives of Jain masters, whose teachings continue to illuminate the path.",
    href: "/stories",
    cta: "Read Stories",
  },
   {
    icon: Heart,
    title: "Spiritual Offerings",
    description: "Enrich your journey with our hand-picked spiritual services, products, and offerings.",
    href: "/services",
    cta: "View Offerings",
  },
];


export default function ExplorePage() {
  return (
    <div className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="p-3 bg-primary/20 rounded-full">
                <Compass className="h-8 w-8 text-primary" />
            </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Explore Shikharji Darshan
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Discover all the tools and guides available to make your spiritual journey profound and seamless.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <Card key={feature.title} className="flex flex-col text-center items-center shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-2">
                            <feature.icon className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                    <CardFooter className="w-full p-6">
                        <Button asChild className="w-full font-headline">
                            <Link href={feature.href}>
                                {feature.cta}
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
