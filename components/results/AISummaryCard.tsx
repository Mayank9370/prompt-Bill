import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AISummaryCard() {
  return (
    <Card className="border-muted shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Your AI Stack Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">ChatGPT Team</span>
            <span className="text-sm text-muted-foreground">5 seats &times; $30 = $150/mo</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Claude Pro</span>
            <span className="text-sm text-muted-foreground">3 seats &times; $20 = $60/mo</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">GitHub Copilot</span>
            <span className="text-sm text-muted-foreground">8 seats &times; $19 = $152/mo</span>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between font-medium">
          <span>Current Monthly Spend</span>
          <span>$362.00</span>
        </div>
        <div className="flex items-center justify-between font-medium text-emerald-600 dark:text-emerald-500">
          <span>Optimized Monthly Spend</span>
          <span>$262.00</span>
        </div>

      </CardContent>
    </Card>
  );
}
