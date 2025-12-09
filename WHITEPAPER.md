# Self-Defi Order-Flow Vault Architecture
## **Whitepaper (Institution Edition)**

---

# 1. Executive Summary

Self-Defi builds non-custodial vault infrastructure that allows schools, families, 
and DAOs to earn yield from Solana order-flow — without giving up control.

This document formalizes the vault models, risk logic, and governance approach.

---

# 2. Mission & Design Principles

- Sovereignty over returns
- Explainability > opacity
- Deterministic vault logic
- Accountability without custody
- Architecture instead of asset management

---

# 3. Problem Statement

Most DeFi yield is:
- hype-driven
- non-transparent
- custody-dependent

Institutions cannot adopt it.

Self-Defi solves this by architecting vault structures users can execute themselves.

---

# 4. Vault Class Definitions

### 4.1 Reserve Vault (Conservative Core)
Yields: staking, MEV, lending spreads, core-pair fees  
Role: working capital reserve / treasury base layer

### 4.2 Growth Vault (Strategic Expansion)
Yields: tighter CLMM fees, leverage amplification  
Role: controlled upside sleeve above reserves

### 4.3 Velocity Sleeve (Tactical Alpha)
Yields: fee spikes, incentive bursts  
Role: capped tactical relative-return sleeve

---

# 5. Yield Source Categories

- Staking / MEV rebate economics
- Lending market utilization spreads
- CLMM fee capture
- Incentive rotation capture

---

# 6. Vault Risk Framework

- allocation caps
- unwinding sequence
- drawdown expectations
- exit discipline

---

# 7. Governance Model

- non-custodial execution
- monitoring / reporting
- institution or family committees
- advisor role: Self-Defi helps architect but **never controls funds**

---

# 8. Implementation Path

Phase 1: UI + education  
Phase 2: live Solana data  
Phase 3: wallet connect logic  
Phase 4: routing + signatures  
Phase 5: institutional reporting

---

# 9. Transparency & Accountability

- reporting surfaces
- auditability
- open repo
- attribution clarity

---

# 10. Disclaimer

This document is educational, architectural, and non-custodial.
It is not financial advice, nor an offer to manage assets.

---

# 11. Appendices

- glossary
- vault math notes
- validator rotation logic
- role accountability matrix
