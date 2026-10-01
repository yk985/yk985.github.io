// All page content lives here so copy edits never require touching layout code.

export const PROFILE = {
  name: "Youssef Kabbaj",
  role: "MSc Applied Physics, EPFL",
  tagline: "Statistical physics and generative machine learning",
  // Deliberately no phone number or home address: this page is public.
  email: "youssef.kabbaj@epfl.ch",
  github: "https://github.com/yk985",
  linkedin: "https://www.linkedin.com/in/youssef-kabbaj-929a2b340",
  // Replace public/CV_youssef_kabbaj.pdf with the finished PDF; the name stays the same.
  cv: "CV_youssef_kabbaj.pdf",
  photo: "Cv_pic.png",
  status: [
    "Graduating March 2027",
    "Available from April 2027",
    "Based in Lausanne",
  ],
  intro:
    "I work at the interface of statistical physics and generative machine learning. " +
    "Right now that means discrete diffusion models for protein sequence generation — " +
    "but the thread running through everything I do is the same: take a system with a lot of " +
    "noise and a lot of degrees of freedom, and build a model that says something honest about it.",
  intro2:
    "Before this I spent seven months in industry training deep-learning models on ultrasound " +
    "data, where the hard part was never the architecture — it was proving the model worked " +
    "on real data that came with no ground truth attached.",
};

export const FOCUS = [
  {
    title: "Generative models",
    body:
      "Diffusion and score-based models, flow matching, autoregressive models and " +
      "transformers. Trained by maximum and pseudo-likelihood.",
  },
  {
    title: "Statistical physics",
    body:
      "Langevin and Fokker–Planck dynamics, stochastic differential equations, " +
      "Monte Carlo and MCMC sampling, maximum-entropy and Potts models.",
  },
  {
    title: "Honest evaluation",
    body:
      "Synthetic ground truth, metric design for unlabelled data, failure analysis, " +
      "and checking the data before trusting the number.",
  },
];

export const EXPERIENCE = [
  {
    period: "Nov 2026 — Mar 2027",
    upcoming: true,
    org: "Laboratory of Statistical Biophysics, EPFL",
    role: "Master thesis",
    title: "Diffusion models for conditioned protein sequence generation",
    points: [
      "Implementing a discrete diffusion model for protein sequence generation.",
      "Studying the dynamics of generation: speciation time and mode collapse.",
    ],
  },
  {
    period: "Feb — Aug 2026",
    org: "Bracco Suisse S.A.",
    role: "Industry internship",
    title: "Deep learning for contrast-enhanced ultrasound",
    points: [
      "Built and trained two models on ultrasound sequences: one for optical flow estimation, one for localisation.",
      "Wrote a dedicated synthetic data generator for each, reproducing the appearance and statistics of real acquisitions so both could be measured against known ground truth.",
      "Designed reference-free metrics for real, unlabelled clinical data, and fed the observed failure modes back into the generators.",
    ],
    metrics: [
      { value: "~5%", label: "motion-correction error" },
      { value: ">95%", label: "precision and accuracy" },
    ],
    note: "No in-house baseline existed, so the evaluation framework had to be built alongside the models.",
  },
  {
    period: "Sep — Nov 2025",
    org: "Laboratory of Computational Chemistry and Biochemistry, EPFL",
    role: "Semester project",
    title: "QM/MM simulation of acetone",
    points: [
      "Ran QM/MM simulations of acetone in MiMiC with GROMACS and CP2K.",
      "Measured how different placements of the boundary between the quantum and classical regions change the computed energies and vibrational frequencies.",
    ],
  },
  {
    period: "Feb — Jul 2025",
    org: "Laboratory of Statistical Biophysics, EPFL",
    role: "Summer internship and semester project",
    title: "Biased generative protein models based on attention DCA",
    points: [
      "Fitted a Potts model to the bacterial J-domain alignment (L = 63 sites, q = 21 states, 36,713 sequences), with couplings parametrised by a factored self-attention layer and trained by reweighted pseudo-likelihood.",
      "Sampled with a Gibbs-like conditional sampler at controlled inverse temperature, and checked novelty and diversity against held-out natural sequences.",
      "Found the supplied train/test files shared 79% of their sequences verbatim, rebuilt a sequence-disjoint split by clustering at 80% identity, and re-evaluated everything on it.",
    ],
    metrics: [
      { value: "r = 0.99", label: "one-site frequencies" },
      { value: "r = 0.87", label: "two-site correlations (ceiling 0.94)" },
    ],
    link: { href: "https://github.com/yk985/attention_dca_jdomains", label: "View the code" },
  },
  {
    period: "Jul 2024 — Jan 2025",
    org: "Swiss Plasma Center, EPFL",
    role: "Semester project and summer internship",
    title: "The Alfvén wave continuum in tokamaks",
    points: [
      "Computed the Alfvén continuum spectrum of tokamak equilibria.",
      "Analysed the frequency gaps opened in it by the coupling between shear Alfvén and acoustic waves.",
    ],
  },
  {
    period: "Since Sep 2022",
    org: "EPFL",
    role: "Teaching assistant",
    title: "Analysis and electromagnetism",
    points: ["12 hours a week alongside full-time study."],
  },
];

export const PROJECTS = [
  {
    title: "Drift-field inference from stochastic trajectories",
    blurb:
      "Recovering the force field of an overdamped stochastic process from nothing but observed " +
      "sample paths. Five approaches compared, from direct binned estimation up to an amortised " +
      "CNN that infers the whole field in a single forward pass.",
    tags: ["Stochastic processes", "Inverse problems", "PyTorch"],
    href: "https://github.com/yk985/drift_field_inference",
  },
  {
    title: "Reinforcement learning for microswimmer navigation",
    blurb:
      "RL policies for a swimmer steering through a noisy low-Reynolds-number environment, " +
      "benchmarked against the exact dynamic-programming optimum — so the policy gap is " +
      "measured rather than assumed.",
    tags: ["Reinforcement learning", "Active matter", "Control"],
    href: "https://github.com/yk985/microswimmer-rl",
  },
  {
    title: "Generative models for protein sequences",
    blurb:
      "A hierarchical Potts model used as synthetic ground truth with known statistics, so that " +
      "autoregressive and diffusion generators can be scored against the exact target " +
      "distribution instead of a proxy.",
    tags: ["Generative models", "Potts models", "Benchmarking"],
    status: "Code being cleaned up for release",
  },
];

export const SKILLS = [
  {
    group: "Statistical physics",
    items: [
      "Langevin & Fokker–Planck",
      "Stochastic differential equations",
      "Monte Carlo / MCMC",
      "Maximum entropy & Potts models",
      "Free-energy landscapes",
    ],
  },
  {
    group: "Machine learning",
    items: [
      "Diffusion & score-based models",
      "Flow matching",
      "Transformers & attention",
      "Autoregressive models",
      "Reinforcement learning",
    ],
  },
  {
    group: "Simulation",
    items: ["Molecular dynamics", "QM/MM", "GROMACS", "CP2K", "MiMiC", "PyMOL"],
  },
  {
    group: "Programming",
    items: ["Python", "PyTorch", "NumPy", "scikit-learn", "C++", "MATLAB", "Git", "Linux"],
  },
];

export const LANGUAGES = [
  { name: "Arabic", level: "Mother tongue" },
  { name: "French", level: "C1" },
  { name: "English", level: "C1" },
  { name: "German", level: "Willing to learn" },
];
