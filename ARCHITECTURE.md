# System Architecture — Self-Defi Solana Order-Flow Vault Stack

This document explains the logical architecture that underpins 
vault behavior and future execution layers.

---

## Conceptual Model

This system does **not** manage funds.
It acts as:
- a vault calculator
- an execution planner
- a monitoring layer
- a reporting system

Users sign everything themselves.

---

## Layers

### 1. **Interface Layer**
- static UI
- vault selection
- disclosures
- role guidance

### 2. **Policy Layer**
- vault definitions
- risk rules
- allocation bands
- rebalancing logic (descriptive)

### 3. **Workflow Layer (future)**
- wallet detection
- routing sequences
- deterministic rebalance recipes

### 4. **Read-Only Data Plane (future)**
- solana RPC pulls
- yield data (Jito, Kamino)
- liquidity metrics
- protocol health signals

### 5. **Execution Layer (future)**
- user-signed routing txns
- no pooled liquidity
- deterministic flows
- unwinding / exit routines

---

## Key Principles

- **Non-custodial** — Self-Defi cannot touch user assets
- **Deterministic logic** — vaults behave predictably
- **Explainable decisions** — every route must be traceable
- **Institutional framing** — risk > return narrative

---

## Vault Logic Outline

### Reserve Vault
- base JitoSOL
- lending exposure
- core-pair CLMM fees

### Growth Vault
- reserve layer +
- strategic LP +
- controlled leverage

### Velocity Vault
- capped risk sleeve
- short-term LP + incentives

---

## Future Smart UX Behavior

User clicks:
→ Select vault  
→ Enter allocation  
→ Connect wallet  
→ See transaction preview  
→ Sign  

System:
✓ routes
✓ restakes
✓ LP deposits
✓ lending deposits
✓ publishes report

Self-Defi never holds or intermediates control.

---

## Security Model

- user custody
- guardrails at UI and data layers
- attribution and messaging guardrails
- routing logic invisible to hype framing

---

## Why This Architecture Matters

This moves DeFi from:
- gambling ↔ infrastructure
- hype ↔ disciplined execution
- dependence ↔ sovereignty

It mirrors real finance 
but preserves cryptographic ownership.

