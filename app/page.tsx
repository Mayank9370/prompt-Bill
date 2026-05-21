import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, TrendingDown, PiggyBank, Search, Layers, Zap, AlertCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="px-3 py-1 text-sm text-primary bg-primary/10 hover:bg-primary/20 border-primary/20 transition-colors">
            🎉 The TurboTax for AI Subscriptions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Stop Overpaying for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">
              AI Subscriptions
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Quickly audit your AI spend across ChatGPT, Claude, Cursor, and more. Enter your tools to instantly discover unused seats, eliminate redundant plans, and get a personalized optimization report.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/audit" className={`${buttonVariants({ size: "lg" })} h-14 px-8 text-lg font-medium shadow-lg shadow-primary/25`}>
              Start Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/report/example" className={`${buttonVariants({ variant: "outline", size: "lg" })} h-14 px-8 text-lg font-medium bg-background`}>
              View Demo Report
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            No credit card required &bull; Audit takes less than 2 minutes
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why are you wasting money on AI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most teams adopt new AI tools faster than they can manage them, leading to massive subscription overlap and wasted budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-muted shadow-sm bg-muted/10">
              <CardHeader className="space-y-4">
                <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl">Redundant Tooling</CardTitle>
                <CardDescription className="text-base">
                  Paying for ChatGPT Team, Claude Pro, and GitHub Copilot simultaneously when you only need one or two core capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-muted shadow-sm bg-muted/10">
              <CardHeader className="space-y-4">
                <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-xl">Over-provisioned Plans</CardTitle>
                <CardDescription className="text-base">
                  Using an expensive "Team" or "Enterprise" tier for a 3-person startup instead of stacking individual "Pro" subscriptions.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-muted shadow-sm bg-muted/10">
              <CardHeader className="space-y-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl">Forgotten Subscriptions</CardTitle>
                <CardDescription className="text-base">
                  Leaving idle seats active for employees who left or specialized tools (like Midjourney) that your team rarely uses anymore.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 bg-muted/30 border-y border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How PromptBill works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Optimize your stack in three simple steps. No complex integrations or API keys required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-border z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-background border-4 border-muted flex items-center justify-center text-2xl font-bold text-primary shadow-sm">
                1
              </div>
              <h3 className="text-xl font-bold">List your AI tools</h3>
              <p className="text-muted-foreground">Quickly add the tools, plans, and seats your team currently pays for into our secure builder.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold">Analyze spending</h3>
              <p className="text-muted-foreground">Our engine checks your stack against market pricing, feature overlaps, and seat requirements.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="h-20 w-20 rounded-full bg-background border-4 border-muted flex items-center justify-center text-2xl font-bold text-primary shadow-sm">
                3
              </div>
              <h3 className="text-xl font-bold">Get recommendations</h3>
              <p className="text-muted-foreground">Receive a personalized report showing exactly which plans to downgrade, consolidate, or cancel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED TOOLS SECTION */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
            We support optimization across all major AI tools
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['ChatGPT', 'Claude', 'Cursor', 'GitHub Copilot', 'Gemini', 'OpenAI API', 'Anthropic API', 'Windsurf', 'Midjourney', 'Perplexity'].map((tool) => (
              <Badge key={tool} variant="outline" className="px-4 py-2 text-sm sm:text-base font-medium bg-muted/20 hover:bg-muted/50 cursor-default transition-colors">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* SAVINGS PREVIEW SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Real insights that drive immediate ROI.</h2>
              <p className="text-lg text-muted-foreground">
                Stop guessing if you have the right subscription tier. Our audit engine looks at your usage patterns and generates actionable advice you can execute in minutes.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Discover overlapping code assistant subscriptions",
                  "Identify when API usage is cheaper than Pro seats",
                  "Consolidate team tiers into cheaper individual plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="font-medium text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 rounded-3xl transform -rotate-1 scale-105"></div>
              <Card className="relative border-muted/50 shadow-xl overflow-hidden bg-background">
                <CardHeader className="bg-muted/20 border-b pb-6">
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle className="text-lg">Audit Results</CardTitle>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      High Optimization Potential
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase font-medium">Current</p>
                      <p className="text-xl font-bold">$420<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase font-medium">Optimized</p>
                      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-500">$260<span className="text-sm font-normal">/mo</span></p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground uppercase font-medium">Savings</p>
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-500">$160<span className="text-sm font-normal">/mo</span></p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Top Recommendation</h4>
                    <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-sm">Downgrade ChatGPT Team</p>
                        <Badge className="bg-emerald-500 hover:bg-emerald-600">Save $40/mo</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ChatGPT Team is unnecessary for your 2 active users. Downgrading to ChatGPT Plus provides the same model access at a lower cost.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-20 bg-muted/30 border-y border-muted text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-xs font-bold text-white shadow-sm z-[${6-i}]`} style={{ zIndex: 6-i }}>
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Trusted by modern startup teams and indie hackers</h2>
          <p className="text-muted-foreground">
            "PromptBill showed us we were paying for Copilot seats for non-engineers and unused Claude Pro accounts. We cut our AI tooling bill by 35% in five minutes."
          </p>
          <p className="mt-4 font-medium text-sm text-foreground">— Mock Testimonial, Tech Startup</p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-12 border border-primary/10">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Ready to stop overspending?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of teams who have optimized their AI subscriptions. Run a free audit today and see exactly how much you can save.
          </p>
          <div className="pt-4">
            <Link href="/audit" className={`${buttonVariants({ size: "lg" })} h-14 px-10 text-lg font-medium shadow-lg`}>
              Start Your Free Audit <Zap className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PromptBill. This is a mockup for an assignment.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
