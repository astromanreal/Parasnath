
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Palette, Languages, Bell, Info, Sun, Moon, Sparkles, Contrast, Text, ListTree } from 'lucide-react';
import { ThemeSelector } from '@/components/settings/theme-selector';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Shikharji Darshan',
  description: 'Personalize your app experience. Adjust settings for theme, language, accessibility, and notifications to suit your spiritual journey.',
  openGraph: {
    title: 'Customize Your App Experience',
    description: 'Adjust theme, language, and notification settings.',
  },
};


const featuresList = [
    "Personal AI Itinerary Planner",
    "Interactive Shikharji & Parasnath Guide",
    "Madhuban Temples Explorer",
    "Jain Dharma & Saints Library",
    "Global Jain Pilgrimage Sites Directory",
    "Spiritual Offerings & Services"
]

export default function SettingsPage() {
  return (
    <div className="w-full py-12 md:py-16 bg-muted/20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="p-3 bg-primary/20 rounded-full">
            <Settings className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Settings
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Personalize your spiritual journey and app experience.
          </p>
        </div>

        <div className="space-y-8">
            {/* --- Theme & Appearance --- */}
            <Card className="shadow-lg border-0">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Palette className="h-6 w-6 text-primary" />
                        <CardTitle className="font-headline text-2xl">App Theme & Appearance</CardTitle>
                    </div>
                    <CardDescription>
                    Choose a color theme that resonates with your spiritual mood.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ThemeSelector />
                </CardContent>
            </Card>
            
            {/* --- Language & Accessibility --- */}
            <Card className="shadow-lg border-0">
                <CardHeader>
                    <div className="flex items-center gap-4">
                         <Languages className="h-6 w-6 text-primary" />
                        <CardTitle className="font-headline text-2xl">Language & Accessibility</CardTitle>
                    </div>
                    <CardDescription>
                    Adjust settings for language and easier readability.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <Label className="font-semibold text-lg mb-2 block">Choose Language</Label>
                        <Select defaultValue="english">
                            <SelectTrigger className="w-full md:w-[280px]">
                                <SelectValue placeholder="Select a language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                                <SelectItem value="gujarati">ગુજરાતી (Gujarati)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                        <Label htmlFor="large-font" className="flex items-center gap-3 text-base">
                            <Text className="h-5 w-5 text-primary"/>
                            Enable Larger Font Size
                        </Label>
                        <Switch id="large-font" />
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                        <Label htmlFor="high-contrast" className="flex items-center gap-3 text-base">
                            <Contrast className="h-5 w-5 text-primary"/>
                            Enable High-Contrast Mode
                        </Label>
                        <Switch id="high-contrast" />
                    </div>
                </CardContent>
            </Card>

            {/* --- Notifications --- */}
             <Card className="shadow-lg border-0">
                <CardHeader>
                     <div className="flex items-center gap-4">
                         <Bell className="h-6 w-6 text-primary" />
                        <CardTitle className="font-headline text-2xl">Notification Settings</CardTitle>
                    </div>
                    <CardDescription>
                    Manage alerts for spiritual events, updates, and more.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                        <Label htmlFor="event-alerts">Spiritual Event Alerts</Label>
                        <Switch id="event-alerts" defaultChecked/>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                        <Label htmlFor="content-alerts">New Temple or Article Alerts</Label>
                        <Switch id="content-alerts" defaultChecked/>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                        <Label htmlFor="pravachan-alerts">Live Pravachan Reminders</Label>
                        <Switch id="pravachan-alerts" />
                    </div>
                     <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                        <Label htmlFor="festival-alerts">Festival Announcements</Label>
                        <Switch id="festival-alerts" defaultChecked/>
                    </div>
                </CardContent>
            </Card>

             {/* --- App Version --- */}
             <Card className="shadow-lg border-0">
                <CardHeader>
                     <div className="flex items-center gap-4">
                         <Info className="h-6 w-6 text-primary" />
                        <CardTitle className="font-headline text-2xl">About This App</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center text-muted-foreground">
                        <span className="font-semibold text-accent">Current Version:</span>
                        <span>v1.0.0</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                        <span className="font-semibold text-accent">Release Date:</span>
                        <span>July 2025</span>
                    </div>
                    <div>
                        <h3 className="font-semibold text-accent mb-3 mt-4 text-lg">Key Features in This Version:</h3>
                        <ul className="space-y-2">
                           {featuresList.map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                                    <ListTree className="h-5 w-5 text-primary/70 shrink-0"/>
                                    <span>{feature}</span>
                                </li>
                           ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>

        </div>
      </div>
    </div>
  );
}
