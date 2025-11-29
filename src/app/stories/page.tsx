
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Feather, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { saints } from '@/lib/saints-data';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stories of Jain Saints & Sages | Shikharji Darshan',
  description: 'Read inspirational accounts from the lives of Jain masters like Acharya Vidyasagar, Kundakunda, and Hemachandra. Discover their teachings on compassion, wisdom, and renunciation.',
  openGraph: {
    title: 'Stories of Saints & Sages',
    description: 'Inspirational accounts from the lives of Jain masters that illuminate the path of righteousness.',
  },
};

export default function StoriesPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="p-3 bg-primary/20 rounded-full">
                <Feather className="h-8 w-8 text-primary" />
            </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Stories of Saints & Sages
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Inspirational accounts from the lives of Jain masters, whose teachings continue to illuminate the path of righteousness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saints.map((saint) => (
                <Card key={saint.id} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 hover:border-primary/50 hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                             <div className="p-3 bg-primary/10 rounded-full">
                                <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{saint.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{saint.lifespan}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p className="text-muted-foreground text-sm line-clamp-3">{saint.short_description}</p>
                        <div>
                            <h4 className="text-sm font-semibold text-accent mb-2">Core Themes:</h4>
                            <div className="flex flex-wrap gap-2">
                                {saint.core_themes.slice(0, 3).map(theme => (
                                    <Badge key={theme} variant="secondary">{theme}</Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                         <Button variant="link" className="p-0 h-auto text-primary font-bold" asChild>
                            <Link href={`/stories/${saint.id}`}>Read Full Story &rarr;</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
