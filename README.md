# NileGazer

[![Build Status](https://github.com/NileGazer00/nilegazer/actions/workflows/ci.yml/badge.svg)](https://github.com/NileGazer00/nilegazer/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-live-brightgreen.svg)](https://NileGazer00.github.io/nilegazer)
[![Releases](https://img.shields.io/github/v/release/NileGazer00/nilegazer)](https://github.com/NileGazer00/nilegazer/releases)
[![Security](https://img.shields.io/badge/security-policy--first-red.svg)](SECURITY.md)

NileGazer is a policy-first autonomous finance and onchain execution platform for AI agents.

Build agents that can plan, verify, and execute real financial actions with safety, observability, and modular multi-chain support.

## Why NileGazer

Agents need more than tools. They need a runtime that can safely move value, enforce policy, and leave an audit trail.

## What it does

- Plans agent workflows.
- Applies policy checks before execution.
- Executes swaps, transfers, approvals, and wallet actions.
- Tracks activity with logs and audit trails.
- Supports a modular architecture for chains, wallets, and signals.

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

## Architecture

- `packages/core` — shared types and execution interfaces.
- `packages/runtime` — workflow orchestration and policy-aware execution.
- `packages/safety` — allowlists, validation, and policy checks.
- `packages/signals` — market data and external signals.
- `packages/wallets` — wallet integrations.
- `packages/observability` — logs, traces, and audits.
- `apps/cli` — command-line interface.
- `apps/examples` — sample workflows.

## Security

See `SECURITY.md` for reporting instructions.

## Contributing

See `CONTRIBUTING.md` and the issue templates in `.github/ISSUE_TEMPLATE/`.

## Roadmap

See `roadmap.md`.

## License

MIT
