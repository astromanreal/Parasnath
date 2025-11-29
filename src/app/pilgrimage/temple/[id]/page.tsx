
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Landmark, MapPin } from 'lucide-react';
import { getTempleById, pilgrimageRegions, getTemplesByRegion } from '@/lib/pilgrimage-data';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const temple = getTempleById(params.id);

  if (!temple) {
    return {
      title: 'Temple Not Found',
    };
  }

  return {
    title: `${temple.name} | Jain Tirth`,
    description: `Learn about the spiritual importance and location of ${temple.name}, a sacred Jain temple in ${temple.location}.`,
    openGraph: {
        title: temple.name,
        description: temple.importance,
        images: [temple.image],
    }
  };
}

export async function generateStaticParams() {
    const allTemples = pilgrimageRegions.flatMap(region => getTemplesByRegion(region.id));
    return allTemples.map((temple) => ({
      id: temple.id,
    }));
}

export default function TempleDetailPage({ params }: { params: { id: string } }) {
  const temple = getTempleById(params.id);

  if (!temple) {
    notFound();
  }
  
  const region = pilgrimageRegions.find(r => r.id === temple.region);

  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-8">
            <Button asChild variant="outline" className="font-headline">
                <Link href={`/pilgrimage/${temple.region}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to {region?.name || 'Region'}
                </Link>
            </Button>
        </div>

        <Card className="shadow-lg border-0">
            <CardHeader className="flex flex-col items-center space-y-4 text-center p-8 bg-primary/10">
                <div className="p-3 bg-background rounded-full border">
                    <Landmark className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                    {temple.name}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-2" />
                    <p className="text-lg">{temple.location}</p>
                </div>
            </CardHeader>
            <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-headline mb-4">Spiritual Importance</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {temple.importance}
                </p>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
