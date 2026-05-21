import type { AgentAction } from "@nilegazer/core";
export type PolicyResult = {
    allowed: boolean;
    reason?: string;
};
export declare class SafetyEngine {
    check(action: AgentAction): PolicyResult;
}
//# sourceMappingURL=index.d.ts.map