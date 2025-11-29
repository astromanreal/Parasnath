
import Link from 'next/link';
import { JainHandIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, MoreVertical, Settings, Phone, Compass, Instagram } from 'lucide-react';

const features = [
  { href: "/itinerary", label: "My Journey" },
  { href: "/shikharji", label: "Shikharji Guide" },
  { href: "/parasnath", label: "Parasnath Mountain" },
  { href: "/madhuban", label: "Madhuban City" },
  { href: "/tirthankaras", label: "All Tirthankaras" },
  { href: "/pilgrimage", label: "Global Pilgrimage Guide" },
  { href: "/dharma", label: "Jain Dharma Guide" },
  { href: "/stories", label: "Stories of Saints" },
  { href: "/services", label: "Spiritual Offerings" },
];


export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-auto flex items-center space-x-2">
            <JainHandIcon className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block font-headline">Shikharji Darshan</span>
        </Link>
        
        <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/explore">
                    <Compass className="h-5 w-5" />
                    <span className="sr-only">Explore Features</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <Link href="/contact">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <Link href="/settings">
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                </Link>
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MoreVertical className="h-5 w-5" />
                        <span className="sr-only">More Features</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {features.map((feature) => (
                        <DropdownMenuItem key={feature.href} asChild>
                            <Link 
                                href={feature.href}
                            >
                                {feature.label}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
