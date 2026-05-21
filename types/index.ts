export type AuditStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface AuditSummary {
  totalSpend: number;
  potentialSavings: number;
  anomaliesFound: number;
  status: AuditStatus;
}
