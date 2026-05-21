"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafetyEngine = void 0;
class SafetyEngine {
    check(action) {
        if (!action.name.trim()) {
            return { allowed: false, reason: "Action name is required" };
        }
        return { allowed: true };
    }
}
exports.SafetyEngine = SafetyEngine;
//# sourceMappingURL=index.js.map