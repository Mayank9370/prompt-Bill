import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Calculator, Layers } from "lucide-react";

interface SavingsHeroProps {
  totalMonthlySpend: number;
  totalAnnualSpend: number;
  toolsAnalyzed: number;
}

export default function SavingsHero({ totalMonthlySpend, totalAnnualSpend, toolsAnalyzed }: SavingsHeroProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-background shadow-sm border-muted">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Current Monthly Spend</p>
            <p className="text-2xl font-bold">${totalMonthlySpend.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-background shadow-sm border-muted">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <TrendingDown className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Estimated Annual Spend</p>
            <p className="text-2xl font-bold">${totalAnnualSpend.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background shadow-sm border-muted">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Tools Analyzed</p>
            <p className="text-2xl font-bold">{toolsAnalyzed}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
