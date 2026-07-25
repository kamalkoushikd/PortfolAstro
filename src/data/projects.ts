export interface Project {
  title: string;
  kind: string;
  year: string;
  status: string;
  summary: string;
  detail: string;
  tags: string[];
  image?: string;
  repo?: string;
  live?: string;
  featured?: boolean;
}

/**
 * Curated work, most substantial first.
 * The full repository index is pulled from GitHub at build time (see repos.astro).
 */
export const projects: Project[] = [
  {
    title: "Fuse",
    kind: "Transport protocol",
    year: "2026",
    status: "Active",
    summary:
      "A transport protocol I wrote on raw UDP, for the places QUIC gets in the way.",
    detail:
      "Congestion control runs per stream instead of per connection, so a lossy bulk transfer can't throttle a telemetry stream sharing the same session. Each stream picks its own loss, ordering and coalescing policy at handshake time. Nothing allocates on the data path and the worker hot path takes no locks. On a 1 GiB checksum-verified transfer it came out 1.3 to 2.2 times faster than quinn, and latency stayed flat with 6.3 GB/s of bulk traffic running alongside.",
    tags: ["C++20", "UDP", "GSO", "Congestion control", "AES-256-GCM"],
    repo: "https://github.com/kamalkoushikd/fuse-nw",
    featured: true,
  },
  {
    title: "WattWiseG",
    kind: "Systems / RL",
    year: "2026",
    status: "Private",
    summary:
      "A GPU governor that learns when it can clock your card down without costing you throughput.",
    detail:
      "Telemetry from NVML and DCGM goes into a TCN encoder, that feeds a DQN policy, and the policy pins SM and memory clocks through a control daemon. Anything device specific gets discovered at runtime instead of hardcoded: the clock grid, power and thermal limits, which telemetry fields exist, the normalisation scales. Point it at a different card and it works out the numbers itself. The C++ daemon and the Python trainer talk over ZeroMQ.",
    tags: ["C++", "PyTorch", "NVML / DCGM", "ZeroMQ", "Reinforcement learning"],
    featured: true,
  },
  {
    title: "Cryptographic Smart Access Control",
    kind: "Embedded / security",
    year: "2025",
    status: "Deployed on-site",
    summary: "A door lock that assumes the network around it is hostile.",
    detail:
      "The ESP32 generates time-based one-time passwords with SHA-256 on a 100 second rotation, and an RTC with NTP sync keeps its clock honest through power cuts. People unlock it over BLE. A FastAPI backend on EC2 handles lock management and signs everything it sends with PGP so the lock can check where it came from, with a Raspberry Pi running the same scheme if the backend goes away.",
    tags: ["ESP32", "TOTP", "FastAPI", "PGP", "BLE", "AWS EC2"],
    image: "/Lock.png",
    featured: true,
  },
  {
    title: "CrowdGuard",
    kind: "Real-time vision",
    year: "2026",
    status: "Private",
    summary:
      "Crowd analytics from the camera to the dashboard, with the model left swappable.",
    detail:
      "A DeepStream pipeline that takes TAO, TensorRT, ONNX or Caffe models uploaded from the dashboard itself. A Go backend handles gRPC and REST telemetry ingestion, and the SvelteKit front end renders whatever metrics the pipeline sends rather than a fixed set, so adding a new one doesn't mean touching the UI.",
    tags: ["DeepStream", "Go", "gRPC", "SvelteKit", "TensorRT"],
  },
  {
    title: "Chemical Engineering, IIT Hyderabad",
    kind: "Department website",
    year: "2026",
    status: "Live",
    summary: "A full rebuild of the department's site, down to the timetables.",
    detail:
      "Next.js and TypeScript over a real schema for faculty, courses, committees, achievements and semester timetables. The import tooling reads the spreadsheets and PDFs the department already had, so nobody had to retype years of records to get the site running.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Vitest"],
    live: "https://chemical-iith.vercel.app",
  },
  {
    title: "ntp-time",
    kind: "CLI tool",
    year: "2025",
    status: "Released",
    summary: "Accurate time from any NTP server, without leaving the terminal.",
    detail:
      "A small Rust CLI. ISO8601, Unix seconds or milliseconds, whichever server you want, coloured output, and a copy flag that works on both Wayland and X11.",
    tags: ["Rust", "NTP", "CLI"],
    repo: "https://github.com/kamalkoushikd/ntp-time",
  },
  {
    title: "Poker",
    kind: "Full-stack game",
    year: "2026",
    status: "Playable",
    summary: "Texas hold'em with friends, hand evaluation included.",
    detail:
      "FastAPI holds the game engine, hand evaluation and table state behind token auth. React does the table itself.",
    tags: ["FastAPI", "React", "SQLite", "Python"],
    repo: "https://github.com/kamalkoushikd/PokerFrontend",
  },
];
