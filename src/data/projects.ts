import { Project } from "../types/project"

export const projects: Project[] = [
  {
    title: "Revanta",
    tagline: "Retail Analytics & Customer Risk Scoring Platform",
    description:
      "End-to-end analytics engineering system that transforms raw retail transaction data into revenue-driven insights using RFM segmentation, SQL modeling, and executive Power BI dashboards.",
    stack: ["Python", "SQL", "Power BI", "Analytics Engineering"],
    github: "https://github.com/Omar-M-Awad/Revanta",
    featured: true,
  },

  {
    title: "CryptoPulse",
    tagline: "Real-Time Crypto Liquidity Analytics Pipeline",
    description:
      "Live data pipeline that ingests cryptocurrency market data from public APIs, applies transformation logic, and delivers liquidity insights through structured storage and interactive dashboards.",
    stack: ["Python", "SQLite", "Power BI", "API Integration"],
    github: "https://github.com/Omar-M-Awad/CryptoPulse",
    featured: true,
  },
]
