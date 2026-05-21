import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ResultCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  trend?: "up" | "down" | "neutral";
}

export default function ResultCard({ title, value, subtitle, icon, trend = "neutral" }: ResultCardProps) {
  return (
    <Card className="border-muted/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${trend === 'up' ? 'text-destructive' : trend === 'down' ? 'text-emerald-500' : ''}`}>
          {value}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
}
