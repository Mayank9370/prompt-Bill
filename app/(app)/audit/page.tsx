import AuditForm from "@/components/audit/AuditForm";

export default function AuditPage() {
  return (
    <div className="flex-1 w-full bg-muted/10 pb-20 pt-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Spend Audit</h1>
          <p className="text-muted-foreground text-lg">
            Calculate your true AI subscription costs and discover immediate savings.
          </p>
        </div>
        <AuditForm />
      </div>
    </div>
  );
}
