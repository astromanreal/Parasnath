
'use client'

import { useState } from 'react';
import { Heart, Utensils, Construction, Trees, User, Mail, DollarSign, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const sevaOpportunities = [
  {
    id: 'annadan',
    icon: Utensils,
    title: "Annadan (Meal Sponsorship)",
    description: "Sponsor pure, satvic meals for pilgrims and sadhus at Shikharji. Providing food to a seeker is one of the highest forms of dāna (charity).",
    amounts: [501, 1101, 2501],
    quote: "The gift of food is the gift of life. - Jain Proverb"
  },
  {
    id: 'renovation',
    icon: Construction,
    title: "Temple Renovation Fund",
    description: "Contribute to the upkeep and restoration of ancient tonks and temples on the sacred hill, preserving our heritage for future generations.",
    amounts: [1001, 5001, 11001],
    quote: "Building a temple earns merit for a thousand lifetimes. - Agam Literature"
  },
  {
    id: 'dharamshala',
    icon: Trees,
    title: "Dharamshala & Pilgrim Comfort",
    description: "Help improve and maintain dharamshala facilities, ensuring pilgrims have a clean, safe, and peaceful place for rest and reflection.",
    amounts: [751, 1501, 3001],
    quote: "Service to the pilgrims is service to the Tirthankaras."
  }
];

export default function ContributePage() {
    const { toast } = useToast();
    const [selectedSeva, setSelectedSeva] = useState<string>('annadan');
    const [amount, setAmount] = useState<number>(501);

    const handleSevaChange = (sevaId: string) => {
        setSelectedSeva(sevaId);
        const seva = sevaOpportunities.find(s => s.id === sevaId);
        if (seva) {
            setAmount(seva.amounts[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Thank you for your contribution!",
            description: "Your generosity helps preserve the sanctity of Shikharji. Details will be sent to your email.",
        });
    }

  return (
    <div className="w-full py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="p-3 bg-primary/20 rounded-full">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Contribute & Earn Punya
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Participate in the sacred upkeep of Shikharji. Your selfless service (seva) helps thousands of pilgrims and preserves our timeless heritage.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
            {/* Seva Opportunities */}
            <div className="lg:col-span-3 space-y-8">
                {sevaOpportunities.map((seva) => (
                    <Card key={seva.id} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-0">
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full mt-1">
                                <seva.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-2xl">{seva.title}</CardTitle>
                                <p className="text-muted-foreground mt-2">{seva.description}</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                                {seva.quote}
                            </blockquote>
                        </CardContent>
                        <CardFooter className="flex-col items-start gap-4">
                            <p className="font-semibold text-accent">Suggested Contributions:</p>
                            <div className="flex flex-wrap gap-2">
                                {seva.amounts.map(amt => (
                                    <Button key={amt} variant="outline" onClick={() => { setSelectedSeva(seva.id); setAmount(amt); }}>
                                        ₹{amt}
                                    </Button>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Donation Form */}
            <div className="lg:col-span-2">
                <Card className="shadow-lg border-0 sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl flex items-center gap-3"><Gift className="text-primary"/> Make a Donation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input id="name" type="text" placeholder="Your Name" className="pl-10" required />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input id="email" type="email" placeholder="your@email.com" className="pl-10" required/>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Label>Choose Your Seva</Label>
                                <RadioGroup value={selectedSeva} onValueChange={handleSevaChange} className="grid grid-cols-3 gap-2">
                                    <div>
                                        <RadioGroupItem value="annadan" id="annadan" className="sr-only" />
                                        <Label htmlFor="annadan" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                                            <Utensils className="mb-1 h-5 w-5" />
                                            Annadan
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="renovation" id="renovation" className="sr-only" />
                                        <Label htmlFor="renovation" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                                            <Construction className="mb-1 h-5 w-5" />
                                            Temple
                                        </Label>
                                    </div>
                                     <div>
                                        <RadioGroupItem value="dharamshala" id="dharamshala" className="sr-only" />
                                        <Label htmlFor="dharamshala" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary">
                                            <Trees className="mb-1 h-5 w-5" />
                                            Comfort
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="amount">Amount (INR)</Label>
                                 <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input id="amount" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="pl-10 font-bold" required />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="certificate" />
                                <Label htmlFor="certificate" className="text-sm font-normal text-muted-foreground">
                                    I would like to receive a digital Punya certificate.
                                </Label>
                            </div>
                            <Button type="submit" size="lg" className="w-full font-headline">
                                Contribute ₹{amount}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
