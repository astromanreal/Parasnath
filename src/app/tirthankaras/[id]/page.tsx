
import { tirthankaras } from '@/lib/tirthankaras-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
    ArrowLeft, BookOpen, MapPin, User, Shield, Gem, Trees, Home, Mountain, 
    Heart, Users, Scale, Calendar, Anchor, Book, Landmark, GitCommit,
    Sparkles, Palette, Crown, Library, Feather
} from 'lucide-react';
import { getSymbolIcon } from '@/components/icons/tirthankara-icons';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const tirthankara = tirthankaras.find((t) => t.id === id);

  if (!tirthankara) {
    return {
      title: 'Tirthankara Not Found',
    };
  }

  const description = `Learn about the ${tirthankara.number}th Tirthankara, ${tirthankara.name}. Discover their symbol (${tirthankara.symbol}), life, teachings, and place of moksha.`;

  return {
    title: `${tirthankara.name} - The ${tirthankara.number}th Tirthankara of Jainism`,
    description: description,
    openGraph: {
      title: `Life and Teachings of ${tirthankara.name}`,
      description: `Discover the symbol, color, parents, and key teachings of ${tirthankara.name}.`,
      images: tirthankara.media?.images[0]?.url ? [tirthankara.media.images[0].url] : [],
    },
  };
}

export async function generateStaticParams() {
  return tirthankaras.map((tirthankara) => ({
    id: tirthankara.id,
  }));
}

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value?: string }) => (
    value ? (
        <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
            <div className="text-primary">{icon}</div>
            <div>
                <p className="font-semibold text-accent">{label}</p>
                <p className="text-muted-foreground">{value}</p>
            </div>
        </div>
    ) : null
);

const DetailRow = ({ label, value }: { label: string, value?: string }) => (
    value ? (
        <div className="flex justify-between py-2 border-b border-border/50">
            <dt className="font-semibold text-accent">{label}</dt>
            <dd className="text-muted-foreground text-right">{value}</dd>
        </div>
    ) : null
);


export default function TirthankaraDetailPage({ params }: { params: { id: string } }) {
  const tirthankara = tirthankaras.find((t) => t.id === params.id);
  
  if (!tirthankara) {
    notFound();
  }
  
  const Icon = getSymbolIcon(tirthankara.symbol);

  return (
    <div className="w-full py-12 md:py-16 bg-background">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-8">
            <Button asChild variant="outline" className="font-headline">
                <Link href="/tirthankaras">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Tirthankaras
                </Link>
            </Button>
        </div>

        <main>
            {/* --- Header Section --- */}
            <Card className="shadow-lg border-0 mb-8 overflow-hidden">
                <CardHeader className="p-0">
                    <div className="bg-primary/10 p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            {tirthankara.media?.images[0]?.url ? (
                                <Image
                                    src={tirthankara.media.images[0].url}
                                    alt={tirthankara.media.images[0].alt || `Idol of Lord ${tirthankara.name}`}
                                    width={150}
                                    height={150}
                                    className="rounded-full border-4 border-primary/50 shadow-xl object-cover"
                                    data-ai-hint="saint portrait"
                                />
                            ) : (
                                <div className="w-[150px] h-[150px] bg-secondary rounded-full border-4 border-primary/50 shadow-xl flex items-center justify-center">
                                     {/* Empty div for placeholder */}
                                </div>
                            )}
                             <div className="absolute bottom-0 right-0 bg-background p-2 rounded-full shadow-md border-2 border-primary/20">
                                <Icon className="h-8 w-8 text-primary" />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                                {tirthankara.number}. {tirthankara.name}
                            </h1>
                            <p className="font-body text-xl text-muted-foreground mt-1">{tirthankara.hindi_name}</p>
                            <div className="flex items-center gap-4 mt-4 justify-center md:justify-start">
                                <Badge variant="secondary" className="text-base">{tirthankara.symbol}</Badge>
                                <Badge style={{ backgroundColor: tirthankara.color.toLowerCase() === 'golden' ? '#FFD700' : tirthankara.color.toLowerCase() === 'golden yellow' ? '#FFD700' : tirthankara.color.toLowerCase(), color: ['golden', 'white', 'yellow', 'golden yellow'].includes(tirthankara.color.toLowerCase()) ? '#333' : '#fff' }} className="text-base">
                                    {tirthankara.color}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
                {/* --- Left Column --- */}
                <div className="md:col-span-2 space-y-8">
                    {tirthankara.notable_facts && (
                        <Card className="shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Sparkles className="text-primary"/>Notable Facts</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-none space-y-3 text-muted-foreground">
                                    {tirthankara.notable_facts.map((fact, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Gem className="text-primary/70 h-5 w-5 mt-1 shrink-0"/>
                                            <span>{fact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                     {tirthankara.key_teachings && (
                        <Card className="shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><BookOpen className="text-primary"/>Key Teachings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-none space-y-3 text-muted-foreground">
                                    {tirthankara.key_teachings.map((teaching, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Feather className="text-primary/70 h-5 w-5 mt-1 shrink-0"/>
                                            <span>{teaching}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}
                    {tirthankara.legacy && (
                         <Card className="shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Anchor className="text-primary"/>Legacy</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {tirthankara.legacy.cultural && (
                                <div>
                                    <h3 className="font-headline text-lg text-accent mb-2">Cultural</h3>
                                    <ul className="list-none space-y-2 text-muted-foreground">
                                    {tirthankara.legacy.cultural.map((item, index) => <li key={index} className="flex items-start gap-3"><Sparkles className="text-primary/70 h-4 w-4 mt-1 shrink-0"/><span>{item}</span></li>)}
                                    </ul>
                                </div>
                                )}
                                {tirthankara.legacy.literary && (
                                <div>
                                    <h3 className="font-headline text-lg text-accent mb-2">Literary</h3>
                                    <ul className="list-none space-y-2 text-muted-foreground">
                                    {tirthankara.legacy.literary.map((item, index) => <li key={index} className="flex items-start gap-3"><Book className="text-primary/70 h-4 w-4 mt-1 shrink-0"/><span>{item}</span></li>)}
                                    </ul>
                                </div>
                                )}
                            </CardContent>
                        </Card>
                    )}

                    {tirthankara.associated_temples && (
                         <Card className="shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Landmark className="text-primary"/>Associated Temples</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {tirthankara.associated_temples.map((temple, index) => (
                                    <div key={index} className="p-3 bg-secondary/30 rounded-lg">
                                        <p className="font-semibold text-accent">{temple.name} <span className="text-sm text-muted-foreground font-normal">- {temple.location}</span></p>
                                        <p className="text-muted-foreground text-sm mt-1">{temple.significance}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* --- Right Column --- */}
                <div className="md:col-span-1 space-y-8">
                     <Card className="shadow-lg border-0">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center gap-3"><Users className="text-primary"/>Lineage</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <InfoCard icon={<User />} label="Father" value={tirthankara.parents.father} />
                            <div className="my-4" />
                            <InfoCard icon={<Heart />} label="Mother" value={tirthankara.parents.mother} />
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg border-0">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center gap-3"><MapPin className="text-primary"/>Key Places</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <InfoCard icon={<Home />} label="Birthplace" value={tirthankara.birthplace} />
                            <div className="my-4" />
                            <InfoCard icon={<Mountain />} label="Place of Moksha" value={tirthankara.moksha_place} />
                        </CardContent>
                    </Card>

                    {tirthankara.iconography && (
                        <Card className="shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-3"><Palette className="text-primary"/>Iconography</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <dl className="space-y-2 text-sm">
                                    <DetailRow label="Emblem" value={tirthankara.iconography.emblem}/>
                                    <DetailRow label="Posture" value={tirthankara.iconography.posture}/>
                                    <DetailRow label="Associated Deity" value={tirthankara.iconography.associated_deity}/>
                                </dl>
                            </CardContent>
                        </Card>
                    )}

                </div>
            </div>
        </main>
      </div>
    </div>
  );
}
