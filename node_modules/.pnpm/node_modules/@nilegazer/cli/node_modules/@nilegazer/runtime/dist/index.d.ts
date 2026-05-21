import type { AgentAction, ExecutionResult, Executor } from "@nilegazer/core";
import { SafetyEngine } from "@nilegazer/safety";
export declare class Runtime {
    private readonly executor;
    private readonly safety;
    constructor(executor: Executor, safety?: SafetyEngine);
    run(action: AgentAction): Promise<ExecutionResult>;
}
//# sourceMappingURL=index.d.ts.map