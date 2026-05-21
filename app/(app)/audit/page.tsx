import AuditForm from "@/components/audit/AuditForm";
import SavingsHero from "@/components/shared/SavingsHero";

export default function AuditPage() {
  return (
    <div className="flex-1 w-full bg-muted/20 pb-16">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-8">
        
        <div className="mb-10">
          <SavingsHero />
        </div>

        <div className="bg-background rounded-xl border border-muted p-6 shadow-sm">
          <AuditForm />
        </div>

      </div>
    </div>
  );
}
