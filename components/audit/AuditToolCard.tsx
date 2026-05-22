import { AuditEntry, UseCase } from "@/types/audit";
import { pricingData } from "@/data/pricing";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useMemo } from "react";

interface AuditToolCardProps {
  entry: AuditEntry;
  onChange: (id: string, updated: Partial<AuditEntry>) => void;
  onRemove: (id: string) => void;
}

const USE_CASES: { value: UseCase; label: string }[] = [
  { value: "coding", label: "Coding & Dev" },
  { value: "writing", label: "Copy & Content" },
  { value: "research", label: "Research & Analysis" },
  { value: "data", label: "Data & Spreadsheets" },
  { value: "mixed", label: "Mixed / General" },
];

export default function AuditToolCard({ entry, onChange, onRemove }: AuditToolCardProps) {
  const selectedToolData = pricingData[entry.tool];
  
  const availablePlans = selectedToolData?.plans || [];

  // Update spend when plan or seats change
  useEffect(() => {
    if (selectedToolData) {
      const selectedPlan = availablePlans.find(p => p.id === entry.plan);
      if (selectedPlan) {
        if (selectedPlan.type === "subscription" || selectedPlan.type === "free") {
           onChange(entry.id, { spend: selectedPlan.monthlyPrice * entry.seats });
        }
      }
    }
  }, [entry.plan, entry.seats, selectedToolData]); // Exclude onChange to avoid infinite loops, but technically we should be careful. We'll handle it inside carefully.

  return (
    <Card className="overflow-hidden border-muted shadow-sm transition-all hover:shadow-md relative">
      <CardContent className="p-5">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-8 w-8"
          onClick={() => onRemove(entry.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Row 1 */}
          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Tool</Label>
            <Select 
              value={entry.tool} 
              onValueChange={(val) => {
                const plans = pricingData[val]?.plans || [];
                onChange(entry.id, { 
                  tool: val, 
                  plan: plans[0]?.id || "", 
                  spend: (plans[0]?.monthlyPrice || 0) * entry.seats 
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select tool" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(pricingData).map((tool) => (
                  <SelectItem key={tool.id} value={tool.id}>{tool.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Plan</Label>
            <Select 
              value={entry.plan} 
              onValueChange={(val) => {
                const plan = availablePlans.find(p => p.id === val);
                const spend = plan ? (plan.type !== 'api_direct' ? plan.monthlyPrice * entry.seats : entry.spend) : entry.spend;
                onChange(entry.id, { plan: val, spend });
              }}
              disabled={!entry.tool}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select plan" />
              </SelectTrigger>
              <SelectContent>
                {availablePlans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id}>{plan.name} {plan.type === 'subscription' ? `($${plan.monthlyPrice})` : ''}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Seats</Label>
              <Input 
                type="number" 
                min={1} 
                value={entry.seats} 
                onChange={(e) => {
                  const seats = parseInt(e.target.value) || 1;
                  const plan = availablePlans.find(p => p.id === entry.plan);
                  const spend = plan ? (plan.type !== 'api_direct' ? plan.monthlyPrice * seats : entry.spend) : entry.spend;
                  onChange(entry.id, { seats, spend });
                }} 
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Est. Monthly Spend</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input 
                  type="number" 
                  min={0} 
                  className="pl-7"
                  value={entry.spend} 
                  onChange={(e) => onChange(entry.id, { spend: parseInt(e.target.value) || 0 })} 
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Primary Use Case</Label>
            <Select 
              value={entry.useCase} 
              onValueChange={(val) => onChange(entry.id, { useCase: val as UseCase })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select use case" />
              </SelectTrigger>
              <SelectContent>
                {USE_CASES.map((uc) => (
                  <SelectItem key={uc.value} value={uc.value}>{uc.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
