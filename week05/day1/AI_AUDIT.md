# AI Audit

1.  No validation in inventory functions

2.  Mutation of global state (inventory)

- `inventory` is global and mutable
- any function can corrupt it
- Harder to debug and test at scale

3. `Object.freeze` is shallow

- Only freezes top-level
- Nested object would still be mutable

4. `removeProduct` fails silently

- No error if ID doesn't exist
- No feedback

## Reject

1 and 2

## Accept

4
