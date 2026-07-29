# Query Synonym and Intent Map

Use this page as a semantic bridge for user wording vs. manual wording.

## Maintenance Intents

- User intent: oil change
- Equivalent queries: engine oil and filter change, change engine oil, engine oil service, oil drain and refill
- Target procedures: Engine Oil and Filter Change, engine oil level and leakage checks

- User intent: cabin filter replacement
- Equivalent queries: HVAC filter replacement, air conditioning filter replacement, pollen filter replacement, passenger compartment filter replacement
- Nearest manual terms in this pack: air cleaner filter replacement, air cleaner filter inspection
- Note: if true HVAC/cabin filter content is absent, answer with nearest available procedure and call out limitation.

- User intent: engine air filter replacement
- Equivalent queries: air cleaner filter replacement, intake filter replacement
- Target procedures: Air Cleaner Filter Removal and Installation, Air Cleaner Filter Inspection and Cleaning

- User intent: spark plug replacement
- Equivalent queries: spark plug change, replace spark plugs
- Target procedures: Spark Plug Replacement

- User intent: coolant service
- Equivalent queries: coolant drain and refill, engine coolant replacement, cooling system service
- Target procedures: cooling system component and drain/refill procedures

## Torque Query Rewrites

- User intent: torque for cylinder head bolts
- Equivalent queries: cylinder head bolt tightening torque, head bolt torque sequence

- User intent: torque for camshaft housing bolts
- Equivalent queries: camshaft housing bolt torque, cam cap bolt torque

- User intent: torque for flywheel bolts
- Equivalent queries: flywheel bolt torque, drive plate bolt torque

## Querying Tips for NotebookLM

- Include both user term and manual term in one query.
- Example: cabin filter replacement (HVAC/pollen/air conditioning filter).
- Ask for section title plus steps.
- Example: show procedure title and numbered steps for engine oil and filter change.
