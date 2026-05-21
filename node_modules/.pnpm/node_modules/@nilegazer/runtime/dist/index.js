"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runtime = void 0;
const safety_1 = require("@nilegazer/safety");
class Runtime {
    executor;
    safety;
    constructor(executor, safety = new safety_1.SafetyEngine()) {
        this.executor = executor;
        this.safety = safety;
    }
    async run(action) {
        const check = this.safety.check(action);
        if (!check.allowed) {
            return { success: false, message: check.reason ?? "Blocked by policy" };
        }
        return this.executor.execute(action);
    }
}
exports.Runtime = Runtime;
//# sourceMappingURL=index.js.map