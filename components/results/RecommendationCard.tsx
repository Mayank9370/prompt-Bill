import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Lightbulb } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  description: string;
  savings: number;
  priority: "high" | "medium" | "low";
}

export default function RecommendationCard({ title, description, savings, priority }: RecommendationCardProps) {
  const isHighPriority = priority === "high";

  return (
    <Card className={`border-muted shadow-sm overflow-hidden ${isHighPriority ? 'border-amber-200/50 dark:border-amber-900/50' : ''}`}>
      <CardContent className="p-4 sm:p-5 flex gap-4">
        <div className="mt-1 flex-shrink-0">
          {isHighPriority ? (
            <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
            </div>
          ) : (
            <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-500" />
            </div>
          )}
        </div>
        
        <div className="flex-1 space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-semibold text-sm leading-none">{title}</h4>
            <Badge variant="secondary" className="font-mono text-xs text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400">
              Save ${savings}/mo
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
