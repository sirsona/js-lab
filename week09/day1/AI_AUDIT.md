# Decisions I owned

1. state shape

- Decision: multiple `useState`
- Alternative : single reducer / object
- Why: simple mental model

2. Loading strategy

- Decision: `loading= true` initially
- Alternative: false until first fetch
- Why: avoid flash of empty UI

3. Error handling

- Decision: throw on no-OK HTTP status
- Alternative: ignore HTTP errors and only catch network failures
- Why: makes API failure visible and debuggable

4. Cleanup strategy

- Decision: AbortController
- Alternative: ignore stale responses
- Why: prevents state updates after unmount, avoid react warning
