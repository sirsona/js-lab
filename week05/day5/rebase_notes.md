# Merge vs Rebase

1. What is the visual difference between a merge commit and a rebase

- A merge commit creates a branch history that looks like at tree with a multiple lines
  coming together, while rebase creates a straight , linear history by replaying commits on
  top of another branch.

2. When would you use merge vs rebase?

- I would use merge when working on shared branches or when i want to preserve the full
  history of how work was combined.
- I would use rebase when working on my own features branch to keep the commit history
  clean before integrating into main.

3. What is "golder rule" of rebasing public branches? Hint it rhymes with "never"

- Never rebase public branches, because it rewrites history and can cause problems for others.

4. What happened when you rebased: did anything unexpected occur?

- When I rebased my branch , my commits were moved on top of the latest main branch which
  made the history linear.
