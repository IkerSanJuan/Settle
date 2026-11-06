# Contributing

First task? Start with [the short guide](docs/START_HERE.md) and [the example issue](docs/TASK_EXAMPLE.md).

Use **English** for documentation, issues, PRs, commit messages, code comments, and product UI.

## Daily workflow

1. Choose an issue in Ready, check dependencies, and agree on one owner and a different reviewer.
2. Update `main` and create one branch per task. Everyone works in their own local clone.
3. Open a draft PR early and link the issue. Keep the change small and coherent.
4. Update the branch with `main`, run checks, and request review.
5. Address feedback; use **Squash and merge** once review and checks pass. Delete the merged remote branch.

Do not work directly on `main`. Avoid permanent branches per person or a `develop` branch without a concrete need.

## Example commands

After cloning the repository and entering its directory:

```sh
git switch main
git pull --ff-only origin main
git switch -c feat/12-description
# Edit and review your changes; replace path-to-file with an actual file.
git add path-to-file
git commit -m "feat(module): describe the change"
git push -u origin HEAD
```

Branches: `feat/12-description`, `fix/24-description`, `docs/31-description`, or `chore/40-description`. Automated assistants use `codex/12-description`.

## Commits and PR titles

Use Conventional Commits: `type(scope): description`. The scope is optional.
Common types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ci`.
The PR title becomes the squash commit message. Example: `feat(profile): allow editing the name`.
Mark incompatible changes with `!` and explain them in the body with `BREAKING CHANGE:`.

## Avoid conflicts while working in parallel

- Before coding, list affected modules and shared files in the issue.
- Agree on contracts between modules first: inputs, outputs, errors, and examples.
- Merge contract or configuration changes in a small prerequisite PR when others depend on them.
- Assign one owner to each change involving dependencies, migrations, configuration, or lockfiles; notify teammates in the issue.
- Synchronize with `main` at the start and before requesting review. Split longer tasks into working increments.
- For dependent features, use agreed contracts and clearly identified temporary mocks. Merge the dependency first.

## Resolve a conflict

With your work committed, from the task branch:

```sh
git fetch origin
git merge origin/main
# Resolve each file with its owner and review the result.
git add resolved-file
git commit
git push
```

To cancel a merge you cannot resolve confidently: `git merge --abort`.
Do not automatically accept one entire side of a conflict. Rerun tests. Regenerate lockfiles using the project's package manager. Do not rewrite shared branches or force-push.

## Review

At least one approval from another person with write access is required by the team. Authors do not approve their own PRs. Label feedback as a blocker, suggestion, or question. Review behavior, clarity, security, tests, and documentation. For authentication, data, or migrations, also involve someone familiar with that area.

Team target: respond to review requests within one business day and communicate absences. This is a proposed team agreement, not a GitHub requirement. See [GitHub setup](docs/GITHUB_SETUP.md) for enforcement status.
