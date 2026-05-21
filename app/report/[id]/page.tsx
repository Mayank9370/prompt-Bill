import ResultCard from "@/components/results/ResultCard";
import RecommendationCard from "@/components/results/RecommendationCard";
import AISummaryCard from "@/components/results/AISummaryCard";
import { Wallet, PiggyBank, ArrowRight, Share2, Download } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

export default function PublicReportPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the report details using params.id
  
  return (
    <div className="flex-1 w-full bg-muted/20 pb-16 pt-8">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-background rounded-xl border border-muted shadow-sm">
        
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">PromptBill Report</h1>
            <p className="text-muted-foreground">
              Report ID: {params.id} &bull; Generated on May 21, 2026
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b pb-2">Executive Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <ResultCard 
                title="Total AI Spend" 
                value="$362/mo" 
                subtitle="$4,344/yr" 
                icon={<Wallet className="h-4 w-4" />} 
              />
              <ResultCard 
                title="Identified Waste" 
                value="$100/mo" 
                subtitle="$1,200/yr" 
                icon={<PiggyBank className="h-4 w-4" />} 
                trend="down"
              />
            </div>
            <AISummaryCard />
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b pb-2">Actionable Recommendations</h3>
            
            <div className="space-y-4">
              <RecommendationCard 
                title="Downgrade ChatGPT Team"
                description="ChatGPT Team is unnecessary for 2 active users. Downgrading to ChatGPT Plus will save you money while keeping GPT-4 access."
                savings={40}
                priority="high"
              />

              <RecommendationCard 
                title="Consolidate AI Coding"
                description="You have overlapping seats for GitHub Copilot and Cursor. Standardizing on one tool for the team could eliminate redundant subscriptions."
                savings={60}
                priority="medium"
              />
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 text-center">
          <h4 className="text-xl font-bold text-primary mb-2">Want to optimize your own stack?</h4>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
            Run a free audit in seconds and discover how much your team could save on AI subscriptions.
          </p>
          <a href="/audit" className={buttonVariants()}>
            Run Free Audit <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
