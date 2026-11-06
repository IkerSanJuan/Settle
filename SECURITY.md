# Security

Do not commit passwords, tokens, keys, customer data, or real `.env` files. Use environment or GitHub secrets and least-privilege permissions. Everyone uses their own account with two-factor authentication.

## Report a vulnerability

Do not open a public issue with exploitable details or credentials. Use a private team channel or GitHub private vulnerability reporting if enabled. Designate a private security contact and backup; both are still pending.

Include the component, impact, safe reproduction steps, and affected versions. Acknowledge receipt promptly and agree on an owner and private follow-up.

## If a secret is exposed

Revoke or rotate it immediately, review access, and notify the team. Deleting a line in a commit does not remove the secret from history. Coordinate any history cleanup and recovery of copies.

## Dependencies and automation

Review dependencies and retain lockfiles. Dependabot is configured for GitHub Actions; add the product ecosystem when defined. Pin actions to full commit hashes and review updates. Do not run untrusted PR code with secrets or use `pull_request_target` to execute its contents.

Supported product versions will be defined with the first release. No patching response time is promised yet.
