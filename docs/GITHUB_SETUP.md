# GitHub setup

[Public repository](https://github.com/IkerSanJuan/Settle).

## Activation status

Last verified on November 6, 2026:

- The repository was created under IkerSanJuan and pushed to `main` using SSH; it was later made public at Iker's request.
- The Quality workflow passed in GitHub: [initial successful run](https://github.com/IkerSanJuan/Settle/actions/runs/42277636735).
- Squash merging only; PR title used as the commit message; branch update suggestions and automatic deletion after merging are enabled.
- GitHub's API confirms that `main` is unprotected. As a public repository, it supports protections on GitHub Free, but they still need configuration. Review remains a manual team agreement; adding Markdown does not enable remote controls.
- Dependabot is configured for Actions and has opened an update PR awaiting review.
- Invitations were sent to @augustingoudier-sys and @Noella-cloud and were pending at the last check. JoJo's username is still needed. CODEOWNERS has no active rules until acceptance and permissions are verified.
- The [private board](https://github.com/users/IkerSanJuan/projects/1) was created without task imports. Default repository: IkerSanJuan/Settle. Augustin and Sandrine have Write access to the board; JoJo is pending.

## Repository settings

- Default branch: `main`.
- Allow Squash and merge; use the PR title for the squash commit.
- Disable merge commits and rebase merging to keep one integration method.
- Enable automatic deletion of merged branches.
- Enable Issues and use the included templates.
- Follow [INVITING_TEAM.md](INVITING_TEAM.md) for invitations.

## Protect main

In Settings → Rules → Rulesets or Branches, create an active rule for `main`:

- Require a pull request and at least one independent approval.
- Dismiss stale approvals after new changes and require resolved conversations.
- Require `docs` and `javascript` after their first successful run; select the exact check names shown by GitHub Actions.
- Require branches to be up to date with `main` before merging.
- Block force pushes and deletion of `main`.
- Apply rules to administrators where available; avoid routine bypasses.

After completing CODEOWNERS, consider requiring owner reviews, with backups to avoid blocking the team.

The repository is public, so protections are available on GitHub Free. Enable them once another person has accepted write access and can review PRs. Recommended settings are not necessarily active settings.

## GitHub Projects

Share the [private board](https://github.com/users/IkerSanJuan/projects/1) separately through Settings → Manage access. Columns: Backlog, Ready, In progress, In review, Done. Use Assignees for owners. Priority, Size, and Estimate fields exist; Area is an optional future addition.

Create issues from the proposed PRODUCT assignments after agreeing on them. The board was created empty at Iker's request, with no automatic task imports. Add agreed issues manually.

## Security

Enable Dependabot alerts and secret scanning features available on the plan. GitHub Actions should use read-only permissions by default. There is no automatic deployment.

## Completion checklist

- [x] Public repository and files published.
- [x] Workflow ran successfully in GitHub.
- [ ] Protections enabled and tested with an example PR.
- [ ] Three invitations accepted and CODEOWNERS updated.
- [x] Private board created.
- [ ] Board access shared with all three teammates.

Do not mark a step complete merely because it is documented.
