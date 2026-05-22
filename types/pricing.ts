export type PlanType = "free" | "subscription" | "api_direct";

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  recommendedSeatsMin: number;
  recommendedSeatsMax: number;
  type: PlanType;
}

export interface AITool {
  id: string;
  name: string;
  plans: Plan[];
}
