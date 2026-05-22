import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import RecommendationCard from "./RecommendationCard";

interface AuditResultsProps {
  currentMonthlySpend: number;
}

export default function AuditResults({ currentMonthlySpend }: AuditResultsProps) {
  // Mock logic for today
  const potentialSavings = Math.floor(currentMonthlySpend * 0.35); // 35% arbitrary savings
  const optimizedSpend = currentMonthlySpend - potentialSavings;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="relative border-muted shadow-lg overflow-hidden bg-background">
        <CardHeader className="bg-muted/10 border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl">Audit Results</CardTitle>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              Analysis Complete
            </Badge>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase font-medium">Current</p>
              <p className="text-2xl font-bold">${currentMonthlySpend}<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase font-medium">Optimized</p>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">${optimizedSpend}<span className="text-sm font-normal">/mo</span></p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase font-medium">Potential Savings</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-500">${potentialSavings}<span className="text-sm font-normal">/mo</span></p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 bg-muted/5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Recommendations Found (2)</h3>
          
          <div className="space-y-4">
            <RecommendationCard 
              title="ChatGPT Team may be oversized"
              description="ChatGPT Team is designed for larger collaborative workspaces. For a 2-person workflow, downgrading to individual Plus accounts provides the same model access at a lower cost."
              savings={20}
              type="downgrade"
            />
            
            <RecommendationCard 
              title="Cursor Business vs Pro"
              description="Cursor Business can likely be downgraded to Pro unless you specifically require centralized billing and strict privacy enforcement at the organizational level."
              savings={40}
              type="downgrade"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
