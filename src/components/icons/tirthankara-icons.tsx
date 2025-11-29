import { Icon, LucideProps, LucideIcon, HelpCircle } from "lucide-react";

// --- SVG Icons for symbols not in Lucide ---

const BullIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16.8 7.2a2 2 0 0 1-2.2 2.3c-1.2.1-2.4-.4-3.1-1.5"/>
    <path d="M8 12.5c-.8 1-1.5 2.5-1.5 4.5"/>
    <path d="M18 14c.8-1.5.8-3.3 0-4.8"/>
    <path d="M5.5 22l1.5-2.5"/>
    <path d="M6 22H4"/>
    <path d="M9 14h.01"/>
    <path d="M12 18.5c4-2 6.5-5.5 7-9.5"/>
    <path d="M10.1 5.3A6.5 6.5 0 0 0 5.4 11"/>
    <path d="M2 12h2"/>
    <path d="M17.5 22l-1.5-2.5"/>
    <path d="M18 22h2"/>
  </svg>
);

const SwastikaIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 12h-8v-4h4"/>
    <path d="M12 12v8h4v-4"/>
    <path d="M12 12h8v4h-4"/>
    <path d="M12 12v-8h-4v4"/>
  </svg>
);

const ShrivatsaIcon = (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L9.5 5h5L12 2z"/>
      <path d="M12 22l2.5-3h-5L12 22z"/>
      <path d="M22 12l-3-2.5v5L22 12z"/>
      <path d="M2 12l3-2.5v5L2 12z"/>
      <circle cx="12" cy="12" r="4"/>
    </svg>
);

const VajraIcon = (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20"/>
        <path d="M6 8l-4 4 4 4"/>
        <path d="M18 8l4 4-4 4"/>
        <path d="M8 12h8"/>
    </svg>
);

const KalashaIcon = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 2h8"/>
    <path d="M8 20h8"/>
    <path d="M10 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2"/>
    <path d="M10 20v-2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"/>
    <path d="M5 14a2 2 0 0 0-2 2v2h18v-2a2 2 0 0 0-2-2Z"/>
    <path d="M5 14V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"/>
  </svg>
);


// --- Mapping from symbol name to icon component ---

const symbolIconMap: { [key: string]: LucideIcon | ((props: LucideProps) => JSX.Element) } = {
  "Bull": BullIcon,
  "Elephant": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16a2 2 0 0 1-2 2h-4.63a2 2 0 0 0-1.79 1.11L11 22"/><path d="M18 18V7.5c0-3.45-2.5-6.5-5.5-6.5S7 4.05 7 7.5V18"/><path d="M9 18a3 3 0 1 1-6 0c0-1.66 1.34-3 3-3s3 1.34 3 3Z"/><path d="M15 18a3 3 0 1 1 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3Z"/><path d="M12 2v2"/><path d="M12 18v-2"/><path d="M2.21 12.35a6.5 6.5 0 0 1 11.58 0"/><path d="M10 12.01V12"/></svg>,
  "Horse": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3.5 21h17"/><path d="M5.12 7.12A6 6 0 0 1 12 5c2.6 0 4.87.82 6.5 2.12"/><path d="M12 13V5"/><path d="M4 13H2"/><path d="M20 13h2"/><path d="m5 17 3-9"/><path d="m19 17-3-9"/></svg>,
  "Monkey": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h- vedit2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"/><path d="M16 17a2 2 0 0 1 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"/><path d="M8 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"/><path d="M12 7V5"/><path d="M7 17a2 2 0 0 1 2-2h1"/><path d="M17 17a2 2 0 0 0-2-2h-1"/><path d="M4 14a2 2 0 0 1 2-2h1"/><path d="M20 14a2 2 0 0 0-2-2h-1"/><path d="M4.15 8.5a6 6 0 0 1 7.85-5.5 6 6 0 0 1 7.85 5.5"/><path d="M8 22a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z"/></svg>,
  "Goose (or Curlew)": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15.7 2.1a2 2 0 0 1 .4 1.8L13.5 13l6 6"/><path d="M17 3l-1.5 1.5"/><path d="M12.5 13l-3 3"/><path d="M11 22l-3-3"/><path d="M8 16H2l3-10h6l3 10Z"/><path d="M5 16l1-5"/></svg>,
  "Red Lotus": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 20a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"/><path d="M12 2v16"/><path d="M8 6c0-2 2-4 4-4s4 2 4 4c0 .8-.2 1.6-.6 2.3"/><path d="M12 12a3.6 3.6 0 0 1-3.4-3.5c0-.9.4-1.8 1-2.4"/><path d="M12 12a3.6 3.6 0 0 0 3.4-3.5c0-.9-.4-1.8-1-2.4"/></svg>,
  "Swastika": SwastikaIcon,
  "Crescent Moon": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>,
  "Crocodile (or Dolphin)": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13.5 8.5A1.5 1.5 0 1 0 12 7l-1.5 1.5"/><path d="M8 18s1.5-2 4-2 4 2 4 2"/><path d="M10 14h4"/><path d="M18.37 8.63c.09.2.13.41.13.62 0 1.1-.9 2-2 2s-2-.9-2-2a2 2 0 0 1 .14-.65"/><path d="M5.63 8.63c-.09.2-.13.41-.13.62 0 1.1.9 2 2 2s2-.9 2-2a2 2 0 0 0-.14-.65"/><path d="M22 11c-2 0-3.8-.5-5-1.5-1.2-1-2.5-1.5-5-1.5-2.5 0-3.8.5-5 1.5C5.8 10.5 4 11 2 11"/><path d="M2.5 14c2.5 0 4.5-1 6.5-1s4.5 1 6.5 1 4-1 6.5-1"/></svg>,
  "Shrivatsa (or Wishing Tree)": ShrivatsaIcon,
  "Rhinoceros": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 14h18"/><path d="M3 18h18"/><path d="M9 14v-4c0-2.21 1.79-4 4-4s4 1.79 4 4v4"/><path d="M11 6V5a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v1"/><path d="M12 18v2"/><path d="M9 22h6"/></svg>,
  "Buffalo": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 8c-1.93 1.93-3 4.54-3 7.5 0 3.04 1.07 5.58 3 7.5"/><path d="M20 8c1.93 1.93 3 4.54 3 7.5 0 3.04-1.07 5.58-3 7.5"/><path d="M8 12h8"/><path d="M10 15h4"/><path d="M12 2c5 0 8 3 8 5s-3 5-8 5-8-3-8-5 3-5 8-5Z"/></svg>,
  "Boar": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m14 13-1-5 4 4"/><path d="M12 2a4 4 0 0 0-4 4c0 3 4 9 4 9s4-6 4-9a4 4 0 0 0-4-4Z"/><path d="M12 22v-4"/><path d="M8 18h8"/><path d="M6 14h12"/><path d="M7 10h10"/></svg>,
  "Falcon (or Bear)": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"/><path d="M20 7H4"/><path d="M15 2H9"/><path d="M13 2v5"/><path d="M11 2v5"/><path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4"/></svg>,
  "Vajra (Thunderbolt)": VajraIcon,
  "Deer": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12c-2-2.67-4-4-4-4a2 2 0 0 0-3.46-.54l-1 1.74A2 2 0 0 0 4.08 12H6"/><path d="m16 8-2 2"/><path d="M12 12c2-2.67 4-4 4-4a2 2 0 0 1 3.46-.54l1 1.74A2 2 0 0 1 19.92 12H18"/><path d="M14 16c-2.43 0-4.63-.88-6.32-2.39"/><path d="m11.91 13.91 2.76 5.53a1 1 0 0 0 1.66-.02l1.65-3.3"/><path d="M14 16H9a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2"/></svg>,
  "Goat": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 4a2 2 0 0 0-2-2h-.1A1.9 1.9 0 0 0 10 4v3.1a2 2 0 0 1-2 2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3"/><path d="M18 18.2a2.8 2.8 0 0 0 3.4-3.4l-1.6-4.9"/><path d="M14 4a2 2 0 0 1 2-2h.1a1.9 1.9 0 0 1 1.9 2v3.1a2 2 0 0 0 2 2H21a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3"/><path d="M6 18.2a2.8 2.8 0 0 1-3.4-3.4l1.6-4.9"/><path d="M18 22v-2h-2"/><path d="M6 22v-2h2"/></svg>,
  "Fish (or Nandyavarta)": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s1-8 10-8 10 8 10 8-1 8-10 8-10-8-10-8Z"/><circle cx="12" cy="12" r="1"/></svg>,
  "Kalasha (Water Pot)": KalashaIcon,
  "Tortoise": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 13.08V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.92"/><path d="M5.52 13.52A7 7 0 0 1 18.48 13.52"/><path d="M6 12a6 6 0 0 1 12 0"/><path d="M12 12V2L10 4"/><path d="M12 12V2L14 4"/></svg>,
  "Blue Lotus": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 20a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"/><path d="M12 2v16"/><path d="M8 6c0-2 2-4 4-4s4 2 4 4c0 .8-.2 1.6-.6 2.3"/><path d="M12 12a3.6 3.6 0 0 1-3.4-3.5c0-.9.4-1.8 1-2.4"/><path d="M12 12a3.6 3.6 0 0 0 3.4-3.5c0-.9-.4-1.8-1-2.4"/></svg>,
  "Conch Shell": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 11.5a5.5 5.5 0 1 0 11 0c0-2.5-1.5-4-1.5-4 0-1.5-1.5-3-1.5-3s-1.5-1.5-3-1.5-3 1.5-3 1.5 0 1.5-1.5 3c0 0-1.5 1.5-1.5 4Z"/><path d="M12 11.5a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1.5 2.5 1.5 2.5S11 18 12 18s2.5-1.5 2.5-1.5c0 0 1.5-1 1.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"/></svg>,
  "Serpent": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10.1 8.8 4.5 14.5a2.1 2.1 0 1 0 3 3L13 12"/><path d="M12 11.5 8 7.5"/><path d="M17.5 4.5a2.1 2.1 0 0 0-3-3L9 7l.5 5.5Z"/><path d="m14 10 5.5.5"/><path d="M14 19.5a2.1 2.1 0 1 0 3-3L11.5 11"/></svg>,
  "Lion": (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 5.5a2.5 2.5 0 0 0-5 0"/><path d="M12 13h.01"/><path d="M15 13h.01"/><path d="M9 13h.01"/><path d="M8.4 17.5c0 3 2.5 5.5 5.5 5.5h.1c3 0 5.5-2.5 5.5-5.5a4.6 4.6 0 0 0-4.6-4.6h-1.8a4.6 4.6 0 0 0-4.6 4.6Z"/><path d="M12 13a2 2 0 1 1 4 0v0a2 2 0 1 1-4 0v0Z"/><path d="M12 13a2 2 0 1 0-4 0v0a2 2 0 1 0 4 0v0Z"/><path d="M9 10a5.5 5.5 0 0 0-5.5 5.5V22"/><path d="M15 10a5.5 5.5 0 0 1 5.5 5.5V22"/></svg>,
};


/**
 * Returns the corresponding icon component for a given Tirthankara symbol.
 * @param symbol The name of the symbol (e.g., "Bull", "Elephant").
 * @returns A LucideIcon component or a custom SVG component.
 */
export const getSymbolIcon = (symbol: string): LucideIcon | ((props: LucideProps) => JSX.Element) => {
  return symbolIconMap[symbol] || HelpCircle;
};
