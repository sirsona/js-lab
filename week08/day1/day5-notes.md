# Day 5 notes

1. Why are controlled inputs "controlled"?

- Controlled inputs are called "controlled" because React state is the single
  source of truth for the input values. Every change updates state, and the UI
  reflects that state.

2. What would change if you used uncontrolled inputs instead?

- If I used uncontrolled inputs, the DOM would manage the state internally and I
  would need refs to read values instead of React state.

3. One thing you learned in the pair conversation with AI.

- Controlled inputs make form handling predictable and easier to debug compared
  to uncontrolled inputs.
