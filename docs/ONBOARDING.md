# Onboarding

## Before starting

1. Accept repository access with your own GitHub account and enable two-factor authentication.
2. Install Git and configure your author name and email (GitHub's private email is an option).
3. Clone the repository; do not share one working directory between people.
4. Read CONTRIBUTING, TEAM, SECURITY, and your assigned issue.
5. Run `python3 scripts/check_docs.py` from the repository root to check the documentation baseline.

## Join the repository

1. Accept the GitHub invitation using the invited account.
2. In GitHub Desktop: File → Clone repository → choose `IkerSanJuan/Settle`. Alternatively, with SSH configured:

```sh
git clone git@github.com:IkerSanJuan/Settle.git
cd Settle
python3 -m http.server 4177 --bind 127.0.0.1 --directory web
```

3. Open http://127.0.0.1:4177 and enter the demo.
4. In GitHub Desktop, update `main`, create a branch for the issue, commit changes, publish the branch, and open a PR. Another person reviews before merging.
5. Do not share SSH keys. Each collaborator configures their own key or uses GitHub Desktop authentication.

## Current technologies

HTML, CSS, and JavaScript with no build step. Python 3 serves the files locally. Node.js 22 checks syntax using `node --check web/app.js`, `node --check web/data.js`, and `node --check web/art.js`. There is no application package manager or backend. No secrets are needed for the demo.

## Update this guide if the technology changes

The owner of the first integration must document in a PR:

- Language, tool, and package manager versions.
- Exact installation, development, formatting, linting, testing, and build commands.
- Required variables in `.env.example`, with fictional values only.
- Test data and local services; never copy personal production data.
- The local URL and steps to verify startup.

A second person must follow the instructions from a clean clone before setup is considered complete. Keep the commands above current when the architecture changes.
