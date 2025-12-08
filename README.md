# ShieldOS Dashboard

Main web dashboard for ShieldOS, a decentralized personal security operating system built on Solana.

The dashboard provides a unified interface for accessing ShieldOS modules such as Mail, Drive, Vault, Chat, Identity, and AI Guardian, using wallet-based authentication and client-side encryption.

## Scope

- Wallet connection and authentication flows
- Global layout and navigation shell
- Module mounting and routing
- Session handling and secure state management
- Client-side integration with ShieldOS Core and services
- Minimal, responsive UI with a security-focused design

## High-Level Structure

Planned structure for early development:

/src
/app # app entry, routing, layout
/modules # module containers (mail, drive, vault, chat, id, ai)
/components # shared UI components
/hooks # shared React hooks
/lib # helpers, API clients, adapters
/config # environment and runtime configuration
/styles # global styles, tokens, theme
/tests
/e2e # end-to-end tests (planned)
/unit # unit tests for UI and logic

## Architecture Role

The dashboard acts as the **composition layer** for ShieldOS:

- mounts modules like Mail, Drive, Vault, Pass, Link, and Pay into a single OS-like experience,
- connects to `shieldos-core` for:
  - wallet authentication,
  - crypto helpers,
  - shared types and constants,
- manages:
  - global session state,
  - per-module routing,
  - permission prompts,
  - encrypted client-side state.

All cryptographic and low-level primitives live in `shieldos-core`; the dashboard focuses on UX, state orchestration, and safe integration between modules.



## Principles

- Wallet as the only authentication mechanism
- No sensitive data stored in plain text
- Minimal tracking, no analytics that compromise privacy
- Predictable, deterministic UX
- Clear separation between UI and cryptography

## Status

Active development.  
APIs, layout, and module structure may change as ShieldOS evolves.

## Links

Website: https://www.shieldos.xyz/  
DApp: https://app.shieldos.xyz/  
X: https://x.com/shield_os
