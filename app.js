// Vault models
const vaults = [
  {
    id: "reserve",
    name: "Order-Flow Reserve Vault",
    tagline: "Base yield from staking, MEV, lending, and core-pair liquidity.",
    riskLabel: "Low–Moderate",
    riskClass: "risk-low",
    horizon: "Multi-year",
    role: "Conservative reserve layer",
    aprBand: "8–15% APR",
    targetUsers:
      "Microschools, families, and DAOs wanting a secure base yield engine.",
    mandate:
      "Accumulate organic yield with minimal strategy drift — staking, MEV rebates, and conservative lending.",
    allocations: [
      { label: "JitoSOL staking + MEV", percent: "60–70%" },
      { label: "SOL / JitoSOL lending", percent: "20–30%" },
      { label: "SOL-USDC liquidity fees", percent: "10–20%" },
    ],
    yieldSources: [
      "SOL staking yields",
      "MEV rebate participation",
      "Lending spreads",
      "DEX fee volume",
    ],
    risks:
      "Smart contract risk, validator variations, low swap volumes reduce returns.",
  },
  {
    id: "growth",
    name: "Order-Flow Growth Vault",
    tagline: "Strategic upside via liquidity concentration + controlled leverage.",
    riskLabel: "Moderate",
    riskClass: "risk-mod",
    horizon: "2–5 years",
    role: "Growth allocation",
    aprBand: "20–40% APR",
    targetUsers:
      "Programs/families that already have a reserve base and want higher returns.",
    mandate:
      "Increase fee intensity and staking exposure via optimized CLMM positions.",
    allocations: [
      { label: "JitoSOL unlevered base", percent: "40–50%" },
      { label: "Strategic CLMM LP", percent: "25–35%" },
      { label: "Modest leverage sleeve", percent: "20–30%" },
    ],
    yieldSources: [
      "Reserve vault sources",
      "Tighter liquidity fee concentration",
      "Leverage-amplified staking flows",
      "Incentive multipliers",
    ],
    risks:
      "IL, liquidation sensitivity, incentive drift — belongs to a capped allocation.",
  },
  {
    id: "velocity",
    name: "Order-Flow Velocity Vault",
    tagline: "Short-cycle tactical sleeve that captures volatility and incentives.",
    riskLabel: "Moderate–High",
    riskClass: "risk-high",
    horizon: "4–12 weeks",
    role: "Satellite alpha",
    aprBand: "20–200% APR",
    targetUsers:
      "Allocators with reserve + growth layers looking for tactical upside.",
    mandate:
      "Exploit short-lived fee distortions and meme liquidity with hard exposure caps.",
    allocations: [
      { label: "Volatility-driven CLMM LP", percent: "50–70%" },
      { label: "Perp funding MM vaults", percent: "15–25%" },
      { label: "Incentive harvesting rotations", percent: "10–20%" },
    ],
    yieldSources: [
      "Fee spikes",
      "Funding asymmetry",
      "LM boosts",
      "Short-cycle directional effect",
    ],
    risks:
      "High regime dependency: dry markets or trend markets punish returns.",
  },
];

// DOM references
const vaultGrid = document.getElementById("vaultGrid");
const detailTitle = document.getElementById("detailTitle");
const detailTagline = document.getElementById("detailTagline");
const detailBadges = document.getElementById("detailBadges");
const detailMandate = document.getElementById("detailMandate");
const detailTargetUsers = document.getElementById("detailTargetUsers");
const detailAllocations = document.getElementById("detailAllocations");
const detailYieldSources = document.getElementById("detailYieldSources");
const detailRisks = document.getElementById("detailRisks");

const profileButtons = document.querySelectorAll(".btn-chip");
const profileHint = document.getElementById("profileHint");

const profileHints = {
  school:
    "Schools should treat Reserve as core treasury, Growth as expansion, and Velocity as optional.",
  family:
    "Families should begin in Reserve and expand gradually depending on goals and tolerance.",
  dao:
    "DAOs may treat this as a treasury stack: runway, growth, and tactical sleeve.",
};

// Render vault cards
function renderVaultCards() {
  vaultGrid.innerHTML = "";
  vaults.forEach((v) => {
    const card = document.createElement("div");
    card.className = "vault-card";
    card.dataset.id = v.id;
    card.innerHTML = `
      <div class="vault-name">${v.name}</div>
      <p class="vault-tagline">${v.tagline}</p>
      <div class="vault-metadata">
        <span class="vault-chip accent">${v.role}</span>
        <span class="vault-chip">${v.riskLabel}</span>
        <span class="vault-chip">${v.horizon}</span>
      </div>
      <div class="vault-range"><strong>${v.aprBand}</strong></div>
    `;
    card.addEventListener("click", () => selectVault(v.id));
    vaultGrid.appendChild(card);
  });
}

// Populate details
function selectVault(id) {
  const v = vaults.find((x) => x.id === id);
  document.querySelectorAll(".vault-card").forEach((c) =>
    c.classList.toggle("active", c.dataset.id === id)
  );

  detailTitle.textContent = v.name;
  detailTagline.textContent = v.tagline;
  detailMandate.textContent = v.mandate;
  detailTargetUsers.textContent = v.targetUsers;
  detailRisks.textContent = v.risks;

  detailBadges.innerHTML = `
    <span class="badge ${v.riskClass}">Risk: ${v.riskLabel}</span>
    <span class="badge accent">${v.role}</span>
    <span class="badge">Horizon: ${v.horizon}</span>
  `;

  detailAllocations.innerHTML = "";
  v.allocations.forEach((a) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${a.label}</span><span>${a.percent}</span>`;
    detailAllocations.appendChild(li);
  });

  detailYieldSources.innerHTML = "";
  v.yieldSources.forEach((y) => {
    const li = document.createElement("li");
    li.textContent = y;
    detailYieldSources.appendChild(li);
  });
}

// Profile logic
profileButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    profileButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    profileHint.textContent = profileHints[btn.dataset.profile];
  })
);

// Smooth scroll
document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(el.getAttribute("data-scroll"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize
renderVaultCards();
selectVault("reserve");
profileHint.textContent = profileHints["school"];

