"use client";

import { useState } from "react";
import AuditToolCard from "./AuditToolCard";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuditForm() {
  const router = useRouter();
  const [tools, setTools] = useState([{ id: "1" }]);

  const addTool = () => {
    setTools([...tools, { id: Math.random().toString(36).substr(2, 9) }]);
  };

  const removeTool = (id: string) => {
    if (tools.length > 1) {
      setTools(tools.filter((t) => t.id !== id));
    }
  };

  const handleAnalyze = () => {
    // In a real app, this would submit the form data and either show results
    // on this page or redirect to a report page. We'll simulate a scan state.
    // For this mockup, we are just keeping the state in the UI.
    console.log("Analyzing...");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Your AI Stack</h2>
        <p className="text-muted-foreground">
          Enter the AI tools your team is currently paying for to generate a personalized cost optimization report.
        </p>
      </div>
      
      <div className="space-y-4">
        {tools.map((tool) => (
          <AuditToolCard key={tool.id} id={tool.id} onRemove={removeTool} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
        <Button 
          type="button" 
          variant="outline" 
          className="w-full sm:w-auto border-dashed border-2 bg-background hover:bg-muted/50"
          onClick={addTool}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Another Tool
        </Button>

        <Button 
          type="button" 
          className="w-full sm:w-auto sm:ml-auto"
          onClick={handleAnalyze}
        >
          <Search className="mr-2 h-4 w-4" />
          Analyze Spend
        </Button>
      </div>
    </div>
  );
}
