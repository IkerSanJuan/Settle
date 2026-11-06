# Invite Augustin, Sandrine, and JoJo

## Iker: send invitations

1. Open `IkerSanJuan/Settle` on GitHub.
2. Go to Settings → Collaborators (it may appear as Collaborators and teams).
3. Select Add people and search for each teammate's GitHub username or email. Confirm the identity.
4. Send each teammate an individual invitation. A public repository still requires an invitation to push changes. Do not share your account or SSH key.
5. Check that all three accept. If an invitation expires, resend it from that screen.

Collaborators on a personal repository can write; administration remains with the owner. Consider an organization later if finer permissions or shared ownership become necessary.

## Each teammate: join

Accept the invitation with the correct account and follow [ONBOARDING.md](ONBOARDING.md). Being able to view a public repository does not prove write access: check the account and invitation if publishing a branch fails.

## After acceptance

Update usernames in [TEAM.md](TEAM.md) and activate `.github/CODEOWNERS` with actual users. A global rule listing all four can request team reviews; add module owners later if useful. Verify write permissions and CODEOWNERS availability for the plan.

Test the workflow: each person opens a small PR from their branch, another person reviews, and the author squash-merges. Once protections are enabled, also verify that GitHub rejects direct changes to `main`.

## Grant access to the private board

Open [board access settings](https://github.com/users/IkerSanJuan/projects/1/settings/access). Add Augustin, Sandrine, and JoJo with Write access so they can manage tasks. Repository and board access are granted separately; verify both with each person.

The board was created without automatic task imports. Create issues for the first agreed assignments and add them manually.
