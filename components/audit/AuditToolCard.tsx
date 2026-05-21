import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2 } from "lucide-react";

interface AuditToolCardProps {
  id: string;
  onRemove: (id: string) => void;
}

export default function AuditToolCard({ id, onRemove }: AuditToolCardProps) {
  return (
    <Card className="mb-4 overflow-visible border-muted shadow-sm group">
      <CardContent className="p-4 sm:p-6 relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive"
          onClick={() => onRemove(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Tool Name
            </label>
            <Select defaultValue="chatgpt">
              <SelectTrigger>
                <SelectValue placeholder="Select Tool" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chatgpt">ChatGPT</SelectItem>
                <SelectItem value="claude">Claude</SelectItem>
                <SelectItem value="cursor">Cursor</SelectItem>
                <SelectItem value="copilot">GitHub Copilot</SelectItem>
                <SelectItem value="gemini">Gemini</SelectItem>
                <SelectItem value="openai_api">OpenAI API</SelectItem>
                <SelectItem value="anthropic_api">Anthropic API</SelectItem>
                <SelectItem value="windsurf">Windsurf</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Plan / Tier
            </label>
            <Select defaultValue="team">
              <SelectTrigger>
                <SelectValue placeholder="Select Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="plus">Pro / Plus</SelectItem>
                <SelectItem value="team">Team / Business</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Number of Seats
            </label>
            <Input type="number" defaultValue={5} min={1} />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Monthly Spend ($)
            </label>
            <Input type="number" defaultValue={150} min={0} step="0.01" />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Primary Use Case
            </label>
            <Select defaultValue="coding">
              <SelectTrigger>
                <SelectValue placeholder="Select Use Case" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coding">Software Engineering / Coding</SelectItem>
                <SelectItem value="writing">Content Creation / Copywriting</SelectItem>
                <SelectItem value="marketing">Marketing & SEO</SelectItem>
                <SelectItem value="operations">General Operations</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
