
'use client'

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Package, Sparkles, Truck, Calendar, ShoppingCart, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const giftBoxes = [
  {
    title: "The Pilgrim's Box",
    price: "₹1,501",
    type: "One-Time Purchase",
    image: "https://placehold.co/600x400.png",
    imageHint: "spiritual gift box",
    description: "A curated box of essentials for your spiritual practice.",
    contents: [
      "Authentic Shikharji Prasad",
      "Hand-carved Sandalwood Mala",
      "Set of 5 Agarbattis (Incense)",
      "Booklet of Jain Stotras",
      "Laminated photo of Shikharji"
    ]
  },
  {
    title: "The Festival Seva Box",
    price: "₹2,501",
    type: "Paryushan Special",
    image: "https://placehold.co/600x400.png",
    imageHint: "festival gift box",
    description: "Perfect for observing holy festivals with devotion.",
    contents: [
      "All items from the Pilgrim's Box",
      "Pure Ghee Diya with stand",
      "Small silver-plated Tirthankar idol",
      "Book on the significance of Paryushan",
      "Voucher for one Annadan meal"
    ]
  },
  {
    title: "Monthly Blessings Subscription",
    price: "₹1,101/month",
    type: "Subscription",
    image: "https://placehold.co/600x400.png",
    imageHint: "subscription box spiritual",
    description: "Receive sacred items from Shikharji every month.",
    contents: [
      "Varying Prasad and sweets each month",
      "New spiritual story booklet",
      "Different handmade craft or souvenir",
      "Exclusive access to online pravachan",
    ]
  }
];

const faqs = [
    {
        question: "How is the Prasad sourced?",
        answer: "We partner directly with bhojanshalas and temples in Madhuban to source fresh, authentic, and pure prasad for every box."
    },
    {
        question: "What is the delivery time?",
        answer: "Deliveries within India typically take 5-7 business days. You will receive a tracking link once your order is shipped."
    },
    {
        question: "Can I customize a box for a special occasion?",
        answer: "Yes! We offer custom boxes for events like birthdays, anniversaries, or special pujas. Please contact us to discuss your needs."
    }
]

export default function GiftBoxPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-accent/10 text-center">
        <Image 
            src="https://placehold.co/1920x1080.png"
            alt="Beautifully arranged spiritual items like mala beads, incense, and prasad for a gift box."
            layout="fill"
            objectFit="cover"
            className="opacity-10"
            data-ai-hint="spiritual flatlay"
        />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Gift className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline">
              Shikharji Gift Box
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Sacred blessings, handmade art, and puja essentials from the holy land of Shikharji, delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-24">
          
          {/* Product Showcase */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Our Curated Boxes</h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                    Each box is thoughtfully assembled to bring the spiritual essence of Shikharji into your home.
                </p>
            </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {giftBoxes.map((box) => (
                    <Card key={box.title} className="flex flex-col shadow-lg hover:shadow-primary/20 transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                        <div className="relative h-64 w-full">
                            <Image 
                                src={box.image}
                                alt={`Shikharji ${box.title} spiritual gift box.`}
                                fill
                                className="object-cover rounded-t-lg"
                                data-ai-hint={box.imageHint}
                            />
                            <Badge className="absolute top-4 right-4">{box.type}</Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{box.title}</CardTitle>
                            <p className="text-2xl font-bold text-primary">{box.price}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                           <p className="text-muted-foreground mb-4">{box.description}</p>
                           <h4 className="font-semibold text-accent mb-2">What's Inside:</h4>
                           <ul className="space-y-2 text-sm text-muted-foreground">
                                {box.contents.map(item => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-primary/70 shrink-0"/>
                                        <span>{item}</span>
                                    </li>
                                ))}
                           </ul>
                        </CardContent>
                        <CardFooter>
                           <Button asChild className="w-full font-headline">
                                <Link href="/contact"><ShoppingCart className="mr-2"/>Order Now</Link>
                           </Button>
                        </CardFooter>
                    </Card>
                ))}
             </div>
          </section>

          {/* How It Works */}
          <section>
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <Package className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-headline mb-2">1. Choose Your Box</h3>
                    <p className="text-muted-foreground">Select a one-time gift or a monthly subscription.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <Calendar className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-headline mb-2">2. Place Your Order</h3>
                    <p className="text-muted-foreground">Provide your details through our simple contact & order form.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <Truck className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-headline mb-2">3. Receive Blessings</h3>
                    <p className="text-muted-foreground">Your sacred box is shipped with care, right to your home.</p>
                </div>
            </div>
          </section>

           {/* FAQs */}
          <section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={faq.question} className="bg-card/50 rounded-lg mb-2 px-4 shadow-sm">
                        <AccordionTrigger className="text-lg font-headline hover:text-primary no-underline text-left">
                            <div className="flex items-center gap-3">
                                <HelpCircle className="h-5 w-5 text-primary"/>
                                {faq.question}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
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
