# Settle — product definition

## Confirmed goal

Help newcomers find the products they need to settle in. The initial audience is students new to UC Berkeley.

## Proposed first version

A short questionnaire about housing, budget, and items already owned; essential product recommendations; a catalog with retailer links; and a personal shopping checklist. Use the existing prototype to validate this flow.

Payments, logistics, live inventory, and other universities are initially out of scope. The team must confirm these boundaries before committing to deliveries.

## Proposed measurement

Observe whether a student completes the questionnaire, finds suitable products, and creates a useful checklist. Measure preparation time and perceived usefulness in consented research; agree on targets after establishing a baseline. Analytics are not implemented.

## Proposed initial assignments

| Increment | Proposed owner | Reviewer | Verifiable criterion |
| --- | --- | --- | --- |
| Arrival questionnaire and profile | Iker | Augustin | Housing, budget, and owned products can be reviewed and corrected |
| Catalog and data quality | Augustin | Sandrine | Each product has a category, source, and price explicitly marked as illustrative or verified |
| Recommendations and budget | Sandrine | JoJo | Already owned products are not recommended, and items outside the budget are explained |
| Personal checklist and tracking | JoJo | Iker | Products can be saved, marked, and recovered after reloading the browser |

These are proposals, not accepted assignments. Create an issue for each agreed increment. Much of the prototype's behavior is in `app.js`: extract modules through a coordinated PR before several people edit it simultaneously.
