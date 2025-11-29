
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map, Globe, Bot, Feather, BookOpen, Mountain, Users, Landmark, Headphones, Gift, Heart, Briefcase, Video, User } from 'lucide-react';

const pilgrimageTools = [
  {
    icon: Bot,
    title: "My Journey (AI Dashboard)",
    description: "Track your yatra, reflect, and follow a plan tailored just for you.",
    href: "/itinerary",
    cta: "Start Now",
  },
  {
    icon: Map,
    title: "Shikharji Guide",
    description: "Explore tonks, temples, dharamshalas, food, and transport services.",
    href: "/shikharji",
    cta: "Start Now",
  },
  {
    icon: Mountain,
    title: "Parasnath Trekking Guide",
    description: "GPS-enabled trails, vehicle options, fitness support for all routes.",
    href: "/parasnath",
    cta: "Start Now",
  },
];

const knowledgePaths = [
    {
        icon: Users,
        title: "All Tirthankaras",
        description: "Lives & teachings of the 24 spiritual victors.",
        href: "/tirthankaras",
    },
    {
        icon: BookOpen,
        title: "Jain Dharma Guide",
        description: "Core philosophies, rituals, cosmology, and texts.",
        href: "/dharma",
    },
    {
        icon: Feather,
        title: "Stories of Saints",
        description: "Real journeys of renunciation, wisdom, and compassion.",
        href: "/stories",
    }
];

const services = [
    {
        icon: Headphones,
        title: "Digital Audio Guides",
        href: "/services",
    },
    {
        icon: Briefcase,
        title: "Yatra Packages",
        href: "/services",
    },
    {
        icon: Gift,
        title: "Gift Boxes",
        href: "/services",
    },
    {
        icon: Heart,
        title: "Donate & Earn Punya",
        href: "/services",
    },
     {
        icon: BookOpen,
        title: "Jain eBooks & Stories",
        href: "/dharma",
    },
     {
        icon: Video,
        title: "Live Wellness Events",
        href: "/services",
    },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[50vh] md:h-[60vh]">
            <Image
              src="https://i.pinimg.com/1200x/2f/7c/88/2f7c88f0d26500f3ada4d601719b9098.jpg"
              layout="fill"
              objectFit="cover"
              alt="Sunrise over the sacred Parasnath Hills at Shikharji, a Jain pilgrimage site."
              className="object-cover"
              data-ai-hint="mountain sunrise"
              priority
            />
        </div>
        <div className="container px-4 md:px-6 py-12 md:py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                A Sacred Journey to Shikharji Begins Here
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
                Discover your personalized spiritual path through Jain Dharma—from the holy Parasnath Hills to global Jain Tirths.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center mt-6">
                <Button asChild size="lg" className="font-headline">
                    <Link href="/itinerary">🧭 Plan My Yatra</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-headline">
                    <Link href="/shikharji">🔍 Explore the Shikharji Guide</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Section 1: Featured Pilgrimage Tools */}
      <section id="tools" className="w-full py-12 md:py-24 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Your Sacred Tools for a Seamless Yatra</h2>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {pilgrimageTools.map((tool) => (
              <Card key={tool.title} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <tool.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-bold">
                    <Link href={tool.href}>{tool.cta} &rarr;</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Explore the Spiritual Base */}
       <section className="w-full py-12 md:py-24 bg-background">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">The Heart of Shikharji</h2>
                    <h3 className="text-2xl font-bold text-primary font-headline">Madhuban City: City of Jain Temples</h3>
                    <p className="text-muted-foreground">
                        Discover the sacred town that nurtures every pilgrim’s journey—with over 15 stunning temples, dharamshalas, and ancient rituals.
                    </p>
                    <Button asChild>
                        <Link href="/madhuban">Explore Madhuban</Link>
                    </Button>
                </div>
                <div className="w-full max-w-md mx-auto">
                     <Image
                        src="https://i.pinimg.com/1200x/73/41/f1/7341f1adce50a7833246f351cc1cbfd0.jpg"
                        width={800}
                        height={600}
                        alt="View of Madhuban City, the base for the Shikharji Yatra."
                        data-ai-hint="temple town"
                        className="overflow-hidden rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>

      {/* Section 3: The Path of Knowledge */}
        <section className="w-full py-12 md:py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Learn. Reflect. Evolve on the Path of Jain Dharma.</h2>
                </div>
                 <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                    {knowledgePaths.map((path) => (
                        <Card key={path.title} className="text-center shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-2">
                                    <path.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="font-headline text-2xl">{path.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{path.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild size="lg" className="font-headline">
                        <Link href="/dharma">Enter Dharma Portal</Link>
                    </Button>
                </div>
            </div>
        </section>

      {/* Section 4: Global Pilgrimage Map */}
       <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Sacred Sites Across the Globe</h2>
                 <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                    From Palitana to Nairobi, explore Jain temples across continents.
                </p>
                <div className="my-8">
                     <Globe className="h-24 w-24 mx-auto text-primary/30"/>
                </div>
                 <Button asChild>
                    <Link href="/pilgrimage">Explore Global Tirths</Link>
                </Button>
            </div>
        </section>

       {/* Section 5: Services & Spiritual Offerings */}
        <section className="w-full py-12 md:py-24 bg-muted/20">
            <div className="container px-4 md:px-6">
                 <div className="text-center space-y-4 mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Offerings That Enrich Your Journey</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                    {services.map((service) => (
                        <Link href={service.href} key={service.title} className="group">
                             <Card className="p-4 h-full flex flex-col justify-center items-center shadow-md hover:shadow-primary/20 transition-shadow duration-300 border-0 bg-card group-hover:-translate-y-1">
                                <service.icon className="h-8 w-8 text-primary mb-2"/>
                                <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary">{service.title}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

       {/* Section 6: Your Profile */}
        <section className="w-full py-12 md:py-24 bg-background">
             <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                    <div className="p-3 bg-primary/20 rounded-full inline-block">
                        <User className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Your Profile, Your Path</h2>
                    <p className="max-w-md text-muted-foreground md:text-xl/relaxed">
                        Track your spiritual goals, save your favorite readings, and bookmark your progress in our digital library.
                    </p>
                    <Button asChild>
                        <Link href="/itinerary">Go to My Dashboard</Link>
                    </Button>
                </div>
                <div className="w-full max-w-md mx-auto">
                    <Image
                        src="https://i.pinimg.com/736x/3b/7d/58/3b7d587955ca11f3d0684fe732f1f52b.jpg"
                        width={550}
                        height={1000}
                        alt="An illustration representing a spiritual journey and personal growth."
                        data-ai-hint="spiritual journey illustration"
                        className="overflow-hidden rounded-xl object-contain"
                    />
                </div>
            </div>
        </section>

      {/* Footer Teaser */}
        <section className="w-full py-12 md:py-16 bg-muted/20">
            <div className="container text-center">
                <h3 className="text-2xl font-headline text-accent">Wherever you are on your path, Shikharji Darshan walks with you.</h3>
                 <Button asChild size="lg" className="mt-6 font-headline">
                    <Link href="/itinerary">Get Started Today</Link>
                </Button>
            </div>
        </section>
    </div>
  );
}
