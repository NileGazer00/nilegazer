"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtime_1 = require("@nilegazer/runtime");
const executor = {
    async execute(action) {
        return {
            success: true,
            message: `Executed action: ${action.name}`
        };
    }
};
async function main() {
    const runtime = new runtime_1.Runtime(executor);
    const result = await runtime.run({
        name: "bootstrap",
        description: "First NileGazer workflow"
    });
    console.log(result.message);
}
main().catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map