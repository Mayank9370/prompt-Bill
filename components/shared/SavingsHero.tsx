import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SavingsHero() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-primary px-6 py-10 sm:px-12 sm:py-16 text-center text-primary-foreground">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          Audit Complete
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          You can save <span className="text-emerald-300">$1,200</span> a year.
        </h2>
        
        <p className="text-lg text-primary-foreground/80">
          We found overlapping tools and unused seats. Implement our recommendations today to instantly reduce your AI overhead.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
            Export Full Report
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
            Share with Team <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
