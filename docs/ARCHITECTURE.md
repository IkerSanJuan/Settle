# Architecture and contracts

Current baseline: HTML, CSS, and JavaScript in `web/`, with no build step.

| File | Purpose |
| --- | --- |
| `web/index.html` | Page structure |
| `web/style.css` | Styles |
| `web/data.js` | Catalog and prototype data |
| `web/art.js` | Illustrations |
| `web/app.js` | State, interactions, and recommendations |
| `web/assets/` | Image, fonts, and licenses |

`app.js`, `index.html`, and `style.css` are likely conflict points. Coordinate shared edits in the issue. Before four simultaneous changes, agree on an incremental extraction of feature modules; this documentation update does not refactor the application.

Organize code by feature when appropriate for the technology. Share components or utilities only for a real need. Modules should not depend on other modules' internal details.

## Contracts between features

Before working in parallel on connected parts, agree on:

- Producer and consumers.
- Operation or event and its purpose.
- Inputs and outputs, with types and an example.
- Validation, errors, and permissions.
- Compatibility, versioning, and migration strategy.
- Change owner and dependencies between issues.

Store the contract alongside its code or in an executable format appropriate to the technology. Link it from the issue. Incompatible changes require coordination with consumers and a recorded decision.

## Shared files

Identify who will change global configuration, dependencies, data schemas, or shared components in each issue. Keep these PRs small and merge them before dependent features.

Record significant decisions using the [ADR template](decisions/TEMPLATE.md).
