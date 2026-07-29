# NotebookLM Starter Prompts

Use these prompts to get consistent answers quickly.

## Service and Maintenance

- What is the full procedure for engine oil and filter change? Include prerequisites, tools, and post-checks.
- Show the exact steps for draining and refilling engine oil, then list all related torque values in N·m.
- What checks should I run after an engine oil and filter change?
- Show the air cleaner filter replacement procedure and any inspection or cleaning alternatives.
- What is the spark plug replacement procedure, and what torque values are required?
- Show the coolant service workflow: drain, refill, bleed, and verification steps.

## Parts Replacement and Removal

- How do I remove and install the timing chain cover? Summarise in ordered steps.
- Show the cylinder head cover removal and installation sequence, including staged torque steps.
- How do I remove and install the camshaft components? Include tightening stages.
- Show flywheel or drive plate removal and installation with torque and angle steps.

## Torque-First Queries

- What is the tightening torque for cylinder head bolts? Show staged torque and angle sequence in N·m.
- What is the torque for camshaft housing bolts and camshaft intake rear housing bolt?
- What is the torque for crankshaft pulley bolt and any angle addition?
- Show all engine mounting torque values, split by A/T and M/T where applicable.
- List all torque specs in Engine Mechanical grouped by component.

## Diagnostics and Decision Support

- I have oil leakage symptoms. What diagnostic path should I follow from symptom to likely causes?
- Show DTC-related entries tied to engine oil, fuel, and cooling systems.
- For a failed component check, what replacement actions are explicitly recommended?

## Synonym-Friendly Prompts

- Cabin filter replacement: if cabin/HVAC filter is not explicit, show the nearest available filter procedure and explain the gap.
- Oil change for K14C: show the canonical procedure title used in this manual and then list the steps.
- Replace air filter: map this request to the exact manual section names and provide the procedure summary.

## Output Style Prompt (optional)

- Answer in this format: 1) Procedure title, 2) Preconditions, 3) Steps, 4) Torque values (N·m only), 5) Final verification checklist.
