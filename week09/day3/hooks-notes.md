# Hooks Notes

## Why must hooks be called at the top level (never inside conditions or loops)?

- React relies on the order of hook calls to correctly preserve state between
  renders.
- If hooks are placed inside conditions or loops, the order can change and React
  will break state mapping between renders.

## Why must hooks start with `use`?

- React uses this naming convention to identify which functions are hooks and
  should follow the Rules of Hooks.
- This naming convention also allows the ESLint plugin to detect incorrect hook
  usage.

## What does the ESLint plugin enforce?

- The ESLint React Hooks plugin enforces the Rules of Hooks.
- It warns when hooks are called conditionally, inside loops, nested functions,
  or outside React components and custom hooks.
- It also checks dependency arrays for hooks like `useEffect` and `useCallback`.

## What was the "aha" moment?

- The biggest realization was understanding that custom hooks are not just for
  code reuse, but for reusing stateful logic.
- Seeing how logic like localStorage handling or API fetching could be
  abstracted into reusable hooks made React feel much cleaner and more scalable.
