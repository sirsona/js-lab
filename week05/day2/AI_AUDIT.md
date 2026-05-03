# AI Audit

1. Validate inputs

- Right now, deposit and withdraw accept anything (negative numbers, strings). That can
  break logic.

2. Improve transaction records

- Right now transactions lack context, i.e no timestamps. Adding timestamps `data: new
Date()` will give more context.

3. Encapsulate `balanceCents` (Make it truly private)

- Right now, anyone can modify it directly
