
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Landmark, Map, Search, Mountain, BedDouble, UtensilsCrossed, Instagram, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Madhuban Guide - Temples, Dharamshalas & More | Shikharji Darshan',
  description: 'Explore Madhuban, the sacred base city for the Shikharji pilgrimage. Discover hundreds of Jain temples, dharamshalas, and facilities for a peaceful yatra.',
  openGraph: {
    title: 'Madhuban – The City of Jain Temples at Shikharji',
    description: 'Your guide to the spiritual architecture and facilities at the base of Parasnath hill.',
    images: ['/og/madhuban.jpg'], 
  },
};

const temples = [
  {
    id: 1,
    name: "Taleti Tirth Dharamshala & Mandir",
    type: "Shwetambar/Digambar Complex",
    description: "Large campus with 24-Tirthankara idols in separate shrines, Gufa Mandir, Dharamshala with hot water & mess.",
    image: "https://placehold.co/600x400.png",
    imageHint: "large temple campus"
  },
  {
    id: 2,
    name: "Samedshikhar Parshwanath Jain Tirth",
    type: "Digambar Temple",
    description: "Sacred tonk-site where Lord Parshvanath attained moksha; highly revered pilgrimage spot.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sacred pilgrimage spot"
  },
  {
    id: 3,
    name: "Shree Rajrajeshwar Parshwanath Jinalay",
    type: "Digambar/Shwetambar Temple",
    description: "Under-construction temple with magnificent idols and strong spiritual architecture.",
    image: "https://placehold.co/600x400.png",
    imageHint: "temple architecture"
  },
  {
    id: 4,
    name: "Jain Museum, Madhuban",
    type: "Museum",
    description: "Museum housing artifacts, manuscripts, idols, plus a telescope view of Parasnath summit.",
    image: "https://placehold.co/600x400.png",
    imageHint: "museum artifacts"
  },
  {
    id: 5,
    name: "Jain Mandir (Chirki Road)",
    type: "Jain Temple",
    description: "Serene local temple commonly visited en route to Parasnath.",
    image: "https://placehold.co/600x400.png",
    imageHint: "serene local temple"
  },
  {
    id: 6,
    name: "Kalikund Dham",
    type: "Jain Temple",
    description: "High-rated sacred temple, locally known for spiritual ambiance.",
    image: "https://placehold.co/600x400.png",
    imageHint: "sacred temple"
  },
  {
    id: 7,
    name: "Shamosharan Temple",
    type: "Ancient Temple",
    description: "One of the oldest Jain temples in Madhuban, dating back ~2000 years.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient temple"
  },
  {
    id: 8,
    name: "Bhomiyaji Asthan",
    type: "Temple",
    description: "Well-known spiritual site popular with pilgrims visiting Shikharji.",
    image: "https://placehold.co/600x400.png",
    imageHint: "spiritual site"
  },
  {
    id: 9,
    name: "Dharam Mangal Vidyapith Temple",
    type: "Modern Temple",
    description: "Newer temple complex constructed near Madhuban’s eastern section.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern temple complex"
  },
  {
    id: 10,
    name: "Dak Bungalow Area Temple Cluster",
    type: "Temple Group",
    description: "Historic temples around the old dak bungalow — starting point for Nimiaghat/Madhuban walk.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic temple cluster"
  },
  {
    id: 11,
    name: "Gunayatan Society Temple & Dharamshala",
    type: "Temple & Dharamshala",
    description: "Recently built temple-dharamshala complex offering modern amenities.",
    image: "https://placehold.co/600x400.png",
    imageHint: "modern temple dharamshala"
  },
  {
    id: 12,
    name: "Shwetambar Society Temple (Samautsaran)",
    type: "Shwetambar Temple",
    description: "Site of significant festivals like Anjan Shalaka and Panchkalyanak.",
    image: "https://placehold.co/600x400.png",
    imageHint: "festival temple"
  },
  {
    id: 13,
    name: "Bhomiaji Jain Mandir",
    type: "Local Temple",
    description: "Largely frequented by travelers and close to main road to Parasnath.",
    image: "https://placehold.co/600x400.png",
    imageHint: "local mandir"
  },
  {
    id: 14,
    name: "Tees Chaubisi Jain Mandir",
    type: "Temple",
    description: "Dedicated to the 30–24 = 6 Tirthankaras; a spiritual milestone for pilgrims.",
    image: "https://placehold.co/600x400.png",
    imageHint: "spiritual milestone"
  },
  {
    id: 15,
    name: "Modi Jain Temple",
    type: "Local Temple",
    description: "Prominent temple maintained by local Jain families.",
    image: "https://placehold.co/600x400.png",
    imageHint: "family temple"
  }
];

const specialPoints = [
    {
        icon: Mountain,
        title: "Base for Shikharji",
        description: "It is the primary starting point for the sacred 27 km pilgrimage trek to the summit of Shikharji.",
    },
    {
        icon: Landmark,
        title: "City of Temples",
        description: "Home to hundreds of exquisite Digambar and Shwetambar temples, each with unique architecture.",
    },
    {
        icon: BedDouble,
        title: "Pilgrim-Friendly",
        description: "Offers numerous Dharamshalas and Bhojnalayas, providing pure and affordable facilities for pilgrims.",
    },
    {
        icon: UtensilsCrossed,
        title: "Spiritual Hub",
        description: "A vibrant center for religious events, discourses, and Paryushan preparations, attracting seekers globally.",
    }
]

export default function MadhubanPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-24 bg-accent/10 text-center">
        <Image 
            src="https://i.pinimg.com/736x/84/ff/3b/84ff3bb5706ae7a3d4f71b88b7868608.jpg"
            alt="Serene view of Madhuban temples at the base of Parasnath hill"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            data-ai-hint="temple town"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Landmark className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Madhuban – The City of Jain Temples
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              The sacred base of Shikharji, home to timeless spiritual architecture and the starting point of a divine journey.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="flex flex-col items-center gap-4 bg-background/50 p-6 rounded-lg shadow-inner">
                <Instagram className="h-8 w-8 text-primary"/>
                <h3 className="font-headline text-2xl text-accent">Explore Madhuban Visually</h3>
                <p className="text-muted-foreground">Discover over 2,000 images and videos of Madhuban's temples, streets, and spiritual life on our Instagram.</p>
                <Button asChild>
                    <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer">
                       View Gallery on Instagram
                    </Link>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 space-y-24">
            
            {/* Why Madhuban is Special Section */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Why Madhuban is Special</h2>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialPoints.map((point) => (
                        <Card key={point.title} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <point.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{point.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            
            {/* Temple Showcase */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Explore the Temples of Madhuban</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Discover the architectural marvels and spiritual sanctuaries that adorn this holy city.
                    </p>
                </div>
                 {/* Search and Filter Placeholder */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center p-4 bg-card/50 rounded-lg">
                    <div className="relative w-full md:w-1/2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input placeholder="Search for a temple..." className="w-full pl-10 pr-4 py-2 rounded-md border" />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">All</Button>
                        <Button variant="outline">Digambar</Button>
                        <Button variant="outline">Swetambar</Button>
                        <Button variant="ghost"><Map className="mr-2 h-4 w-4"/> Map View</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {temples.map((temple) => (
                    <Card key={temple.name} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                        <CardHeader className="flex-grow">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="font-headline text-xl">{temple.name}</CardTitle>
                                    <Badge variant="secondary" className="mt-2">{temple.type}</Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm line-clamp-3">{temple.description}</p>
                        </CardContent>
                        <div className="p-6 pt-2 mt-auto">
                            <Button variant="link" className="p-0 h-auto font-bold text-primary">
                                Know More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button size="lg" className="font-headline">
                        <Link href="/shikharji">Plan Your Visit to Madhuban</Link>
                    </Button>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
}
