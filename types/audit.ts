export type UseCase = "coding" | "writing" | "research" | "data" | "mixed";

export interface AuditEntry {
  id: string;
  tool: string;
  plan: string;
  seats: number;
  spend: number;
  useCase: UseCase;
}

export interface AuditState {
  teamSize: number;
  tools: AuditEntry[];
}
