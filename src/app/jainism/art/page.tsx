
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Palette, Gem, TowerControl, Brush, Layers3, HandHeart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jain Art & Architecture | Shikharji Darshan',
  description: 'Explore centuries of non-violent symbolism and exquisite craftsmanship in Jain sculpture, architecture (Dilwara, Ranakpur), and miniature paintings.',
  openGraph: {
    title: 'Jain Art & Architecture',
    description: 'Discover the profound philosophy behind Jain art, from serene Tirthankara idols to magnificent temple complexes.',
    images: ['/og/jain-art.jpg'],
  },
};

const artForms = [
  {
    icon: Gem,
    title: "Sculpture",
    description: "Tirthankara idols in meditative postures (Padmasana, Kayotsarga), crafted from marble and granite, embodying peace and detachment.",
    link: "#sculpture"
  },
  {
    icon: TowerControl,
    title: "Architecture",
    description: "From intricate Shikhar-bandhi temples and cave shrines to towering Manastambha pillars, reflecting cosmic and spiritual symmetry.",
    link: "#architecture"
  },
  {
    icon: Brush,
    title: "Paintings",
    description: "Vibrant miniature paintings in palm-leaf manuscripts and murals, depicting scenes from the Kalpasutra and lives of Tirthankaras.",
    link: "#paintings"
  },
  {
    icon: Layers3,
    title: "Symbolism",
    description: "A rich visual language of emblems like the Swastika, Nandavarta, and the specific symbols of each of the 24 Tirthankaras.",
    link: "#symbolism"
  }
];

const featuredTemples = [
  {
    name: "Dilwara Temples",
    location: "Mount Abu, Rajasthan",
    highlight: "Renowned for their extraordinary use of marble and intricate, lace-like carvings, especially the lotus-bud ceilings.",
    image: "https://placehold.co/800x600.png",
    imageHint: "intricate marble carving ceiling"
  },
  {
    name: "Ranakpur Jain Temple",
    location: "Ranakpur, Rajasthan",
    highlight: "Famous for its 1,444 uniquely carved marble pillars, no two of which are alike, and its grand Chaturmukha (four-faced) shrine.",
    image: "https://placehold.co/800x600.png",
    imageHint: "marble pillars temple"
  },
  {
    name: "Gommateshwara Statue",
    location: "Shravanabelagola, Karnataka",
    highlight: "A colossal 57-foot monolithic statue of Bahubali, symbolizing peace, non-violence, and renunciation. It's one of the largest free-standing statues in the world.",
    image: "https://placehold.co/800x600.png",
    imageHint: "colossal statue"
  },
  {
    name: "Palitana Temples",
    location: "Shatrunjaya Hills, Gujarat",
    highlight: "A city of over 900 temples on a sacred hill, making it one of the most significant pilgrimage sites, showcasing centuries of Jain architectural evolution.",
    image: "https://placehold.co/800x600.png",
    imageHint: "temple city mountain"
  }
];

const artPhilosophy = [
    {
        icon: HandHeart,
        title: "Ahimsa in Art",
        description: "Jain art avoids aggressive or worldly themes, focusing instead on serene, detached figures and symbols that inspire peace and non-violence.",
    },
    {
        icon: Sparkles,
        title: "Purity of Form",
        description: "The pristine and often unadorned forms of Tirthankara idols represent the soul's pure, liberated state, detached from worldly ornamentation.",
    },
    {
        icon: Palette,
        title: "Symbolic Storytelling",
        description: "Every element, from a Tirthankara's emblem to temple floor plans, is a deliberate symbol meant to narrate cosmic truths and guide the soul.",
    }
]

export default function ArtPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
         <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Intricate marble ceiling of a Jain temple, symbolizing spiritual art."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="intricate marble carving"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Palette className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Jain Art
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Explore centuries of non-violent symbolism and exquisite craftsmanship in Jain sculpture, architecture, and paintings.
            </p>
          </div>
        </div>
      </section>

       {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
            
            {/* Introduction */}
            <section className="text-center">
                 <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Jain art reflects the soul's pursuit of liberation. Rooted in Ahimsa (non-violence) and Aparigraha (non-possessiveness), it avoids worldly or aggressive themes, focusing instead on peace, detachment, and transcendence. The emphasis on geometric precision and symbolic storytelling creates a serene, sacred experience for the viewer.
                </p>
            </section>

            {/* Major Forms of Art */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Major Forms of Jain Art</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {artForms.map((form) => (
                        <Card key={form.title} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <form.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{form.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{form.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Featured Temple Gallery */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Featured Temple Architecture</h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Discover some of the most architecturally significant Jain temples, renowned for their beauty and spiritual importance.
                    </p>
                </div>
                <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
                    <CarouselContent>
                        {featuredTemples.map((temple) => (
                        <CarouselItem key={temple.name}>
                            <Card className="overflow-hidden border-0 shadow-xl">
                                <div className="grid md:grid-cols-2">
                                    <div className="relative w-full h-64 md:h-auto">
                                        <Image
                                            src={temple.image}
                                            alt={`Architectural marvel of ${temple.name}`}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={temple.imageHint}
                                        />
                                    </div>
                                    <div className="p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold font-headline text-primary">{temple.name}</h3>
                                        <p className="text-sm text-muted-foreground font-semibold mb-4">{temple.location}</p>
                                        <p className="text-muted-foreground">{temple.highlight}</p>
                                    </div>
                                </div>
                            </Card>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-50px]" />
                    <CarouselNext className="right-[-50px]" />
                </Carousel>
            </section>

            {/* Jain Art Philosophy */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">The Philosophy Behind the Art</h2>
                     <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Jain art is a visual manifestation of its core principles.
                    </p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {artPhilosophy.map((philosophy) => (
                        <Card key={philosophy.title} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card text-center">
                        <CardHeader className="items-center">
                            <div className="p-3 bg-primary/10 rounded-full mb-2">
                                <philosophy.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">{philosophy.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{philosophy.description}</p>
                        </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

             {/* Related Topics */}
            <section className="text-center pt-8 border-t">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Continue Your Journey</h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button asChild variant="outline">
                        <Link href="/jainism/cosmology">Explore Cosmology</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/tirthankaras">Discover the Tirthankaras</Link>
                    </Button>
                     <Button asChild variant="outline">
                        <Link href="/dharma">Learn Jain Principles</Link>
                    </Button>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
