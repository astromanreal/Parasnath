
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Landmark, MapPin } from 'lucide-react';
import { pilgrimageRegions, getTemplesByRegion } from '@/lib/pilgrimage-data';
import type { Metadata } from 'next';

type Props = {
  params: { region: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const regionId = params.region;
  const region = pilgrimageRegions.find(r => r.id === regionId);

  if (!region) {
    return {
      title: 'Region Not Found',
      description: 'The requested pilgrimage region does not exist.',
    };
  }

  return {
    title: `Jain Temples in ${region.name} | Shikharji Darshan`,
    description: `Explore sacred Jain pilgrimage sites and temples located in ${region.name}. ${region.description}`,
    openGraph: {
        title: `Pilgrimage Sites in ${region.name}`,
        description: region.description,
        images: [region.image],
    }
  };
}

export async function generateStaticParams() {
  return pilgrimageRegions.map((region) => ({
    region: region.id,
  }));
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const regionId = params.region;
  const region = pilgrimageRegions.find(r => r.id === regionId);
  const temples = getTemplesByRegion(regionId);

  if (!region) {
    notFound();
  }

  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
            <Button asChild variant="outline" className="font-headline">
                <Link href="/pilgrimage">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Regions
                </Link>
            </Button>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="p-3 bg-primary/20 rounded-full">
                <Landmark className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Pilgrimage Sites in {region.name}
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                {region.description}
            </p>
        </div>

        {temples.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temples.map((temple) => (
                <Card key={temple.id} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{temple.name}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground pt-2">
                           <MapPin className="w-4 h-4 mr-2" />
                           <span>{temple.location}</span>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm line-clamp-3">{temple.importance}</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="link" className="p-0 h-auto text-primary font-bold" asChild>
                            <Link href={`/pilgrimage/temple/${temple.id}`}>Learn More &rarr;</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
            </div>
        ) : (
            <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Temple data for this region is coming soon.</p>
            </div>
        )}
      </div>
    </div>
  );
}
