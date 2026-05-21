# NileGazer

Policy-first autonomous finance and onchain execution for AI agents.

NileGazer is a modular platform for building agents that can plan, verify, and execute financial actions with safety, observability, and multi-chain support.

## What it does

- Plans agent workflows.
- Executes swaps, transfers, and approvals.
- Applies policy checks before action.
- Tracks every step with logs and audit trails.
- Supports a modular plugin-style architecture.

## Why it exists

Agents need more than tools. They need a runtime that can safely move value in the real world.

## Core modules

- `packages/core` — shared types and interfaces.
- `packages/runtime` — workflow planning and orchestration.
- `packages/safety` — policy checks and allowlists.
- `packages/signals` — market and event inputs.
- `packages/wallets` — wallet adapters.
- `packages/observability` — logs, traces, and audit support.
- `apps/cli` — command-line entrypoint.
- `apps/examples` — sample workflows.

## Quick start

```bash
git clone https://github.com/NileGazer00/nilegazer.git
cd nilegazer
```

## Roadmap

- TypeScript core runtime
- policy engine
- workflow CLI
- wallet adapters
- first end-to-end example

## Contributing

See `CONTRIBUTING.md`.

## License

MIT
