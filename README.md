# NileGazer

NileGazer is a policy-first autonomous finance and onchain execution platform for AI agents.

Build agents that can plan, verify, and execute real financial actions with safety, observability, and modular multi-chain support.

## Why NileGazer

Agents need more than tools. They need a runtime that can safely move value in the real world, record what happened, and stay under policy control.

## What it does

- Plans agent workflows.
- Applies policy checks before execution.
- Executes swaps, transfers, approvals, and wallet actions.
- Tracks activity with logs and audit trails.
- Supports a modular architecture for chains, wallets, and signals.

## Core modules

- `packages/core` — shared types and execution interfaces.
- `packages/runtime` — workflow orchestration and policy-aware execution.
- `packages/safety` — allowlists, validation, and policy checks.
- `packages/signals` — market data and external signals.
- `packages/wallets` — wallet integrations.
- `packages/observability` — logs, traces, and audits.
- `apps/cli` — command-line interface.
- `apps/examples` — sample workflows.

## Quick start

```bash
pnpm install
pnpm build
pnpm --filter @nilegazer/cli dev
```

## Example

```bash
nilegazer run
```

## Contributing

We welcome contributions. Start with `CONTRIBUTING.md` and look for issues labeled `good first issue`.

## Roadmap

See `roadmap.md`.

## License

MIT
