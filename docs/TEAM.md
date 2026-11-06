# Team agreements

All four teammates can develop complete features. Coordination roles rotate and do not imply assigned specialties.

| Person | GitHub username | Current feature | Proposed reviewer |
| --- | --- | --- | --- |
| Iker | @IkerSanJuan | To be agreed | Augustin |
| Augustin | @augustingoudier-sys | To be agreed | Sandrine |
| Sandrine | @Noella-cloud | To be agreed | JoJo |
| JoJo | Pending | To be agreed | Iker |

Invitations were sent to Augustin and Sandrine; they were pending acceptance at the last check. Both have Write access to the board. JoJo's username is still needed. Verify current GitHub access before assigning reviews.

The review rotation is an initial proposal: adjust it for availability and knowledge. Issues hold current assignments; do not maintain this table as a second backlog.

## Coordination

- Aim for one active task per person, with at most four tasks in development. Resolve blockers and reviews before starting more work.
- At the end of a working day, record useful progress, next steps, and blockers in the issue. A daily meeting is not required.
- Hold a short weekly review of priorities, the integrated demo, blockers, and one process improvement.
- Each week, choose someone to monitor `main` and coordinate integration; they do not have to approve every PR.
- Record decisions that change contracts or architecture and review them before implementing dependent work.
- When disagreeing, compare user impact, cost, and risk; record the resolution and seek a third opinion when needed.

## Team board

Backlog → Ready → In progress → In review → Done.

Ready requires a clear outcome, verifiable acceptance criteria, identified dependencies, and an owner. In review requires a PR ready for review. Done requires [the definition of done](QUALITY.md). Mark blockers with `blocked` and their dependency without hiding the current status.

Minimum fields: owner, priority (P0/P1/P2), and size (S/M/L). Record dependencies in the issue; an Area field is optional and is not configured yet. Split L tasks before development. Reserve P0 for critical incidents, P1 for the next objective, and P2 for later improvements.
