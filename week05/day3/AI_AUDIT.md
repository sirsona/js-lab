# AI Audit

1. Missing encapsulation - **accepted**

- you expose internal mutable state

2. Direct mutation of parent internals - **rejected**

- both subclasses directly modify `this.balanceCents` and `this.transactions`

3. Money precision consideration - **accepted**

- Using cents is Good
