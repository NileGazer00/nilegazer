import type { AgentAction, ExecutionResult, Executor } from "@nilegazer/core";
import { SafetyEngine } from "@nilegazer/safety";

export class Runtime {
  constructor(
    private readonly executor: Executor,
    private readonly safety = new SafetyEngine()
  ) {}

  async run(action: AgentAction): Promise<ExecutionResult> {
    const check = this.safety.check(action);
    if (!check.allowed) {
      return { success: false, message: check.reason ?? "Blocked by policy" };
    }
    return this.executor.execute(action);
  }
}