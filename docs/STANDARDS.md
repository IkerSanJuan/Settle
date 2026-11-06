# Sources and adopted practices

Researched on November 6, 2026. These are open specifications and recognized practices; they do not constitute ISO certification or guarantee regulatory compliance.

| Primary reference | Application in Settle |
| --- | --- |
| [Google Engineering Practices: small changes](https://google.github.io/eng-practices/review/developer/small-cls.html) | One coherent goal per PR, easy to review and revert |
| [Projects best practices](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects) | Small issues, explicit dependencies, and a single source of work status |
| [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) | Short-lived task branches, PRs, review, and merging |
| [Repository best practices](https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories) | Getting-started, collaboration, and security documentation |
| [Protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) | Planned required checks and review configuration |
| [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | Template awaiting verified users with write access |
| [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) | PR titles and squash commit messages |
| [SemVer 2.0.0](https://semver.org/) | Versioning and compatibility policy |
| [Actions security](https://docs.github.com/en/actions/reference/security/secure-use) | Least privilege, commit-pinned actions, and no secrets exposed to untrusted PRs |
| [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | Existing board with issues added manually |

Team adaptations: one active task per person, rotating reviewers, a target response time of one business day, and short architecture decisions. These are proposed working agreements for four people, not universal standards.

Actual remote configuration is recorded in [GITHUB_SETUP.md](GITHUB_SETUP.md). Documentation and syntax checks do not ensure functional quality, accessibility, or product security.

## How these sources inform the guide

- GitHub Flow supports the branch → PR → review → merge workflow.
- Google recommends changes with a clear purpose; there is no universal line-count limit per PR.
- Projects recommends tracking work in one place and making dependencies visible.
- Conventional Commits defines message structure; branch names and work limits are team choices.
- Protected branch documentation confirms that public repositories support these protections on GitHub Free. Activation is still pending in Settle.

The getting-started guide adapts these references to the actual code and team size. It does not introduce a certification process or a full methodology for four people.
