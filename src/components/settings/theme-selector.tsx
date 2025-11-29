
'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Check, Sun, Moon, TreePalm, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const themes = [
    { name: 'Peaceful White', value: 'light', icon: Sun, colors: ['bg-slate-100', 'bg-blue-200'] },
    { name: 'Sacred Sandalwood', value: 'sandalwood', icon: Droplets, colors: ['bg-yellow-100', 'bg-red-200'] },
    { name: 'Divine Night', value: 'dark', icon: Moon, colors: ['bg-indigo-950', 'bg-amber-400'] },
    { name: 'Forest Tranquility', value: 'forest', icon: TreePalm, colors: ['bg-stone-800', 'bg-green-400'] }
];

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [activeThemeName, setActiveThemeName] = React.useState('System Default');

  React.useEffect(() => {
    const currentTheme = themes.find(t => t.value === theme);
    setActiveThemeName(currentTheme ? currentTheme.name : 'System Default');
  }, [theme]);
  

  return (
    <div className="space-y-4">
        <p className="text-muted-foreground">Selected Theme: <span className="font-bold text-primary">{activeThemeName}</span></p>
        <div className="flex items-center gap-4">
            <TooltipProvider>
            {themes.map((t) => (
                <Tooltip key={t.value}>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setTheme(t.value)}
                            className={cn(
                                'h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all',
                                theme === t.value ? 'border-primary scale-110' : 'border-transparent'
                            )}
                            aria-label={`Select ${t.name} theme`}
                        >
                            <div className="h-10 w-10 rounded-full overflow-hidden flex">
                                <div className={cn('w-1/2 h-full', t.colors[0])} />
                                <div className={cn('w-1/2 h-full', t.colors[1])} />
                            </div>
                            {theme === t.value && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                                    <Check className="h-6 w-6 text-white" />
                                </div>
                            )}
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{t.name}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
            </TooltipProvider>
        </div>
    </div>
  );
}
