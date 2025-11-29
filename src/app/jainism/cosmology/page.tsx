
import { Orbit, Sparkles, BookOpen, Layers, Repeat, Shield, Diamond, Users, Crown, Flame, GitCommit, Waves, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jain Cosmology - The Three Lokas & Cyclical Time | Shikharji Darshan',
  description: 'Explore the timeless, cyclical universe as described in Jain scriptures. Learn about the Three Lokas, the eternal laws of karma, and the concept of time (Kalachakra).',
  openGraph: {
    title: 'Jain Cosmology: An Exploration of the Universe',
    description: 'Discover the structure of the universe, the realms of existence, and the path to Siddhashila.',
  },
};

const cosmologyConcepts = [
  {
    icon: Repeat,
    title: "Eternal Universe",
    description: "The universe is an uncreated entity that has existed and will exist forever, governed by natural laws.",
  },
  {
    icon: GitCommit,
    title: "Laws of Karma",
    description: "Karma is a subtle physical particle that attaches to the soul, determining its journey through various life forms.",
  },
  {
    icon: Layers,
    title: "Cyclical Time",
    description: "Time moves in vast cycles (Kalachakra), with ascending (Utsarpini) and descending (Avasarpini) eras of progress and decline.",
  },
];

const threeLokas = [
  {
    icon: Crown,
    title: "Urdhva Loka (The Upper World)",
    description: "The celestial realm of heavens, inhabited by divine beings (Devas) who enjoy immense pleasures due to their past good karma. It is a realm of temporary reward, not eternal liberation.",
    beings: "Devas (Celestial Beings)",
    color: "bg-primary/20",
  },
  {
    icon: Users,
    title: "Madhya Loka (The Middle World)",
    description: "The terrestrial realm of mortals, including humans, animals, and plants. It is the only realm from which a soul can directly attain moksha (liberation). Earth and Mount Meru are at its center.",
    beings: "Humans, Animals, Plants",
    color: "bg-accent/20",
  },
  {
    icon: Flame,
    title: "Adho Loka (The Lower World)",
    description: "The netherworld, consisting of seven hells where beings (Narakis) endure suffering as a consequence of their negative karma. This suffering is intense but finite.",
    beings: "Narakis (Hellish Beings)",
    color: "bg-destructive/10",
  },
]

export default function CosmologyPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full py-20 md:py-32 bg-accent/10 text-center">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Orbit className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Jain Cosmology
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              An exploration of the timeless, cyclical universe as described in Jain scriptures, governed by the eternal laws of karma and time.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-16">
          
          {/* 2. Overview of Jain Cosmology */}
          <section className="text-center">
             <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-12">
                Jain cosmology presents a vast, eternal universe governed not by a creator, but by natural laws. It describes a timeless cycle of rise and fall—where all living beings evolve through karma, across countless births, until liberation (moksha) is attained.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cosmologyConcepts.map((concept) => (
                <Card key={concept.title} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card text-center">
                  <CardHeader className="items-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-2">
                        <concept.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{concept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 3. The Three Lokas */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">The Three Lokas</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    The universe is divided into three realms of existence, stacked vertically, through which souls journey based on their karma.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {threeLokas.map((loka, index) => (
                <AccordionItem value={`item-${index}`} key={loka.title} className={`rounded-lg mb-4 border-0 shadow-md ${loka.color}`}>
                  <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline px-6 py-4">
                    <div className="flex items-center gap-4">
                        <loka.icon className="w-8 h-8 text-primary" />
                        {loka.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground px-6 pb-6">
                    <p className="mb-4">{loka.description}</p>
                    <p><strong className="font-semibold text-accent">Primary Inhabitants:</strong> {loka.beings}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <div className="grid md:grid-cols-2 gap-12 pt-6 items-start">
             {/* 4. Shape of the Universe */}
             <section>
                <Card className="shadow-lg border-0 h-full">
                    <CardHeader className="flex-row items-center gap-4">
                        <Waves className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">Shape of the Universe</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Jain scriptures describe the universe (Lokapurusha) as being shaped like a cosmic man standing with feet apart and hands on his waist. It is narrow at the top and bottom, and wide in the middle, containing all three lokas within its form.
                        </p>
                    </CardContent>
                </Card>
             </section>
             {/* 5. Kalachakra: The Cycle of Time */}
             <section>
                <Card className="shadow-lg border-0 h-full">
                    <CardHeader className="flex-row items-center gap-4">
                        <Repeat className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">The Wheel of Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            Time is an endless, turning wheel (Kalachakra) with two halves: Utsarpini (ascending era of progress) and Avasarpini (descending era of decline). Each half has six periods (Aras). We are currently in the 5th Ara of Avasarpini.
                        </p>
                    </CardContent>
                </Card>
             </section>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-6 items-start">
            {/* 7. Siddhashila */}
            <section>
                <Card className="shadow-lg border-0 h-full">
                    <CardHeader className="flex-row items-center gap-4">
                        <Diamond className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">Siddhashila</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">
                            At the absolute apex of the universe, above the Urdhva Loka, lies Siddhashila—the realm of liberated souls. It is a tranquil, eternal space where karma-free Siddhas reside in a state of infinite bliss, knowledge, and consciousness, never to be reborn.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                            "The liberated soul... goes up to the end of the world, and there, develops into its natural form, and obtains perfection."
                        </blockquote>
                    </CardContent>
                </Card>
            </section>
            {/* 8. Karma & Cosmic Law */}
            <section>
                <Card className="shadow-lg border-0 h-full">
                    <CardHeader className="flex-row items-center gap-4">
                        <Wind className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-2xl">Karma: The Cosmic Law</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-6">
                            Karma in Jainism is not just a principle but a subtle, physical substance that attaches to the soul (Jiva) due to passions like anger and desire. These karmic particles obscure the soul's innate purity, determining its journey and rebirth through the Lokas until they are shed through asceticism and right conduct.
                        </p>
                        <Button asChild className="w-full">
                            <Link href="/dharma">Learn more about Jain Philosophy &rarr;</Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
