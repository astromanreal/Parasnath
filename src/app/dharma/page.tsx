
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Orbit, Palette, Scroll, Hand, BrainCircuit, Library } from "lucide-react"
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jain Dharma Guide | Shikharji Darshan',
  description: 'Explore the timeless wisdom of Jainism. Learn about the 24 Tirthankaras, core philosophies like Ahimsa, sacred scriptures, and festivals.',
  openGraph: {
    title: 'The Path of Jain Dharma',
    description: 'A comprehensive guide to Jain philosophy, Tirthankaras, and sacred practices.',
  },
};

const dharmaContent = [
  {
    title: "The 24 Tirthankaras",
    content: "The Tirthankaras are the saviors and spiritual teachers of the dharma. From Lord Rishabhanatha to Lord Mahavira, each Tirthankara represents a beacon of the eternal path to liberation. Their life stories are lessons in compassion, non-violence, and self-control."
  },
  {
    title: "Core Philosophies",
    content: "Jain philosophy is built on core principles like Ahimsa (non-violence), Anekantavada (many-sidedness), and Aparigraha (non-possessiveness). These principles guide a soul towards its ultimate goal: moksha, or liberation from the cycle of birth and death."
  },
  {
    title: "Sacred Scriptures",
    content: "The Agamas are the sacred texts of Jainism, based on the discourse of the Tirthankaras. They contain profound teachings on cosmology, epistemology, ethics, and the nature of the soul."
  },
  {
    title: "Festivals and Rituals",
    content: "Jain festivals, such as Paryushan, Mahavir Janma Kalyanak, and Diwali, are times of deep spiritual reflection, fasting, and devotion. Rituals are not merely external acts but are imbued with symbolic meaning to purify the soul."
  }
]

const exploreMoreContent = [
    {
      title: "Cosmology",
      description: "Jain cosmology portrays the universe as eternal and cyclic, divided into three realms of existence.",
      link: "/jainism/cosmology",
      icon: Orbit
    },
    {
      title: "Art",
      description: "Explore centuries of non-violent symbolism and exquisite craftsmanship in Jain sculpture, architecture, and paintings.",
      link: "/jainism/art",
      icon: Palette
    },
    {
      title: "Principles",
      description: "Dive deep into Jainism's five core vows: ahimsa, satya, asteya, brahmacharya, and aparigraha.",
      link: "/jainism/principles",
      icon: Scroll
    },
    {
      title: "Practice",
      description: "Understand daily Jain practices that emphasize vegetarianism, compassion, and detachment.",
      link: "/jainism/practice",
      icon: Hand
    },
    {
      title: "Philosophy",
      description: "Learn about Jain metaphysics, soul theory, karma doctrine, and the path to moksha.",
      link: "/jainism/philosophy",
      icon: BrainCircuit
    },
    {
      title: "Sacred Texts",
      description: "Read about the Agamas and spiritual commentaries that guide Jain spiritual development.",
      link: "/jainism/texts",
      icon: Library
    }
]

export default function DharmaPage() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="p-3 bg-primary/20 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
            </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            The Path of Jain Dharma
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Explore the timeless wisdom of Jainism, from the lives of the Tirthankaras to its profound philosophies on life and liberation.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full mb-16">
          {dharmaContent.map((item, index) => (
             <AccordionItem value={`item-${index}`} key={index} className="bg-card/50 rounded-lg mb-2 px-4 shadow-sm">
              <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">
                Explore More About Jainism
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed mb-12">
                Delve deeper into the specific facets of Jain philosophy, culture, and practice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exploreMoreContent.map((item) => (
                    <Card key={item.title} className="flex flex-col text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0">
                        <CardHeader className="flex-row items-center gap-4">
                            <item.icon className="w-8 h-8 text-primary" />
                            <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                                <Link href={item.link}>Know More &rarr;</Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}
