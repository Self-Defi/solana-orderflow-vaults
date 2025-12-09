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
    mandate:
      "Accumulate organic yield with minimal strategy drift — SOL staking, MEV rebates, conservative lending, and blue-chip liquidity on core pairs.",
    allocations: [
      { label: "JitoSOL staking + MEV", percent: "60–70%" },
      { label: "SOL / JitoSOL lending", percent: "20–30%" },
      { label: "SOL–USDC liquidity fees", percent: "10–20%" },
    ],
    yieldSources: [
      "SOL staking rewards",
      "MEV rebate participation",
      "Lending spreads from on-chain leverage demand",
      "DEX fee volume on core pairs",
    ],
    risks:
      "Smart contract risk, validator performance variance, and periods of low swap volume that compress fee income. This vault avoids leverage, reducing liquidation risk but not eliminating market or protocol risk.",
  },
  {
    id: "growth",
    name: "Order-Flow Growth Vault",
    tagline:
      "Strategic upside via tighter liquidity bands and controlled leverage.",
    riskLabel: "Moderate",
    riskClass: "risk-mod",
    horizon: "2–5 years",
    role: "Growth allocation",
    aprBand: "20–40% APR",
    mandate:
      "Increase exposure to fee intensity and staking economics through optimized CLMM positions and modest leverage, on top of a reserve anchor.",
    allocations: [
      { label: "JitoSOL base (unlevered)", percent: "40–50%" },
      { label: "Strategic CLMM LP on blue-chip pairs", percent: "25–35%" },
      { label: "Moderate leverage growth sleeve", percent: "20–30%" },
    ],
    yieldSources: [
      "All Reserve Vault sources",
      "Higher fee capture from tighter CLMM ranges",
      "Leverage-amplified staking and LP returns within controlled LTV bands",
      "Incentive programs from core Solana DeFi protocols",
    ],
    risks:
      "Impermanent loss if ranges drift, liquidation risk on leveraged positions during drawdowns, and dependence on incentive programs. This layer should be a defined slice above a stable reserve, never the entire treasury.",
  },
  {
    id: "velocity",
    name: "Order-Flow Velocity Vault",
    tagline:
      "Short-cycle tactical sleeve that captures volatility and incentive regimes.",
    riskLabel: "Moderate–High",
    riskClass: "risk-high",
    horizon: "4–12 weeks",
    role: "Satellite alpha",
    aprBand: "20–200% APR (regime-dependent)",
    mandate:
      "Harvest short-lived order-flow spikes, meme rotations, and incentive programs with hard caps and strict unwind rules. Explicitly not a stable income engine.",
    allocations: [
      { label: "Volatility-focused CLMM liquidity", percent: "50–70%" },
      { label: "Perp funding / MM vaults", percent: "15–25%" },
      { label: "Short-term LM / incentive loops", percent: "10–20%" },
    ],
    yieldSources: [
      "Fee spikes during volatile trading conditions",
      "Perpetual funding rate asymmetries and market-making fees",
      "Short-lived liquidity mining and incentive campaigns",
      "Occasional directional upside if rotations are positioned correctly",
    ],
    risks:
      "Highly regime-dependent. If meme liquidity dries up or incentives end abruptly, returns can compress or turn negative quickly. This sleeve should always be capped as a small percentage of an overall reserve + growth stack.",
  },
];

// DOM references
const vaultGrid = document.getElementById("vaultGrid");
const detailTitle = document.getElementById("detailTitle");
const detailTagline = document.getElementById("detailTagline");
const detailBadges = document.getElementById("detailBadges");
const detailMandate = document.getElementById("detailMandate");
const detailAllocations = document.getElementById("detailAllocations");
const detailYieldSources = document.getElementById("detailYieldSources");
const detailRisks = document.getElementById("detailRisks");

const profileButtons = document.querySelectorAll(".btn-chip");
const profileHint = document.getElementById("profileHint");

// Demo metric elements
const metricTvlEl = document.getElementById("metricTvl");
const metricMevEl = document.getElementById("metricMev");
const metricJitoEl = document.getElementById("metricJito");

// Profile text
const profileHints = {
  school:
    "For microschools, treat the Reserve Vault as core treasury, Growth as a measured expansion sleeve, and Velocity as strictly capped and optional.",
  family:
    "For families, build a base in the Reserve Vault first. Add Growth only once time horizon and risk tolerance are clear. Velocity is for truly discretionary capital.",
  dao:
    "For DAOs and treasuries, map vaults to roles: Reserve for runway, Growth for expansion, Velocity for tightly capped tactical strategies. Document allocation rules in governance before deploying.",
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
  if (!v) return;

  document.querySelectorAll(".vault-card").forEach((c) =>
    c.classList.toggle("active", c.dataset.id === id)
  );

  detailTitle.textContent = v.name;
  detailTagline.textContent = v.tagline;
  detailMandate.textContent = v.mandate;
  detailRisks.textContent = v.risks;

  // badges
  detailBadges.innerHTML = `
    <span class="badge ${v.riskClass}">Risk: ${v.riskLabel}</span>
    <span class="badge accent">${v.role}</span>
    <span class="badge">Horizon: ${v.horizon}</span>
  `;

  // allocations
  detailAllocations.innerHTML = "";
  v.allocations.forEach((a) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${a.label}</span><span>${a.percent}</span>`;
    detailAllocations.appendChild(li);
  });

  // yield sources
  detailYieldSources.innerHTML = "";
  v.yieldSources.forEach((y) => {
    const li = document.createElement("li");
    li.textContent = y;
    detailYieldSources.appendChild(li);
  });
}

// Profile selector
profileButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    profileButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    profileHint.textContent = profileHints[btn.dataset.profile];
  })
);

// Smooth scroll buttons (hero nav)
document.querySelectorAll("[data-scroll]").forEach((el) => {
  el.addEventListener("click", () => {
    const target = document.querySelector(el.getAttribute("data-scroll"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Shrink header on scroll
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  if (!topbar) return;
  if (window.scrollY > 18) {
    topbar.classList.add("topbar--compact");
  } else {
    topbar.classList.remove("topbar--compact");
  }
});

// Dummy metric updater (purely cosmetic demo, NOT live on-chain data)
const metricConfig = {
  tvl: { base: 2.84, variance: 0.04 }, // billions
  mev: { base: 1240, variance: 80 },   // SOL
  jito: { base: 7.2, variance: 0.25 }, // percent
};

function updateDemoMetrics() {
  if (metricTvlEl) {
    const v =
      metricConfig.tvl.base +
      (Math.random() - 0.5) * 2 * metricConfig.tvl.variance;
    metricTvlEl.textContent = `$${v.toFixed(2)}B`;
  }

  if (metricMevEl) {
    const v =
      metricConfig.mev.base +
      (Math.random() - 0.5) * 2 * metricConfig.mev.variance;
    const rounded = Math.max(0, Math.round(v));
    metricMevEl.textContent = `${rounded.toLocaleString()} SOL`;
  }

  if (metricJitoEl) {
    const v =
      metricConfig.jito.base +
      (Math.random() - 0.5) * 2 * metricConfig.jito.variance;
    metricJitoEl.textContent = `${v.toFixed(2)}%`;
  }
}

// Init
renderVaultCards();
selectVault("reserve");
profileHint.textContent = profileHints["school"];

// kick off dummy metrics
updateDemoMetrics();
setInterval(updateDemoMetrics, 6500);

