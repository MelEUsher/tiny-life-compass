# Tiny Life Compass

Tiny Life Compass is a decision-support web application designed to help users evaluate the financial viability of tiny homes, skoolies, vans, and container builds before committing capital.

The current version delivers a deterministic client-side cost modeling MVP. Future iterations will expand into AI-assisted interpretation and backend-supported scenario tracking.

⸻

## What It Does (MVP)

The MVP collects structured inputs around:
	•	Build type and approach
	•	Regional cost assumptions
	•	Estimated build budget
	•	Ongoing monthly expenses

It then generates:
	•	Projected total build cost
	•	Estimated monthly carrying cost
	•	A structured viability classification (viable / moderate risk / high risk)

The goal is to surface financial risk early and prevent unrealistic assumptions from progressing further.

⸻

## Planned Evolution
	•	Backend persistence for user scenarios
	•	Scenario comparison and saved projections
	•	AI-assisted interpretation of cost pressure and tradeoffs
	•	Risk narrative generation and recommendation engine
	•	Exportable summary reports

⸻

## Tech Stack (Current MVP)
	•	React + Vite
	•	Tailwind CSS
	•	Deterministic client-side calculation engine
	•	Modular component architecture

⸻



---

## Local Development

```bash
npm install
npm run dev
