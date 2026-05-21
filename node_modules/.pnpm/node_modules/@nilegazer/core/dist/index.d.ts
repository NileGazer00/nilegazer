export type AgentAction = {
    name: string;
    description?: string;
};
export type ExecutionContext = {
    walletId?: string;
    chainId?: string;
};
export type ExecutionResult = {
    success: boolean;
    message: string;
};
export interface Executor {
    execute(action: AgentAction, context?: ExecutionContext): Promise<ExecutionResult>;
}
//# sourceMappingURL=index.d.ts.map