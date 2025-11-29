
import { BookCopy, BookHeart, BookMarked, BrainCircuit, Hand, Library, Scale, Sparkles, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sacred Jain Texts - Agamas & Commentaries | Shikharji Darshan',
  description: 'Read about the Agamas, the foundational scriptures of Jainism, and explore key texts like the Tattvartha Sutra and Samayasara that guide spiritual development.',
  openGraph: {
    title: 'Sacred Texts of Jainism',
    description: 'Explore the canonical literature of the Śvetāmbara and Digambara traditions.',
    images: ['/og/jain-texts.jpg'],
  },
};

const featuredTexts = [
  {
    icon: Hand,
    title: "Ācāranga Sūtra",
    theme: "Conduct & Ethics",
    short_description: "The first Śvetāmbara text, detailing the code of conduct for monks and Lord Mahavira’s early life.",
    details: {
      origin: "Believed to be one of the earliest parts of the Jain Agamas, compiled from Lord Mahavira's discourses.",
      purpose: "To lay down the strict rules of conduct (achara) for Jain ascetics, focusing on ahimsa in its purest form.",
      sect: "Śvetāmbara",
      points: [
        "Details the life of Lord Mahavira before his enlightenment.",
        "Provides intricate rules on walking, speaking, and eating to avoid harm to any life form.",
        "Emphasizes radical non-violence and detachment as the core of monastic life."
      ]
    }
  },
  {
    icon: Sparkles,
    title: "Samayasāra",
    theme: "Metaphysics & Soul (Digambara)",
    short_description: "Acharya Kundakunda’s timeless discourse on the pure soul and karma separation.",
     details: {
      origin: "Authored by the revered Digambara monk Acharya Kundakunda in the early centuries CE.",
      purpose: "To explain the true nature of the self (Atman) as distinct from non-self (body, karma, thoughts).",
      sect: "Digambara",
      points: [
        "Elaborates on the 'two truths': the absolute (nishchaya) and the practical (vyavahara).",
        "A guide for self-realization, showing how the soul is inherently pure, conscious, and blissful.",
        "A cornerstone of Digambara philosophy, deeply influencing its metaphysical thought."
      ]
    }
  },
  {
    icon: Scale,
    title: "Tattvārtha Sūtra",
    theme: "Comprehensive Jain Philosophy (Universal)",
    short_description: "The only Jain text accepted by both Śvetāmbara and Digambara traditions.",
     details: {
      origin: "Authored by Acharya Umaswati, it is a foundational text revered by all major Jain sects.",
      purpose: "To summarize the entire Jain philosophy in a series of concise Sanskrit aphorisms (sutras).",
      sect: "Universal",
      points: [
        "Explains the seven fundamental realities (tattvas) of Jainism, including Jiva (soul) and Ajiva (non-soul).",
        "Details the path to liberation (Moksha Marga) through the 'Three Jewels': Right Faith, Right Knowledge, and Right Conduct.",
        "Serves as a primary textbook for both monastic and lay followers of Jainism."
      ]
    }
  }
];

const svetambaraCanon = [
    { title: "11 Angas", description: "The core texts containing the direct teachings of Lord Mahavira on conduct, cosmology, and philosophy.", tag: "Philosophy" },
    { title: "12 Upāngas", description: "Expository texts that elaborate on topics from the Angas, such as astronomy and biology.", tag: "Cosmology" },
    { title: "10 Painnayas", description: "Miscellaneous texts covering a wide range of subjects including hymns, rituals, and independent topics.", tag: "Rituals" },
    { title: "6 Chedasūtras", description: "Texts detailing the rules of conduct, penance, and discipline for monks and nuns.", tag: "Conduct" },
    { title: "4 Mūlasūtras", description: "Foundational texts that are considered essential study for a new monk.", tag: "Conduct" }
];

const digambaraCanon = [
    { title: "Shatkhandāgama", description: "The 'Scripture in Six Parts', a detailed exposition on karma theory by Acharyas Pushpadanta and Bhutabali.", tag: "Karma Theory" },
    { title: "Kasāyapāhuda", description: "The 'Treatise on Passions', analyzing the nature of passions like anger and greed and their karmic effects.", tag: "Philosophy" },
    { title: "Pravachanasāra", description: "By Acharya Kundakunda, this text discusses right knowledge, right conduct, and the nature of reality.", tag: "Metaphysics" },
    { title: "Niyamasāra", description: "Also by Kundakunda, it outlines the path of discipline and the rules of conduct for achieving liberation.", tag: "Conduct" }
]


export default function SacredTextsPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
         <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Ancient Jain manuscript on a wooden scroll, representing sacred texts."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="ancient manuscript scroll"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Library className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Sacred Texts
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Read about the Agamas and spiritual commentaries that form the foundation of Jain spiritual development.
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
                    Jain sacred literature is not just scripture—it is a roadmap for spiritual liberation. Divided into Śvetāmbara and Digambara traditions, these texts contain deep insights into ethics, soul theory, karma, liberation, and right conduct. Some are direct transmissions of Lord Mahavira’s teachings, others refined commentaries by profound Acharyas across centuries.
                </p>
            </section>

            {/* Filter Bar Placeholder */}
            <section>
                <Card className="p-4 bg-card/50 shadow-sm border-0">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="flex items-center gap-2 font-headline text-lg">
                            <Filter className="h-5 w-5 text-primary"/>
                            <span>Filter Texts:</span>
                        </div>
                        <div className="flex-grow flex flex-wrap gap-2 justify-center">
                             <Button variant="outline">Śvetāmbara</Button>
                             <Button variant="outline">Digambara</Button>
                             <Button variant="outline">Universal</Button>
                             <Button variant="ghost">Conduct</Button>
                             <Button variant="ghost">Metaphysics</Button>
                             <Button variant="ghost">Philosophy</Button>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Featured Texts Section */}
            <section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Featured Foundational Texts</h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {featuredTexts.map((text, index) => (
                        <AccordionItem value={`item-${index}`} key={text.title} className="bg-card/50 rounded-lg px-6 shadow-md border-0">
                            <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline py-6">
                                <div className='flex items-center gap-4 text-left'>
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <text.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-headline">{text.title}</h3>
                                        <p className="text-base font-semibold text-accent">{text.theme}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{text.short_description}</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-muted-foreground border-t pt-6">
                                <div className="space-y-4">
                                    <div><strong className="font-semibold text-accent">Origin:</strong> {text.details.origin}</div>
                                    <div><strong className="font-semibold text-accent">Purpose:</strong> {text.details.purpose}</div>
                                    <div><strong className="font-semibold text-accent">Sect:</strong> <Badge variant="secondary">{text.details.sect}</Badge></div>
                                    <div>
                                        <strong className="font-semibold text-accent">Key Points:</strong>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            {text.details.points.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>
                                    </div>
                                    <Button variant="link" className="p-0 h-auto">Download/Read More &rarr;</Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* Canons Section */}
            <section>
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Canonical Collections by Sect</h2>
                </div>
                <Accordion type="multiple" className="w-full space-y-6">
                    {/* Svetambara Canon */}
                    <AccordionItem value="svetambara" className="bg-card/50 rounded-lg px-6 shadow-md border-0">
                        <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline py-6">
                             <div className='flex items-center gap-4'>
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <BookCopy className="h-8 w-8 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-headline">The Śvetāmbara Canon</h3>
                                    <p className="text-base text-muted-foreground font-normal">Based on the 45 Agamas (compiled post-Mahavira).</p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground border-t pt-6">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {svetambaraCanon.map((item) => (
                                    <div key={item.title} className="p-4 bg-background/50 rounded-md border">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-semibold text-accent">{item.title}</h4>
                                            <Badge variant="outline">{item.tag}</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Digambara Canon */}
                     <AccordionItem value="digambara" className="bg-card/50 rounded-lg px-6 shadow-md border-0">
                        <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline py-6">
                             <div className='flex items-center gap-4'>
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <BookMarked className="h-8 w-8 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-headline">The Digambara Canon</h3>
                                    <p className="text-base text-muted-foreground font-normal">Based on pro-canonical texts from oral traditions.</p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground border-t pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {digambaraCanon.map((item) => (
                                     <div key={item.title} className="p-4 bg-background/50 rounded-md border">
                                        <div className="flex justify-between items-center">
                                            <h4 className="font-semibold text-accent">{item.title}</h4>
                                            <Badge variant="outline">{item.tag}</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

             <section className="text-center pt-8 border-t">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">A Note for the Seeker</h2>
                 <blockquote className="max-w-2xl mx-auto text-xl italic text-muted-foreground border-l-4 border-primary pl-6 text-left">
                    Jain texts are not merely to be read—but to be lived. Let these scriptures guide your soul toward samyak darshan (right view) and liberation.
                </blockquote>
            </section>

        </div>
      </div>
    </div>
  );
}
