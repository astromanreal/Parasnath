
'use client';

import { useState } from 'react';
import { ItineraryForm } from './itinerary-form';
import { User, Target, Calendar, Bot, CheckSquare, PlusCircle, Trash2, Eye, Save, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from '@/components/ui/input';
import type { PilgrimageItineraryOutput } from './actions';


type SavedItinerary = {
    id: number;
    title: string;
    date: string;
    content: string;
}

const initialSavedItineraries: SavedItinerary[] = [
    {
        id: 1,
        title: "1-Day Meditation Focused Plan",
        date: "2024-07-15",
        content: "### 1-Day Meditation Focused Plan\n\n**Trek Support:** Walking\n**Spiritual Focus:** Meditation and Serenity\n\n**Morning (3:00 AM - 12:00 PM):**\n- Start trek from Madhuban.\n- Spend extra time for meditation at Chandraprabhu Tonk.\n\n*This is a suggested plan.*",
    },
    {
        id: 2,
        title: "2-Day Relaxed Journey with Doli",
        date: "2024-06-28",
        content: "### 2-Day Relaxed Journey\n\n**Trek Support:** Doli\n**Spiritual Focus:** Darshan of all Tonks\n\n**Day 1:**\n- Focus on the first half of the Tonks, reaching up to Jal Mandir.\n- Overnight stay at a Dharamshala on the hill.\n\n**Day 2:**\n- Cover the remaining Tonks, including the Parasnath Tonk.\n\n*This is a suggested plan.*",
    }
];

const initialSpiritualGoals = [
    { id: "goal1", label: "Complete the full 27km Vandana of Shikharji", completed: false },
    { id: "goal2", label: "Perform Darshan at all 20 Tirthankara Tonks", completed: false },
    { id: "goal3", label: "Visit and pray at Jal Mandir", completed: true },
    { id: "goal4", label: "Reach the sacred summit at Parshwanath Tonk", completed: false },
    { id: "goal5", label: "Chant the Navkar Mantra 108 times on the holy hill", completed: true },
    { id: "goal6", label: "Perform Samayik (48 mins of equanimity) at a serene spot", completed: false },
    { id: "goal7", label: "Observe silence (Maun Vrat) for at least one hour during the trek", completed: false },
    { id: "goal8", label: "Offer prayers at Gautam Swami Tonk to begin the yatra", completed: true },
    { id: "goal9", label: "Participate in Annadan (food donation) at a Bhojanshala in Madhuban", completed: false },
    { id: "goal10", label: "Learn the names of the 20 Tirthankaras who attained Moksha here", completed: false },
    { id: "goal11", label: "Perform the Vandana barefoot (if physically able)", completed: false },
    { id: "goal12", label: "Read or listen to the story of a Tirthankara on the journey", completed: false },
]

export default function ItineraryPage() {
  const [savedItineraries, setSavedItineraries] = useState(initialSavedItineraries);
  const [spiritualGoals, setSpiritualGoals] = useState(initialSpiritualGoals);
  const [newGoal, setNewGoal] = useState('');
  const [isAddGoalDialogOpen, setIsAddGoalDialogOpen] = useState(false);

  const handleToggleGoal = (id: string) => {
    setSpiritualGoals(
      spiritualGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (newGoal.trim()) {
      const newGoalObject = {
        id: `goal${spiritualGoals.length + 1}`,
        label: newGoal.trim(),
        completed: false,
      };
      setSpiritualGoals([...spiritualGoals, newGoalObject]);
      setNewGoal('');
      setIsAddGoalDialogOpen(false);
    }
  };

  const handleSaveItinerary = (itineraryData: PilgrimageItineraryOutput) => {
    // Extract title from markdown
    const titleMatch = itineraryData.itinerary.match(/###\s*(.*)/);
    const title = titleMatch ? titleMatch[1] : "My Saved Itinerary";

    const newItinerary: SavedItinerary = {
        id: Date.now(),
        title: title,
        date: new Date().toISOString().split('T')[0],
        content: itineraryData.itinerary
    };
    setSavedItineraries(prev => [newItinerary, ...prev]);
  };
  
  const handleDeleteItinerary = (id: number) => {
    setSavedItineraries(prev => prev.filter(itinerary => itinerary.id !== id));
  };
  
  const completedGoals = spiritualGoals.filter(goal => goal.completed).length;
  const totalGoals = spiritualGoals.length;
  const goalProgress = totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;


  return (
    <div className="w-full py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">

        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
            <div className="space-y-2 flex-grow">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    My Shikharji Journey
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                    Welcome, Pilgrim! Your personal dashboard to plan, track, and reflect on your sacred journey.
                </p>
            </div>
             <div className="flex-shrink-0 w-full md:max-w-sm">
                <Card className="shadow-lg border-0 bg-card">
                     <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <User className="h-8 w-8 text-primary"/>
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">Fellow Pilgrim</CardTitle>
                                <p className="text-sm text-muted-foreground">Your Spiritual Journey</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-muted-foreground">Goals Completed</span>
                            <span className="text-primary font-bold">{completedGoals} / {totalGoals}</span>
                        </div>
                        <Progress value={goalProgress} aria-label={`${goalProgress}% of goals completed`} />
                        <div className="flex justify-between items-center text-sm font-medium">
                            <span className="text-muted-foreground">Itineraries Saved</span>
                             <span className="text-primary font-bold">{savedItineraries.length}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        
        <Separator className="my-8" />

        <Tabs defaultValue="planner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-[400px] mb-8">
                <TabsTrigger value="planner"><Bot className="mr-2"/> AI Planner</TabsTrigger>
                <TabsTrigger value="saved"><Calendar className="mr-2"/> My Itineraries</TabsTrigger>
                <TabsTrigger value="goals"><Target className="mr-2"/> My Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="planner">
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                         <ItineraryForm onItineraryGenerated={handleSaveItinerary} />
                    </div>
                    <div className="lg:col-span-2">
                        <Card className="shadow-lg border-0 sticky top-24">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">How it Works</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <div className="flex items-start gap-4">
                                    <div className="font-bold text-primary text-2xl">1</div>
                                    <p>
                                        <strong className="text-foreground">Fill Your Preferences:</strong> Let us know your physical fitness, spiritual interests, and how much time you have.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="font-bold text-primary text-2xl">2</div>
                                    <p>
                                        <strong className="text-foreground">Get Your Plan:</strong> We will generate a personalized day-by-day plan for your Shikharji pilgrimage.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="font-bold text-primary text-2xl">3</div>
                                    <p>
                                        <strong className="text-foreground">Review & Save:</strong> Look over the suggested plan. You can adjust the details or regenerate until it's perfect for your sacred journey.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="saved">
                 <Card className="shadow-lg border-0">
                    <CardHeader>
                        <CardTitle>Saved Itineraries</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {savedItineraries.length > 0 ? (
                            savedItineraries.map((itinerary) => (
                                <div key={itinerary.id} className="flex items-center justify-between p-4 rounded-lg bg-background border">
                                    <div>
                                        <p className="font-semibold font-headline">{itinerary.title}</p>
                                        <p className="text-sm text-muted-foreground">Created on: {itinerary.date}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="icon"><Eye className="h-4 w-4"/></Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>{itinerary.title}</DialogTitle>
                                                    <DialogDescription>Created on {itinerary.date}</DialogDescription>
                                                </DialogHeader>
                                                <div className="prose prose-p:text-muted-foreground prose-strong:text-foreground max-w-none text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: itinerary.content }}/>
                                            </DialogContent>
                                        </Dialog>
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4"/></Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your saved itinerary.
                                                </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDeleteItinerary(itinerary.id)}>Delete</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            ))
                        ) : (
                             <p className="text-muted-foreground">You have no saved itineraries yet. Generate one from the "AI Planner" tab!</p>
                        )}
                    </CardContent>
                 </Card>
            </TabsContent>

            <TabsContent value="goals">
                <Card className="shadow-lg border-0">
                    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-grow">
                          <CardTitle>Spiritual Goals</CardTitle>
                          <p className="text-muted-foreground mt-2">Track your spiritual progress during your journey. Check off goals as you complete them.</p>
                        </div>
                        <Dialog open={isAddGoalDialogOpen} onOpenChange={setIsAddGoalDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4"/>Add New Goal</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                <DialogTitle>Add a New Spiritual Goal</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleAddGoal}>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="goal" className="text-right">
                                        Goal
                                      </Label>
                                      <Input
                                        id="goal"
                                        value={newGoal}
                                        onChange={(e) => setNewGoal(e.target.value)}
                                        className="col-span-3"
                                        placeholder="e.g., Meditate daily for 15 minutes"
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">Add Goal</Button>
                                  </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            {spiritualGoals.map((goal) => (
                                 <div key={goal.id} className="flex items-center space-x-3 p-3 rounded-lg bg-background border hover:bg-muted/50 transition-colors">
                                    <Checkbox id={goal.id} checked={goal.completed} onCheckedChange={() => handleToggleGoal(goal.id)} />
                                    <Label htmlFor={goal.id} className={`flex-grow cursor-pointer ${goal.completed ? 'line-through text-muted-foreground' : ''}`}>
                                        {goal.label}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                 </Card>
            </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
}

    