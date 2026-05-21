import type { AgentAction } from "@nilegazer/core";

export type PolicyResult = {
  allowed: boolean;
  reason?: string;
};

export class SafetyEngine {
  check(action: AgentAction): PolicyResult {
    if (!action.name.trim()) {
      return { allowed: false, reason: "Action name is required" };
    }
    return { allowed: true };
  }
}