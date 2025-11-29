
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { pilgrimageRegions } from '@/lib/pilgrimage-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Jain Pilgrimage Guide | Shikharji Darshan',
  description: 'Discover sacred Jain Tirths across continents. Explore historic temples in India, Pakistan, and other parts of Asia, as well as modern Jain centers worldwide.',
  openGraph: {
    title: 'Global Jain Pilgrimage Sites',
    description: 'From Shikharji to Palitana and beyond, explore the world\'s most sacred Jain temples.',
    images: ['/og/global-pilgrimage.jpg'],
  },
};

export default function PilgrimagePage() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="p-3 bg-primary/20 rounded-full">
                <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Global Jain Pilgrimage Sites
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Discover sacred Jain Tirths across continents—from the holy lands of India to ancient sites across Asia.
            </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-8">
          {pilgrimageRegions.map((region) => (
            <Link key={region.id} href={`/pilgrimage/${region.id}`} className="group block">
                <Card className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 h-full flex flex-col group-hover:-translate-y-1">
                    <div className="relative w-full h-56">
                        <Image src={region.image} alt={`A representation of Jain temples in ${region.name}`} fill className="object-cover" data-ai-hint={region.imageHint} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardHeader className="p-6">
                        <CardTitle className="font-headline text-2xl text-primary group-hover:underline">{region.name}</CardTitle>
                        <p className="text-muted-foreground pt-2">{region.description}</p>
                    </CardHeader>
                    <CardContent className="mt-auto p-6 pt-0">
                        <div className="flex items-center font-bold text-primary">
                            Explore Sites <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
