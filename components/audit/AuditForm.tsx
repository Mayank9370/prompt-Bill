"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AuditState, AuditEntry } from "@/types/audit";
import { pricingData } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Search, Sparkles } from "lucide-react";
import AuditToolCard from "./AuditToolCard";
import SavingsHero from "./SavingsHero";
import AuditResults from "./AuditResults";

const generateId = () => Math.random().toString(36).substring(2, 9);

export default function AuditForm() {
  const [state, setState, isHydrated] = useLocalStorage<AuditState>("promptbill-audit-state", {
    teamSize: 1,
    tools: [],
  });

  const [showResults, setShowResults] = useState(false);

  // Avoid hydration mismatch
  if (!isHydrated) {
    return <div className="min-h-[400px] flex items-center justify-center">Loading...</div>;
  }

  const addTool = () => {
    const defaultTool = "chatgpt";
    const defaultPlan = pricingData[defaultTool].plans[0];
    
    const newTool: AuditEntry = {
      id: generateId(),
      tool: defaultTool,
      plan: defaultPlan.id,
      seats: 1,
      spend: defaultPlan.type !== 'api_direct' ? defaultPlan.monthlyPrice : 0,
      useCase: "mixed",
    };

    setState((prev) => ({
      ...prev,
      tools: [...prev.tools, newTool],
    }));
  };

  const removeTool = (id: string) => {
    setState((prev) => ({
      ...prev,
      tools: prev.tools.filter((t) => t.id !== id),
    }));
  };

  const updateTool = (id: string, updated: Partial<AuditEntry>) => {
    setState((prev) => ({
      ...prev,
      tools: prev.tools.map((t) => (t.id === id ? { ...t, ...updated } : t)),
    }));
  };

  const updateTeamSize = (size: number) => {
    setState((prev) => ({ ...prev, teamSize: size }));
  };

  const totalMonthlySpend = state.tools.reduce((sum, tool) => sum + tool.spend, 0);
  const totalAnnualSpend = totalMonthlySpend * 12;
  const toolsAnalyzed = state.tools.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Live Spend Summary */}
      <SavingsHero 
        totalMonthlySpend={totalMonthlySpend} 
        totalAnnualSpend={totalAnnualSpend} 
        toolsAnalyzed={toolsAnalyzed} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <div className="bg-background rounded-xl border border-muted p-6 shadow-sm space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-muted">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Your Stack</h2>
                <p className="text-sm text-muted-foreground">List all the AI tools your team is currently paying for.</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Label htmlFor="teamSize" className="text-sm font-medium">Global Team Size</Label>
                <Input 
                  id="teamSize" 
                  type="number" 
                  min={1} 
                  value={state.teamSize}
                  onChange={(e) => updateTeamSize(parseInt(e.target.value) || 1)}
                  className="w-20"
                />
              </div>
            </div>

            {state.tools.length === 0 ? (
              <div className="py-12 px-6 border-2 border-dashed border-muted rounded-xl text-center space-y-4 bg-muted/10">
                <div className="h-12 w-12 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                  <PlusCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Add your first AI tool</h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto mt-1">
                    Start auditing your spend by adding the subscriptions you currently use.
                  </p>
                </div>
                <Button onClick={addTool} className="mt-2">
                  <PlusCircle className="mr-2 h-4 w-4" /> Add AI Tool
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.tools.map((tool) => (
                  <AuditToolCard 
                    key={tool.id} 
                    entry={tool} 
                    onChange={updateTool} 
                    onRemove={removeTool} 
                  />
                ))}
                
                <div className="pt-4 flex justify-between items-center border-t border-muted">
                  <Button variant="outline" onClick={addTool}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Another Tool
                  </Button>
                  
                  <Button 
                    size="lg" 
                    className="shadow-md shadow-primary/20"
                    onClick={() => setShowResults(true)}
                    disabled={state.tools.length === 0}
                  >
                    <Search className="mr-2 h-4 w-4" /> Analyze Spend
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Results */}
        <div className="lg:col-span-5 xl:col-span-4">
          {showResults ? (
            <AuditResults currentMonthlySpend={totalMonthlySpend} />
          ) : (
            <div className="bg-muted/10 border border-muted rounded-xl p-8 text-center h-full min-h-[300px] flex flex-col items-center justify-center space-y-3">
              <div className="h-16 w-16 rounded-full bg-background border border-muted shadow-sm flex items-center justify-center mb-2">
                <Sparkles className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <h3 className="font-semibold text-lg text-muted-foreground">Ready to optimize?</h3>
              <p className="text-sm text-muted-foreground/70 max-w-[250px]">
                Add your tools and click Analyze Spend to discover your potential savings.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
