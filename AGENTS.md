# Instructions for development assistants

Settle helps students new to UC Berkeley find the products they need.

- Use English for project documentation, issues, PRs, commit messages, code comments, and product UI.
- Read README.md, CONTRIBUTING.md, and the issue before changing code.
- Work on a `codex/<issue>-<description>` branch and stay within the agreed scope.
- The editable prototype is in `web/`. Do not assume it is generated output.
- Coordinate changes to `app.js`, `style.css`, `index.html`, and contracts before editing shared files.
- Do not invent prices, stock availability, integrations, test results, or authentication guarantees.
- Preserve credits, font licenses, and documented prototype limitations.
- Do not add secrets, personal data, paid services, or deployments without authorization.
- Run `python3 scripts/check_docs.py` and `node --check` for modified JavaScript files. Add functional validation proportionate to the change.
- Update affected documentation. Explain changes, checks performed, and outstanding work in the PR.
- Do not force-push, overwrite others' work, or merge changes without team review.
