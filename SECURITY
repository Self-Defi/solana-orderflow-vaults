Security Policy — Self-Defi Order-Flow Vaults

Security matters — even in a front-end architectural prototype.

This repository models non-custodial vault architecture for Solana.
It will eventually evolve toward wallet-connected execution.
For that reason, we apply the same discipline now that we would apply later.

🔐 Core Principles

Self-Defi systems are built on:

User Sovereignty — we never hold keys

Transparency — we disclose assumptions and risks

Minimization — least-authority philosophy

Non-Custodial Execution — clients sign their own transactions

Security contributions and disclosures must honor those principles.

🛑 Scope of This Policy

This repository currently includes:

Static UI

vault definitions

explanatory logic

prototype architecture

It does not custody funds
and does not include on-chain automation (yet).

Still, issues that could impact user safety or future versions fall within scope, including:

incorrect risk framing

misleading allocation logic

inaccurate assumptions that could lead clients to unsafe setups

UI states that imply automated execution when none exists

any suggestion of pooled asset management

As this project grows into wallet-connected execution and routing, this policy will expand accordingly.

🔎 How to Report a Security Issue

If you believe you’ve found:

a security vulnerability

a risk disclosure gap

inappropriate behavior that could be misinterpreted by end users

Please report it privately first.

Contact channels:

📩 GitHub private issue (mark as “security”)
📥 Direct message to repo maintainer

Do not disclose vulnerability details publicly until acknowledged and triaged.

🧪 Responsible Disclosure Expectations

You agree to:

✔ report privately
✔ give reasonable time to remediate
✔ avoid public exploitation
✔ avoid stress-testing against live user assets
✔ not perform unauthorized on-chain automation using Self-Defi branding

We commit to:

✔ acknowledge your report
✔ assess impact
✔ mitigate where necessary
✔ give attribution (if desired)

🔁 Security Review Guidelines for Contributors

When submitting code or documentation, ask:

Does this imply pooled custody?
If yes → do not submit.

Does this obscure user control?
If yes → redesign or escalate for review.

Does this introduce automation artifacts that could be misunderstood as custodial?
If yes → require explicit disclaimers.

Does this change rely on unstated assumptions?
If yes → document them visibly.

🧱 Threat Model (Current Stage)
What we monitor against:

User misunderstanding that leads to unsafe allocation

UI interactions that make it appear as if vaults automatically execute

Language implying guaranteed yield

Brand misuse suggesting Self-Defi controls user assets

Because the repository is front-end only, risks relate to messaging and expectation, not smart contract exploitation — for now.

As wallet-connect and routing logic arrive, this threat model will expand to:

RPC hijack

transaction parameter injection

validation bypass

vault routing manipulation

…at which point a formal smart-contract security advisory process will be added.

🛡 Security Posture as the App Evolves

When this transitions to:

read-only Solana data feeds

wallet connect

transaction routing

this policy will expand to cover:

☑ signing flows
☑ front-end sanitization
☑ state validation
☑ private-key handling expectations
☑ escalation procedures
☑ independent code reviews

Self-Defi will never implement transaction signing on behalf of users.

All final control remains 1:1 with the user’s wallet.

📌 Final Note

This is infrastructure design —
not financial advice, not custodial service, and not automated asset management.

The best defense is clarity + sovereignty + explicit boundaries.

If you believe anything in this repo risks misleading users or weakening that security posture, report it immediately.

We take disclosure seriously — because Self-Defi’s mission depends on it.
