import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8 max-w-7xl mx-auto justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold inline-block text-lg">PromptBill</span>
          </Link>
        </div>
        
        <nav className="flex items-center gap-4">
          <Link href="/audit" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">
            Run Audit
          </Link>
          <Link href="https://github.com/your-org/ai-spend-audit" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:block">
            GitHub
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Log in</Button>
            <Link href="/audit" className={buttonVariants({ size: "sm" })}>Start Free Audit</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
