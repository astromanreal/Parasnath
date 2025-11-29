
import { Feather, Flame, Hand, Heart, Leaf, BookOpen, BrainCircuit, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Five Great Vows of Jainism (Mahavratas) | Shikharji Darshan',
  description: 'Dive deep into Jainism\'s five core principles: Ahimsa (non-violence), Satya (truth), Asteya (non-stealing), Brahmacharya (chastity), and Aparigraha (non-possession).',
  openGraph: {
    title: 'The Five Great Vows of Jainism: Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha',
    description: 'Learn the ethical pillars for liberating the soul in Jain Dharma.',
  },
};

const fiveVows = [
  {
    icon: Feather,
    title: "Ahimsa (Non-Violence)",
    sanskrit: "अहिंसा परमो धर्मः",
    quote: "Non-violence is the supreme religion.",
    description: "The practice of causing no harm to any living being, extending to thoughts, words, and actions. It forms the very foundation of Jain ethics and spiritual practice.",
    relevance: "Manifests as vegetarianism/veganism, environmental consciousness, compassion in speech, and opposition to all forms of cruelty."
  },
  {
    icon: Flame,
    title: "Satya (Truthfulness)",
    sanskrit: "सत्यं ब्रूयात् प्रियं ब्रूयात्",
    quote: "Speak the truth, speak the pleasing truth.",
    description: "Abstaining from falsehood and speaking only what is true, beneficial, and non-harmful. If the truth is hurtful, silence is preferred.",
    relevance: "Practiced through integrity in business, honest communication, self-honesty, and avoiding gossip or exaggeration."
  },
  {
    icon: Hand,
    title: "Asteya (Non-Stealing)",
    sanskrit: "अदत्तादानविरमणम्",
    quote: "To not take what has not been freely given.",
    description: "This vow goes beyond physical theft to include avoiding tax evasion, unfair exploitation of labor, and intellectual property theft.",
    relevance: "Promotes ethical business practices, fair trade, respecting boundaries, and contentment with what one has earned honestly."
  },
  {
    icon: Heart,
    title: "Brahmacharya (Chastity)",
    sanskrit: "मैथुनविरमणम्",
    quote: "Purity of mind, body, and speech.",
    description: "For ascetics, this means complete celibacy. For householders, it means fidelity and restraint within marriage, controlling sensual desires to redirect energy towards spiritual pursuits.",
    relevance: "Encourages mindfulness over indulgence, emotional purity, focus, and developing relationships based on respect rather than lust."
  },
  {
    icon: Leaf,
    title: "Aparigraha (Non-Possession)",
    sanskrit: "परिग्रहविरमणम्",
    quote: "Detachment from worldly attachments.",
    description: "Limiting one's possessions and attachments to material objects, people, and even ideas. It is the practice of minimalism to free the soul from the burden of greed.",
    relevance: "Inspires a minimalist lifestyle, conscious consumerism, generosity, and reducing one's carbon footprint. It is the antidote to materialism."
  }
];

const scriptureQuotes = [
    {
        quote: "The essence of right conduct is not to injure anyone.",
        source: "Acharanga Sutra"
    },
    {
        quote: "All living beings desire to live, not to die. For this reason, the enlightened ones do not kill or cause killing.",
        source: "Sutrakritanga Sutra"
    },
    {
        quote: "Conquer anger by forgiveness, pride by humility, deceit by sincerity, and greed by contentment.",
        source: "Lord Mahavira"
    }
]

export default function PrinciplesPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="w-full py-20 md:py-32 bg-accent/10 text-center">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              The Five Great Vows
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Dive deep into Jainism's five core principles (Mahavratas): ahiṃsā, satya, asteya, brahmacharya, and aparigraha—the ethical pillars for liberating the soul.
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
                    The Panch Mahavrata, or Five Great Vows, form the unshakable foundation of Jain ethics. They are not merely rules, but profound tools for self-purification, designed to halt the influx of new karma and shed existing karmic particles. While ascetics (monks and nuns) observe them with absolute strictness (Mahavratas), householders follow them to a lesser degree suited to their life (Anuvratas), guiding all seekers on the path to inner peace and liberation.
                </p>
            </section>
            
            {/* The Five Vows Sections */}
            <section className="space-y-16">
                {fiveVows.map((vow) => (
                    <Card key={vow.title} className="shadow-lg border-0 bg-card/50 overflow-hidden">
                        <div className="grid md:grid-cols-3">
                            <div className="md:col-span-1 flex flex-col items-center justify-center bg-primary/10 p-8 text-center">
                                <vow.icon className="h-16 w-16 text-primary mb-4" />
                                <h2 className="text-3xl font-bold font-headline text-primary">{vow.title}</h2>
                                <p className="font-mono text-muted-foreground mt-2">{vow.sanskrit}</p>
                            </div>
                            <div className="md:col-span-2 p-8">
                                <blockquote className="border-l-4 border-primary pl-4 italic text-xl text-foreground mb-6">
                                    {vow.quote}
                                </blockquote>
                                <h3 className="font-headline text-xl text-accent mb-2">Core Definition</h3>
                                <p className="text-muted-foreground mb-4">{vow.description}</p>
                                <h3 className="font-headline text-xl text-accent mb-2">Modern Relevance</h3>
                                <p className="text-muted-foreground">{vow.relevance}</p>
                            </div>
                        </div>
                    </Card>
                ))}
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
                        <Link href="/jainism/philosophy" className="flex items-center gap-2"><BrainCircuit/>Explore Philosophy</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/tirthankaras" className="flex items-center gap-2"><Users/>Discover the Tirthankaras</Link>
                    </Button>
                     <Button asChild variant="outline">
                        <Link href="/dharma">Return to Dharma Guide</Link>
                    </Button>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
