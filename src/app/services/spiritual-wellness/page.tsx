
'use client'

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Calendar, Archive, Mic, PlayCircle, Clock, Users, ArrowRight, UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const liveSessions = [
    {
        title: "Guided Morning Meditation (Samayik)",
        speaker: "Acharya Gyan Sagar Ji",
        date: "Every Sunday",
        time: "7:00 AM IST",
        type: "Meditation",
        isFree: true,
    },
    {
        title: "Pravachan on Anekantavada",
        speaker: "Muni Pranamya Sagar Ji",
        date: "July 28, 2024",
        time: "6:00 PM IST",
        type: "Discourse",
        isFree: true,
    },
    {
        title: "Navkar Mantra Chanting Workshop",
        speaker: "Samaniji Smit Pragya",
        date: "August 4, 2024",
        time: "8:00 AM IST",
        type: "Workshop",
        isFree: false,
    }
];

const pastSessions = [
  {
    title: "Understanding Karma Theory",
    speaker: "Acharya Gyan Sagar Ji",
    topic: "Philosophy",
    duration: "45 min",
    thumbnail: "https://placehold.co/600x400.png",
    thumbnailHint: "ancient scroll",
  },
  {
    title: "The Essence of Ahimsa",
    speaker: "Muni Pranamya Sagar Ji",
    topic: "Ethics",
    duration: "55 min",
    thumbnail: "https://placehold.co/600x400.png",
    thumbnailHint: "peaceful nature",
  },
  {
    title: "Jain Path to Mindfulness",
    speaker: "Samaniji Smit Pragya",
    topic: "Meditation",
    duration: "30 min",
    thumbnail: "https://placehold.co/600x400.png",
    thumbnailHint: "meditation pose",
  }
];

const speakers = [
    {
        name: "Acharya Gyan Sagar Ji",
        title: "Digambara Acharya",
        avatar: "https://placehold.co/100x100.png",
        avatarHint: "wise monk",
        specialization: "Jain Philosophy, Meditation"
    },
    {
        name: "Muni Pranamya Sagar Ji",
        title: "Digambara Monk & Scholar",
        avatar: "https://placehold.co/100x100.png",
        avatarHint: "scholar monk",
        specialization: "Karma Theory, Youth Guidance"
    },
    {
        name: "Samaniji Smit Pragya",
        title: "Samaniji (Nun)",
        avatar: "https://placehold.co/100x100.png",
        avatarHint: "female monk",
        specialization: "Chanting, Practical Jainism"
    }
]

export default function SpiritualWellnessPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Person meditating peacefully in a serene natural environment."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="peaceful meditation"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Video className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Spiritual Wellness
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Join live meditations, pravachans, and workshops rooted in Jain values. Nurture your inner peace from anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
          
          {/* Upcoming Live Sessions */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Upcoming Live Sessions</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    Join our global community in real-time for spiritual learning and practice.
                </p>
            </div>
            <div className="space-y-6">
                {liveSessions.map((session) => (
                    <Card key={session.title} className="shadow-lg border-0 bg-card/50 flex flex-col md:flex-row items-center justify-between p-6 gap-4">
                        <div className="flex-grow text-center md:text-left">
                            <Badge variant="secondary" className="mb-2">{session.type}</Badge>
                            <CardTitle className="font-headline text-2xl">{session.title}</CardTitle>
                            <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-muted-foreground">
                                <div className="flex items-center gap-2"><Mic className="h-4 w-4"/> {session.speaker}</div>
                                <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> {session.date}, {session.time}</div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                             <Button size="lg" className="font-headline w-full md:w-auto">
                                <Link href="/contact">Join Session</Link>
                             </Button>
                             {session.isFree ? <Badge>Free to Join</Badge> : <Badge variant="destructive">Donation-based</Badge>}
                        </div>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <Button variant="outline" className="font-headline">
                    <Link href="/contact" className="flex items-center gap-2"><Calendar/> View Full Schedule</Link>
                </Button>
            </div>
          </section>

          {/* Archive Section */}
          <section>
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Archive of Past Sessions</h2>
                 <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    Missed a session? Watch recordings of our pravachans and workshops anytime.
                </p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pastSessions.map((session) => (
                    <Card key={session.title} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                        <div className="relative h-48 w-full">
                            <Image 
                                src={session.thumbnail}
                                alt={`Thumbnail for the session: ${session.title}`}
                                fill
                                className="object-cover rounded-t-lg"
                                data-ai-hint={session.thumbnailHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                                <PlayCircle className="h-12 w-12 text-white/80"/>
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{session.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">By {session.speaker}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                           <Badge variant="outline">{session.topic}</Badge>
                        </CardContent>
                        <CardFooter>
                           <Button asChild className="w-full font-headline" variant="secondary">
                                <Link href="/contact">Watch Now ({session.duration})</Link>
                           </Button>
                        </CardFooter>
                    </Card>
                ))}
             </div>
             <div className="text-center mt-12">
                <Button variant="outline" className="font-headline">
                    <Link href="/contact" className="flex items-center gap-2"><Archive/> Browse Full Archive</Link>
                </Button>
            </div>
          </section>
          
          {/* Speakers Section */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Guiding Lights</h2>
                 <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    Learn from revered Acharyas, Munis, and scholars dedicated to spreading Jain wisdom.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {speakers.map((speaker) => (
                    <Card key={speaker.name} className="shadow-lg border-0 bg-card/50 text-center items-center flex flex-col p-6">
                        <UserCircle2 className="h-16 w-16 text-primary/70 mb-4" />
                        <h3 className="font-headline text-xl font-bold">{speaker.name}</h3>
                        <p className="text-primary font-semibold">{speaker.title}</p>
                        <p className="text-sm text-muted-foreground mt-2">Expertise in: {speaker.specialization}</p>
                    </Card>
                ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
