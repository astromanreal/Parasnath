
import { saints } from '@/lib/saints-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Landmark, Feather, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const saint = saints.find((s) => s.id === params.slug);

  if (!saint) {
    return {
      title: 'Story Not Found',
    };
  }

  return {
    title: `The Story of ${saint.name} | Jain Saints`,
    description: `Discover the life, teachings, and legacy of ${saint.name}. ${saint.short_description}`,
    openGraph: {
        title: `The Story of ${saint.name}`,
        description: saint.short_description,
        images: saint.media.images[0]?.url ? [saint.media.images[0].url] : [],
    }
  };
}


export async function generateStaticParams() {
  return saints.map((saint) => ({
    slug: saint.id,
  }));
}

export default function SaintStoryPage({ params }: { params: { slug:string } }) {
  const saint = saints.find((s) => s.id === params.slug);
  
  if (!saint) {
    notFound();
  }

  const currentIndex = saints.findIndex((s) => s.id === params.slug);
  const nextSaint = saints[(currentIndex + 1) % saints.length];
  
  const otherSaints = saints.filter((s) => s.id !== params.slug).slice(0, 3);

  const biographyEntries = Object.entries(saint.full_story.biography);

  return (
    <div className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8 flex justify-between items-center">
            <Button asChild variant="outline" className="font-headline">
                <Link href="/stories">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Stories
                </Link>
            </Button>
            {nextSaint && (
              <Button asChild variant="outline" className="font-headline">
                <Link href={`/stories/${nextSaint.id}`}>
                    Next Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
        </div>

        <article className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <header className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              {saint.media.images[0]?.url && (
                  <Image 
                      src={saint.media.images[0].url} 
                      alt={saint.media.images[0].alt || `Portrait of ${saint.name}, a revered Jain saint.`}
                      width={400} 
                      height={400} 
                      className="rounded-lg object-cover w-full aspect-square"
                      data-ai-hint="saint portrait"
                  />
              )}
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary mb-2">
                {saint.name}
              </h1>
              {saint.lifespan && <p className="text-muted-foreground text-xl mb-4">{saint.lifespan}</p>}
              <div className="flex flex-wrap gap-2">
                  {saint.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </div>
          </header>
          
          <div className="font-body text-lg leading-relaxed space-y-12">
            
            <section>
                <h2 className="font-headline text-3xl border-b pb-2 mb-6 flex items-center gap-3"><BookOpen className="text-primary"/>Biography</h2>
                <div className="space-y-6">
                {biographyEntries.map(([key, value]) => (
                    <div key={key}>
                        <h3 className="font-headline text-xl text-accent mb-1 capitalize">{key.replace(/_/g, ' ')}</h3>
                        <p className="text-muted-foreground">{value}</p>
                    </div>
                ))}
                </div>
            </section>
            
            <section>
                <h2 className="font-headline text-3xl border-b pb-2 mb-6 flex items-center gap-3"><Feather className="text-primary"/>Key Teachings</h2>
                <ul className="list-none space-y-4">
                {saint.full_story.key_teachings.map((teaching, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <span className="text-primary mt-1">&rarr;</span>
                        <span className="text-muted-foreground">{teaching}</span>
                    </li>
                ))}
                </ul>
            </section>

             {saint.quotes && saint.quotes.length > 0 && (
                <section>
                    <h2 className="font-headline text-3xl border-b pb-2 mb-6 flex items-center gap-3"><MessageCircle className="text-primary"/>Quotes</h2>
                    <div className="space-y-6">
                    {saint.quotes.map((quote, index) => (
                        <blockquote key={index} className="border-l-4 border-primary pl-6 italic text-muted-foreground text-xl relative">
                             <p>"{quote}"</p>
                        </blockquote>
                    ))}
                    </div>
                </section>
            )}

            <div className="grid md:grid-cols-2 gap-12 pt-6">
                <section>
                    <h2 className="font-headline text-3xl border-b pb-2 mb-6 flex items-center gap-3"><Landmark className="text-primary"/>Legacy</h2>
                    <div className="space-y-6">
                      {Object.entries(saint.full_story.legacy).map(([key, value]) => (
                          <div key={key}>
                              <h3 className="font-headline text-xl text-accent mb-1 capitalize">{key.replace(/_/g, ' ')}</h3>
                              <p className="text-muted-foreground">{value}</p>
                          </div>
                      ))}
                    </div>
                </section>
                <section>
                    <h2 className="font-headline text-3xl border-b pb-2 mb-6 flex items-center gap-3"><MapPin className="text-primary"/>Associated Places</h2>
                    <div className="space-y-4">
                      {saint.associated_places.map((place, index) => (
                          <div key={index} className="flex items-center gap-3">
                              <MapPin className="text-primary/50 w-5 h-5"/>
                              <div>
                                  <p className="font-semibold">{place.place_name}</p>
                                  <p className="text-sm text-muted-foreground">{place.relation}</p>
                              </div>
                          </div>
                      ))}
                    </div>
                </section>
            </div>
          </div>
        </article>

        {otherSaints.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-3xl font-bold tracking-tighter font-headline mb-8 text-center">More Stories You May Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherSaints.map((story) => (
                    <Card key={story.id} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0">
                        <CardHeader>
                            <CardTitle className="font-headline">{story.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground text-sm line-clamp-4">{story.short_description}</p>
                        </CardContent>
                        <CardFooter>
                             <Button variant="link" className="p-0 h-auto text-primary font-bold" asChild>
                                <Link href={`/stories/${story.id}`}>Read Full Story &rarr;</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
        )}
      </div>
    </div>
  );
}
