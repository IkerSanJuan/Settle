# Quality and definition of done

## A task is done when

- It meets its issue's acceptance criteria.
- It handles relevant errors, empty states, and permissions.
- It includes tests proportionate to risk: regression tests for bugs, integration tests for contracts, and critical user flows where relevant.
- It passes the formatting, linting, tests, and build checks configured for the product.
- It has an independent approval and resolved review conversations.
- Affected documentation is updated, with no secrets or personal data added.
- It is merged into `main` and the issue links to evidence. Released or deployed is a separate status, not implied.

For UI changes, check keyboard access, labels, contrast, and relevant screen sizes. For migrations, test upgrades and recovery using test data.

## Current automation

`Quality / docs` checks required documents and simple relative link destinations. It does not comprehensively validate formatting, anchors, external URLs, security, or product behavior.

The current prototype uses HTML, CSS, and JavaScript with no build step. Add formatting checks and functional tests as relevant behavior is implemented; add a build only if the technology requires it. Make checks required in GitHub after their first successful run. A passing documentation check does not replace product testing.

`Quality / javascript` checks the syntax of the three current JavaScript files using Node.js. It does not execute user flows.

## Failures on main

Prioritize restoring a working version. Revert through a PR if necessary; never hide a failure by disabling checks. Record the cause, impact, and proportionate preventive action.

## Basic checks before a PR

From the repository root:

```sh
python3 scripts/check_docs.py
node --check web/app.js
node --check web/data.js
node --check web/art.js
```

For documentation-only changes, the documentation check is sufficient. For behavior changes, also run relevant tests and manually verify the affected flow.

## Short manual prototype check

Use a test profile and fictional data. Record what you actually executed; do not mark this list without testing.

| Flow | What to check |
| --- | --- |
| Entry | The demo opens without depending on hosted sign-in |
| Questionnaire | Housing, budget, and owned products affect the selection |
| Catalog | Search and filters show consistent results and a useful empty state |
| Saved items | Save, reload, remove, and reload preserve the expected state in the same browser |
| Modified UI | It works with a keyboard and narrow screen; no new console errors appear |

Record the browser, steps, expected result, observed result, and anything not verified in the PR. Include screenshots only when helpful and without personal data. This guide does not claim that these flows were tested in this documentation update.
