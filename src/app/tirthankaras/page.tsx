
import { Users, Search, Home, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { tirthankaras } from '@/lib/tirthankaras-data';
import { Badge } from '@/components/ui/badge';
import { getSymbolIcon } from '@/components/icons/tirthankara-icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The 24 Tirthankaras of Jainism | Shikharji Darshan',
  description: 'Discover the lives, symbols, and teachings of the 24 Tirthankaras of Jainism, from Lord Rishabhanatha to Lord Mahavira. Your complete guide to the spiritual victors.',
  openGraph: {
    title: 'The 24 Tirthankaras of Jainism',
    description: 'Explore the complete list of the 24 spiritual teachers who forged the path to liberation.',
  },
};

export default function TirthankarasPage() {
  return (
    <div className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="p-3 bg-primary/20 rounded-full">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            The 24 Tirthankaras
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Discover the lives and teachings of the spiritual victors of Jainism who have forged the path to liberation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tirthankaras.map((tirthankara) => {
            const Icon = getSymbolIcon(tirthankara.symbol);
            return (
              <Link key={tirthankara.id} href={`/tirthankaras/${tirthankara.id}`} className="group block">
                <Card className="flex flex-col h-full shadow-lg group-hover:shadow-primary/20 transition-all duration-300 border-0 overflow-hidden text-center items-center bg-card group-hover:border-primary/50 group-hover:-translate-y-1">
                  <CardHeader className="items-center w-full p-4 bg-primary/10">
                    <div className="p-3 bg-background/70 rounded-full mb-2">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                     <CardTitle className="font-headline text-xl pt-2">{tirthankara.number}. {tirthankara.name}</CardTitle>
                     <p className="font-body text-sm text-muted-foreground">{tirthankara.hindi_name}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-center items-center text-xs space-y-2 p-4">
                     <p className="text-sm text-accent font-semibold pt-1">{tirthankara.symbol}</p>
                     <Badge className="mt-2" style={{ backgroundColor: tirthankara.color.toLowerCase() === 'golden' ? '#FFD700' : tirthankara.color.toLowerCase(), color: ['golden', 'white', 'yellow'].includes(tirthankara.color.toLowerCase()) ? '#333' : '#fff' }}>
                          {tirthankara.color}
                      </Badge>
                  </CardContent>
                  <CardFooter className="w-full bg-secondary/30 p-2 mt-auto">
                    <p className="w-full font-bold text-primary text-sm group-hover:underline">
                      View Details &rarr;
                    </p>
                  </CardFooter>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
