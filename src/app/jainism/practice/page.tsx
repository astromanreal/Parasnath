
import { HandHeart, Footprints, Home, Sunrise, Salad, BrainCircuit, BookOpen, UtensilsCrossed, Leaf, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jain Practice - A Way of Life | Shikharji Darshan',
  description: 'Understand the daily practices of Jainism, from Ahimsa in diet to meditation (Samayik) and the distinct paths of ascetics and householders.',
  openGraph: {
    title: 'Jain Practice: Turning Philosophy into a Way of Life',
    description: 'Learn about the rituals, vows, and daily routines that define Jain spiritual practice.',
    images: ['/og/jain-practice.jpg'],
  },
};

const keyPractices = [
  {
    icon: Sunrise,
    title: "Morning Rituals",
    description: "Beginning the day with the Navkar Mantra, prayers, and setting a peaceful intention.",
  },
  {
    icon: UtensilsCrossed,
    title: "Ahimsa in Diet",
    description: "Following a strict vegetarian or vegan diet, avoiding harm to all living beings, and often eating before sunset.",
  },
  {
    icon: BrainCircuit,
    title: "Meditation & Reflection",
    description: "Practicing Samayik (equanimity) and Pratikraman (introspection) to purify the soul daily.",
  },
  {
    icon: Leaf,
    title: "Fasting & Restraint",
    description: "Observing fasts (Upvas) during holy days like Paryushan to discipline the senses and cleanse karma.",
  }
];

const asceticPractices = [
  {
    title: "Mahavratas",
    description: "Strict observance of the five great vows: non-violence, truth, non-stealing, celibacy, and non-possession."
  },
  {
    title: "Vihara (Wandering)",
    description: "Traveling only on foot to avoid harming any life, and not staying in one place for too long."
  },
  {
    title: "Gochari (Alms)",
    description: "Accepting small amounts of pure, vegetarian food from multiple households without causing any burden."
  },
  {
    title: "Pratikraman",
    description: "Twice-daily rituals of confession and repentance to cleanse the soul of karmas accumulated during the day."
  }
]

const householderPractices = [
  {
    title: "Anuvratas",
    description: "Observing the five great vows to a lesser, more practical degree suitable for daily life."
  },
  {
    title: "Samayik",
    description: "A 48-minute period of meditation and equanimity to detach from worldly affairs and connect with the self."
  },
  {
    title: "Charity (Dāna)",
    description: "Giving alms, medicine, knowledge, and protection, considered a core duty of a householder."
  },
  {
    title: "Pooja & Devotion",
    description: "Visiting temples, venerating the Tirthankaras, and chanting sacred hymns like the Navkar Mantra."
  }
]

export default function PracticePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
         <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Hands in a meditative pose, symbolizing Jain practice and inner peace."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="peaceful meditation"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <HandHeart className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Jain Practice
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Understand daily Jain practices that emphasize vegetarianism, compassion, and detachment, turning philosophy into a way of life.
            </p>
          </div>
        </div>
      </section>

       {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
            
            {/* Introduction */}
            <section className="text-center">
                 <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Jain practice is the living application of its core principles. It is a path of conscious action, where every choice—from what to eat to how to speak—is designed to minimize harm and purify the soul. This disciplined lifestyle is followed differently by ascetics (monks and nuns) and householders, but the goal remains the same: liberation from the cycle of rebirth.
                </p>
            </section>

            {/* Two Paths Section */}
             <section className="grid md:grid-cols-2 gap-12 items-start">
                {/* Ascetic Path */}
                <Card className="shadow-lg border-0 bg-card/50 h-full">
                    <CardHeader className="text-center items-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                           <Footprints className="h-8 w-8 text-primary"/>
                        </div>
                        <CardTitle className="font-headline text-3xl">The Ascetic Path</CardTitle>
                        <p className="text-muted-foreground pt-2">A Life of Absolute Renunciation</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {asceticPractices.map((practice) => (
                        <div key={practice.title} className="p-3 bg-background/50 rounded-lg">
                          <h3 className="font-semibold text-accent">{practice.title}</h3>
                          <p className="text-sm text-muted-foreground">{practice.description}</p>
                        </div>
                      ))}
                    </CardContent>
                </Card>
                 {/* Householder Path */}
                <Card className="shadow-lg border-0 bg-card/50 h-full">
                    <CardHeader className="text-center items-center">
                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                           <Home className="h-8 w-8 text-primary"/>
                        </div>
                        <CardTitle className="font-headline text-3xl">The Householder's Path</CardTitle>
                        <p className="text-muted-foreground pt-2">Dharma in Daily Life</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {householderPractices.map((practice) => (
                        <div key={practice.title} className="p-3 bg-background/50 rounded-lg">
                          <h3 className="font-semibold text-accent">{practice.title}</h3>
                          <p className="text-sm text-muted-foreground">{practice.description}</p>
                        </div>
                      ))}
                    </CardContent>
                </Card>
             </section>

            {/* Key Areas of Practice */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Key Areas of Daily Practice</h2>
                     <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        These core activities form the foundation of a Jain householder's spiritual routine.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {keyPractices.map((practice) => (
                        <Card key={practice.title} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <practice.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{practice.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{practice.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

             {/* Related Topics */}
            <section className="text-center pt-8 border-t">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Continue Your Journey</h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Button asChild variant="outline">
                        <Link href="/jainism/principles" className="flex items-center gap-2"><BookOpen/>Explore Principles</Link>
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
