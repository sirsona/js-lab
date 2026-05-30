# AI AUDIT

1. Hook Optimization -> **implemented**

- current version `useToggle` recreates `toggle` on every render
- we can improve performance and stability by memoizing the `toggle` function
  using `useCallback`
