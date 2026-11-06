# Example of a task ready to start

This is a teaching example, not an existing issue or a committed feature.

## Title

`[Feature] Keep saved products after reloading`

## Problem and scope

A student wants to recover their product selection after closing and reopening Settle in the same browser. Inspect the existing behavior and fix it only if it fails the criteria.

## Ownership and coordination

- Owner: choose one person.
- Reviewer: another person who has accepted repository write access.
- Expected files: `web/app.js` and its tests, if needed.
- Dependencies: agree on any changes to the browser storage format.
- Out of scope: accounts, cross-device synchronization, and purchases.

## Acceptance criteria

- [ ] A saved product remains selected after reloading in the same browser and origin.
- [ ] A removed product does not reappear after reloading.
- [ ] A storage failure is not presented as a successful save.

## How to demonstrate it

Use the demo with fictional data. Save a product, reload, check it, remove it, and reload again. Record the browser, result, and test limitations in the PR. For a bug fix, include a regression check proportionate to the change.

## How to use this example

1. Create an issue using the relevant template and replace the example with the actual need.
2. Add it manually to the private board, agree on an owner and reviewer, and move it to Ready.
3. Use its actual issue number in the branch, for example `fix/NUMBER-saved-items`.
4. Write `Closes #NUMBER` in the PR only if it resolves the whole issue. For a partial change, use `Refs #NUMBER` and make remaining work explicit.

Complete the fields instead of copying them unchanged. Do not turn this example into a second backlog.
