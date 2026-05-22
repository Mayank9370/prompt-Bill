import { AITool } from "@/types/pricing";

export const pricingData: Record<string, AITool> = {
  cursor: {
    id: "cursor",
    name: "Cursor",
    plans: [
      { id: "hobby", name: "Hobby", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 1, type: "free" },
      { id: "pro", name: "Pro", monthlyPrice: 20, recommendedSeatsMin: 1, recommendedSeatsMax: 5, type: "subscription" },
      { id: "business", name: "Business", monthlyPrice: 40, recommendedSeatsMin: 5, recommendedSeatsMax: 100, type: "subscription" },
      { id: "enterprise", name: "Enterprise", monthlyPrice: 100, recommendedSeatsMin: 100, recommendedSeatsMax: 10000, type: "subscription" },
    ],
  },
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    plans: [
      { id: "plus", name: "Plus", monthlyPrice: 20, recommendedSeatsMin: 1, recommendedSeatsMax: 2, type: "subscription" },
      { id: "team", name: "Team", monthlyPrice: 30, recommendedSeatsMin: 2, recommendedSeatsMax: 149, type: "subscription" },
      { id: "enterprise", name: "Enterprise", monthlyPrice: 60, recommendedSeatsMin: 150, recommendedSeatsMax: 10000, type: "subscription" },
      { id: "api_direct", name: "API Direct", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "api_direct" },
    ],
  },
  claude: {
    id: "claude",
    name: "Claude",
    plans: [
      { id: "free", name: "Free", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 1, type: "free" },
      { id: "pro", name: "Pro", monthlyPrice: 20, recommendedSeatsMin: 1, recommendedSeatsMax: 4, type: "subscription" },
      { id: "max", name: "Max", monthlyPrice: 40, recommendedSeatsMin: 1, recommendedSeatsMax: 4, type: "subscription" },
      { id: "team", name: "Team", monthlyPrice: 30, recommendedSeatsMin: 5, recommendedSeatsMax: 149, type: "subscription" },
      { id: "enterprise", name: "Enterprise", monthlyPrice: 60, recommendedSeatsMin: 150, recommendedSeatsMax: 10000, type: "subscription" },
      { id: "api_direct", name: "API Direct", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "api_direct" },
    ],
  },
  github_copilot: {
    id: "github_copilot",
    name: "GitHub Copilot",
    plans: [
      { id: "individual", name: "Individual", monthlyPrice: 10, recommendedSeatsMin: 1, recommendedSeatsMax: 4, type: "subscription" },
      { id: "business", name: "Business", monthlyPrice: 19, recommendedSeatsMin: 5, recommendedSeatsMax: 99, type: "subscription" },
      { id: "enterprise", name: "Enterprise", monthlyPrice: 39, recommendedSeatsMin: 100, recommendedSeatsMax: 10000, type: "subscription" },
    ],
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    plans: [
      { id: "pro", name: "Pro", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "free" },
      { id: "ultra", name: "Ultra", monthlyPrice: 20, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "subscription" },
      { id: "api", name: "API", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "api_direct" },
    ],
  },
  openai_api: {
    id: "openai_api",
    name: "OpenAI API",
    plans: [
      { id: "api_direct", name: "API Direct", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "api_direct" },
    ],
  },
  anthropic_api: {
    id: "anthropic_api",
    name: "Anthropic API",
    plans: [
      { id: "api_direct", name: "API Direct", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 10000, type: "api_direct" },
    ],
  },
  windsurf: {
    id: "windsurf",
    name: "Windsurf",
    plans: [
      { id: "free", name: "Free", monthlyPrice: 0, recommendedSeatsMin: 1, recommendedSeatsMax: 1, type: "free" },
      { id: "pro", name: "Pro", monthlyPrice: 15, recommendedSeatsMin: 1, recommendedSeatsMax: 4, type: "subscription" },
      { id: "teams", name: "Teams", monthlyPrice: 25, recommendedSeatsMin: 5, recommendedSeatsMax: 10000, type: "subscription" },
    ],
  },
};
