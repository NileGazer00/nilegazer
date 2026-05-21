import { Runtime } from "@nilegazer/runtime";
import type { AgentAction, Executor } from "@nilegazer/core";

const executor: Executor = {
  async execute(action: AgentAction) {
    return {
      success: true,
      message: `Executed action: ${action.name}`
    };
  }
};

async function main() {
  const runtime = new Runtime(executor);
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
