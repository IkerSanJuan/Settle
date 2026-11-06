# Start here — Settle

A working guide for Iker, Augustin, Sandrine, and JoJo. Read it before your first task. Project artifacts and product UI use English.

## The team's six rules

1. **One task, one owner.** Before editing, create or choose an issue describing the change, how to check it, and who will review it.
2. **One branch per task.** `main` holds the shared version; everyone works in their own local clone and branch.
3. **One goal per pull request (PR).** A PR proposes changes for merging. Separate unrelated fixes, features, and reorganizations.
4. **Coordinate before editing shared files.** In Settle, `app.js`, `index.html`, and `style.css` contain much of the application. Branches do not prevent two people from editing the same lines.
5. **Check your work and request review.** Another person reviews the result; the author addresses feedback and uses Squash and merge when ready.
6. **Keep the board current.** Aim for one active task per person and at most four tasks in development. Record dependencies and notify teammates in the issue when blocked.

These are team rules. Do not assume GitHub enforces them: check the actual [protection status](GITHUB_SETUP.md).

## First day

- Accept the repository write invitation and check access to the private board. These permissions are separate.
- Follow [ONBOARDING.md](ONBOARDING.md) to download and open the prototype on your computer.
- Choose a small task, write its acceptance criteria, and agree on a reviewer.
- Walk through the demo before editing to understand the baseline behavior.
- Create your branch, make the change, and open a draft PR. Mark it ready for review after checking it.

## A normal working day

| When | Action |
| --- | --- |
| Before starting | Check the board, update `main`, and check dependencies |
| While working | Keep one goal; communicate changes to shared files |
| Before requesting review | Update your branch with `main`, run checks, and test the affected flow |
| At the end of the day | Record progress, next steps, and blockers in the issue |
| After merging | Delete the merged branch and close the issue if its criteria are met |

Full instructions and commands are in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Divide work without overwriting each other

Example: Augustin changes the catalog in `web/data.js` while Sandrine improves recommendations. They first agree on product fields, values, and the files each will edit. If both need `data.js`, merge the structure change first, then update the dependent branch.

Before four simultaneous changes to `app.js`, choose one person to extract a small set of modules and review it together. Meanwhile, divide work by file or sequence overlapping changes. No framework change is needed to get started.

The assignments in [PRODUCT.md](PRODUCT.md) are proposals: confirm them in issues before treating them as commitments.

## Where information belongs

- Tasks, owners, and blockers: issues; the [board](https://github.com/users/IkerSanJuan/projects/1) shows their status.
- Changes and validation evidence: PRs.
- Decisions affecting several modules: [decision records](decisions/README.md).
- Passwords and real student data: never in public issues, code, screenshots, or documents.

## If something goes wrong

Stop merging when a check fails. Resolve conflicts with someone who understands the file; do not automatically choose one whole side. If `main` breaks, prioritize a fix or revert PR. If a key is exposed, revoke it and follow [SECURITY.md](../SECURITY.md).

For a simple task, an issue and PR are enough. Use a feature specification or decision record only when it adds useful information.
