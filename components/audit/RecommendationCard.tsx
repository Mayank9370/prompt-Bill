import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  description: string;
  savings: number;
  type: "downgrade" | "consolidate" | "cancel" | "good";
}

export default function RecommendationCard({ title, description, savings, type }: RecommendationCardProps) {
  const isGood = type === "good";

  return (
    <Card className={`border ${isGood ? 'border-emerald-200 dark:border-emerald-900/50' : 'border-amber-200 dark:border-amber-900/50'} shadow-sm overflow-hidden`}>
      <div className={`h-1 w-full ${isGood ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {isGood ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500" />
            )}
            <h4 className="font-semibold text-base">{title}</h4>
          </div>
          {savings > 0 && (
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400">
              Save ${savings}/mo
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-2 pl-7">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
