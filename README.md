# Settle

A collaboration workspace for **Iker, Augustin, Sandrine, and JoJo**.

[Public repository](https://github.com/IkerSanJuan/Settle) · [Private team board](https://github.com/users/IkerSanJuan/projects/1)

Settle helps students new to UC Berkeley identify the products they need to settle in.

This repository includes the existing HTML, CSS, and JavaScript prototype in `web/` and the team's collaboration guidelines. See [GitHub setup](docs/GITHUB_SETUP.md) for the actual configuration and enabled controls.

**Project language: English.** Use English for documentation, issues, PRs, commit messages, code comments, and product UI.

## Run the prototype

```sh
python3 -m http.server 4177 --bind 127.0.0.1 --directory web
```

Open http://127.0.0.1:4177 and use the demo option. Hosted authentication depends on Sites and does not work on the local server. There is no backend or cross-device synchronization. Prices and recommendations are illustrative; there is no live inventory, purchasing, or live pricing. See [prototype limitations](docs/PROTOTYPE.md).

## Get started

**Read [Start here](docs/START_HERE.md) first** for the essential rules, first-day steps, and coordination across the four teammates.

1. [Download and run Settle](docs/ONBOARDING.md).
2. [Prepare a concrete task](docs/TASK_EXAMPLE.md).
3. Work on a branch and follow [the review workflow](CONTRIBUTING.md).
4. Check [the definition of done](docs/QUALITY.md).

## Documentation

| File | Purpose |
| --- | --- |
| [START_HERE.md](docs/START_HERE.md) | Short guide to getting started |
| [TASK_EXAMPLE.md](docs/TASK_EXAMPLE.md) | Example task and acceptance criteria |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Branches, commits, reviews, and conflicts |
| [INVITING_TEAM.md](docs/INVITING_TEAM.md) | Access and invitations for teammates |
| [TEAM.md](docs/TEAM.md) | Coordination across the four teammates |
| [PRODUCT.md](docs/PRODUCT.md) | Purpose, scope, and priorities |
| [ONBOARDING.md](docs/ONBOARDING.md) | Joining the project and running it locally |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Modules and shared contracts |
| [QUALITY.md](docs/QUALITY.md) | Definition of done and validation |
| [GITHUB_SETUP.md](docs/GITHUB_SETUP.md) | Actual GitHub configuration and pending setup |
| [RELEASES.md](docs/RELEASES.md) | Versions and recovery |
| [SECURITY.md](SECURITY.md) | Secrets and security incidents |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Working respectfully together |
| [decisions](docs/decisions/README.md) | Decision records |
| [features](docs/features/TEMPLATE.md) | Feature specification template |
| [STANDARDS.md](docs/STANDARDS.md) | Sources and adopted practices |

Issues are the source of truth for work; GitHub Projects shows its status. Markdown files hold lasting agreements and decisions. Do not duplicate the backlog in this README.

## Available validation

With Python 3: `python3 scripts/check_docs.py`. It checks required documents and simple relative Markdown link destinations. It does not test the product or validate external links or anchors.

## License

The rights holders have not yet selected a project license. No open-source license has been assigned. Preserve existing third-party credits and licenses.
