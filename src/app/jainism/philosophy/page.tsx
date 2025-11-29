
import { BrainCircuit, GitCommit, Orbit, Gem, Footprints, BookOpen, Users, Scroll } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jain Philosophy - Soul, Karma, and Moksha | Shikharji Darshan',
  description: 'Learn about Jain metaphysics, the nature of the soul (Jiva), the doctrine of Karma, and the ultimate path to liberation (Moksha) through the Three Jewels.',
  openGraph: {
    title: 'Core Pillars of Jain Philosophy',
    description: 'An in-depth guide to the foundational concepts of Jain thought.',
  },
};

const corePillars = [
    {
        icon: BrainCircuit,
        title: "The Soul (Jiva)",
        description: "The core of Jain philosophy is the Jiva, an eternal, conscious, and pure soul. It inherently possesses infinite knowledge, perception, bliss, and energy, but is clouded by layers of karma, much like a mirror covered in dust."
    },
    {
        icon: GitCommit,
        title: "Karma Doctrine",
        description: "In Jainism, karma is not an abstract force but a subtle physical particle that attaches to the soul due to passions like anger, greed, and ego. This bondage determines the soul's journey through different life forms."
    },
    {
        icon: Orbit,
        title: "Jain Cosmology (Loka)",
        description: "The universe is an uncreated, eternal entity that operates on its own natural laws. It is divided into three realms: the upper world (heavens), middle world (humans), and lower world (hells), through which souls transmigrate."
    },
    {
        icon: Gem,
        title: "The Three Jewels (Ratnatraya)",
        description: "The path to liberation (Moksha) is paved by the three jewels: Samyak Darshana (Right Faith), Samyak Jnana (Right Knowledge), and Samyak Charitra (Right Conduct). Together, they purify the soul.",
    },
    {
        icon: Footprints,
        title: "Path to Liberation (Moksha Marga)",
        description: "Moksha is the ultimate goal—a state of absolute freedom from the cycle of birth and death. It is achieved by shedding all karmas through disciplined self-control, penance, and meditation, culminating in the soul regaining its pure, blissful state."
    }
];

const scriptureQuotes = [
    {
        quote: "The soul is the maker and non-maker, and itself makes happiness and misery, is its own friend and its own foe.",
        source: "Uttaradhyayana Sutra"
    },
    {
        quote: "All living beings desire to live, not to die. For this reason, the enlightened ones do not kill or cause killing.",
        source: "Sutrakritanga Sutra"
    },
    {
        quote: "Conquer anger by forgiveness, pride by humility, deceit by sincerity, and greed by contentment.",
        source: "Lord Mahavira"
    }
];

export default function PhilosophyPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full py-20 md:py-32 bg-accent/10 text-center">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <BrainCircuit className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Jain Philosophy
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Learn about Jain metaphysics, soul theory, karma doctrine, and the path to moksha (liberation).
            </p>
          </div>
        </div>
      </section>

       {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
            
            {/* Overview Section */}
            <section className="text-center">
                 <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Jain philosophy is a transtheistic tradition that places the power of liberation entirely on the individual soul. It posits an eternal universe governed by natural laws, not a creator god. The ultimate goal is Moksha—the soul's release from the cycle of rebirth—achieved by purifying it of karmic particles through the 'Three Jewels': Right Faith, Right Knowledge, and Right Conduct.
                </p>
            </section>
            
            {/* Core Pillars Section */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Core Pillars of Jain Thought</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {corePillars.slice(0,3).map((pillar) => (
                        <Card key={pillar.title} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <pillar.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{pillar.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{pillar.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
                    {corePillars.slice(3,5).map((pillar) => (
                        <Card key={pillar.title} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <pillar.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{pillar.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{pillar.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            
            {/* Wisdom from Scriptures */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Wisdom from the Scriptures</h2>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scriptureQuotes.map((q, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card text-center flex flex-col">
                            <CardContent className="p-8 flex-grow flex items-center justify-center">
                                <p className="text-xl italic text-muted-foreground">"{q.quote}"</p>
                            </CardContent>
                            <CardHeader className="pt-0">
                                <CardTitle className="font-headline text-lg text-primary">- {q.source}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </section>

             {/* Related Topics */}
            <section className="text-center pt-8 border-t">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Continue Your Journey</h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button asChild variant="outline">
                        <Link href="/jainism/principles" className="flex items-center gap-2"><Scroll/>Explore Principles</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/tirthankaras" className="flex items-center gap-2"><Users/>Discover the Tirthankaras</Link>
                    </Button>
                     <Button asChild variant="outline">
                        <Link href="/dharma" className="flex items-center gap-2"><BookOpen/>Return to Dharma Guide</Link>
                    </Button>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
