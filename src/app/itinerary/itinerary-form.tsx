
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createItineraryAction, type PilgrimageItineraryOutput } from './actions';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Save } from 'lucide-react';

const formSchema = z.object({
  trekSupport: z.string({ required_error: 'Please select a trek support option.' }),
  duration: z.string({ required_error: 'Please select your available duration.' }),
  spiritualFocus: z.string({ required_error: 'Please select your spiritual focus.' }),
  physicalCapabilities: z.string({ required_error: 'Please describe your physical capabilities.' }),
  interests: z.string(),
  timeConstraints: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface ItineraryFormProps {
  onItineraryGenerated: (itinerary: PilgrimageItineraryOutput) => void;
}

export function ItineraryForm({ onItineraryGenerated }: ItineraryFormProps) {
  const [isPending, startTransition] = useTransition();
  const [itineraryResult, setItineraryResult] = useState<PilgrimageItineraryOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trekSupport: 'walking',
      duration: '1-day',
      spiritualFocus: 'darshan-all-tonks',
      physicalCapabilities: 'average-fitness',
      interests: 'none',
      timeConstraints: 'none',
    },
  });

  const onSubmit = (values: FormValues) => {
    setItineraryResult(null);
    startTransition(async () => {
      const result = await createItineraryAction(values);
      if (result.success && result.data) {
        setItineraryResult(result.data);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
      }
    });
  };

  const handleSave = () => {
    if (itineraryResult) {
      onItineraryGenerated(itineraryResult);
      toast({
        title: "Itinerary Saved!",
        description: "You can view it in the 'My Itineraries' tab.",
      });
    }
  };
  
  const getFormattedItinerary = () => {
    if (!itineraryResult) return { __html: '' };
    // Sanitize and parse the markdown to prevent XSS
    const rawHtml = marked.parse(itineraryResult.itinerary);
    const sanitizedHtml = DOMPurify.sanitize(rawHtml as string);
    return { __html: sanitizedHtml };
  };

  return (
    <>
      <Card className="shadow-lg border-0">
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Itinerary Planner</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                    control={form.control}
                    name="trekSupport"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-headline">Trek Support</FormLabel>
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                            >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="walking" />
                                </FormControl>
                                <FormLabel className="font-normal">Walking (Barefoot/Shoes)</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="doli" />
                                </FormControl>
                                <FormLabel className="font-normal">Doli/Palanquin Support</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                <RadioGroupItem value="bike" />
                                </FormControl>
                                <FormLabel className="font-normal">Bike Support (Partial Route)</FormLabel>
                            </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-lg font-headline">Available Duration</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your pilgrimage duration" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="half-day">Half Day (Express Darshan)</SelectItem>
                            <SelectItem value="1-day">Full Day Trek</SelectItem>
                            <SelectItem value="2-day">2-Day Relaxed Journey</SelectItem>
                            <SelectItem value="3-day">3-Day Deep Dive</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
              <FormField
                control={form.control}
                name="spiritualFocus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-headline">Spiritual Focus & Interests</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your primary focus" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="darshan-all-tonks">Darshan of all Tonks</SelectItem>
                        <SelectItem value="meditation-serenity">Meditation and serenity</SelectItem>
                        <SelectItem value="seva-prayers">Seva and evening prayers</SelectItem>
                        <SelectItem value="history-architecture">Learning history and architecture</SelectItem>
                        <SelectItem value="photography">Spiritual photography</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="physicalCapabilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-headline">Physical Capabilities</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your fitness level" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="high-fitness">High Fitness (Can trek for 8+ hours)</SelectItem>
                        <SelectItem value="average-fitness">Average Fitness (Can walk for 3-4 hours)</SelectItem>
                        <SelectItem value="low-fitness">Low Fitness (Need frequent breaks)</SelectItem>
                        <SelectItem value="has-knee-problems">Have knee problems (Need support)</SelectItem>
                        <SelectItem value="traveling-with-elderly">Traveling with elderly or children</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="timeConstraints"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-headline">Other Constraints & Notes</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Any other constraints?" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="none">No major constraints</SelectItem>
                        <SelectItem value="must-return-evening">Must return to Madhuban by evening</SelectItem>
                        <SelectItem value="late-start">Plan for a late start (after 6 AM)</SelectItem>
                        <SelectItem value="avoid-crowds">Prefer quieter, less crowded paths</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} size="lg" className="font-headline w-full">
                {isPending ? 'Generating Your Sacred Plan...' : 'Generate My Journey Plan'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isPending || itineraryResult) && (
        <div className="mt-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Your Sacred Itinerary</CardTitle>
            </CardHeader>
            <CardContent>
              {isPending ? (
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ) : (
                <>
                  <div 
                    className="prose prose-p:text-muted-foreground prose-strong:text-foreground max-w-none font-body text-base leading-relaxed"
                    dangerouslySetInnerHTML={getFormattedItinerary()} 
                  />
                  <Button onClick={handleSave} className="mt-4 w-full" variant="outline">
                    <Save className="mr-2 h-4 w-4" /> Save This Itinerary
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
