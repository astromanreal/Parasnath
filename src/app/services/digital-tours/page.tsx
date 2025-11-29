
'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Headphones, Map, Download, BookOpen, ScrollText, History, Volume2, Languages, PlayCircle, PauseCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tourData, TourStop } from '@/lib/tour-data';

export default function DigitalToursPage() {
  const [activeAudio, setActiveAudio] = useState<string | null>(null);

  const toggleAudio = (tonkId: string) => {
    setActiveAudio(prev => (prev === tonkId ? null : tonkId));
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Pilgrim listening to a digital audio guide on their phone at Parasnath hill"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="pilgrim listening phone"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Headphones className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Digital Guided Tours
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Your personal audio companion for the Shikharji pilgrimage. Immerse yourself in the history, stories, and mantras of each sacred Tonk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 space-y-16">
          
          {/* Controls and Intro */}
          <section>
            <Card className="shadow-lg border-0 bg-card/50">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Your Pilgrimage, Guided</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        Follow the sacred path from the base to the summit. Select a Tonk below to listen to its audio guide, read its history, and learn its mantra. You can download guides for offline access during your trek.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2">
                           <Languages className="h-5 w-5 text-primary"/>
                           <span className="font-semibold">Language:</span>
                           <Button variant="ghost" className="text-primary">English</Button>
                           <Button variant="ghost">हिंदी</Button>
                           <Button variant="ghost">ગુજરાતી</Button>
                        </div>
                         <Button variant="outline"><Map className="mr-2 h-4 w-4"/> View Full Map</Button>
                    </div>
                </CardContent>
            </Card>
          </section>

          {/* Tour Stops Accordion */}
          <section>
             <Accordion type="single" collapsible className="w-full space-y-4">
                {tourData.map((stop: TourStop) => (
                    <AccordionItem value={stop.id} key={stop.id} className="bg-card/70 rounded-lg shadow-md border-0">
                        <AccordionTrigger className="text-xl font-headline hover:text-primary no-underline px-6 py-4">
                            <div className='flex items-center gap-4 text-left'>
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <stop.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-headline">{stop.tonkNumber}. {stop.title}</h3>
                                    <p className="text-base font-semibold text-accent">{stop.tirthankara}</p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground border-t pt-6 px-6 pb-6">
                            <div className="space-y-6">
                                {/* Audio Player Section */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-primary/10">
                                    <Button size="icon" className="rounded-full h-14 w-14" onClick={() => toggleAudio(stop.id)}>
                                        {activeAudio === stop.id ? <PauseCircle className="h-8 w-8" /> : <PlayCircle className="h-8 w-8" />}
                                    </Button>
                                    <div className="flex-grow text-center sm:text-left">
                                        <p className="font-bold text-foreground">Play Audio Guide</p>
                                        <p className="text-sm text-muted-foreground">Duration: {stop.audio.duration}</p>
                                    </div>
                                    <Button variant="outline">
                                        <Download className="mr-2 h-4 w-4"/> Save for Offline
                                    </Button>
                                </div>

                                {/* Tabs Section */}
                                <Tabs defaultValue="description" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="description"><BookOpen className="mr-2"/>Description</TabsTrigger>
                                        <TabsTrigger value="history"><History className="mr-2"/>History</TabsTrigger>
                                        <TabsTrigger value="mantra"><Volume2 className="mr-2"/>Mantra</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="description" className="mt-4 text-base leading-relaxed">
                                        <p>{stop.content.description}</p>
                                    </TabsContent>
                                    <TabsContent value="history" className="mt-4 text-base leading-relaxed">
                                        <p>{stop.content.history}</p>
                                    </TabsContent>
                                    <TabsContent value="mantra" className="mt-4">
                                        <blockquote className="border-l-4 border-primary pl-4 italic text-xl font-semibold text-accent">
                                            {stop.content.mantra}
                                        </blockquote>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </section>

        </div>
      </div>
    </div>
  );
}
