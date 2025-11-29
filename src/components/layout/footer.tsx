import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="text-center text-sm text-muted-foreground md:text-left">
            <p className="font-semibold">Crafted with devotion. Empowering every seeker of truth.</p>
            <p>© 2025 Shikharji Darshan. All Rights Reserved.</p>
        </div>
         <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="/services" className="hover:text-primary">Contribute</Link>
            <Link href="/contact" className="hover:text-primary">Feedback</Link>
        </nav>
      </div>
    </footer>
  );
}
