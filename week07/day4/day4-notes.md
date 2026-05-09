## Immutability check

- We use `[...tasks, newTask]` instead of `tasks.push()` because React state
  should not be directly.
- The spread operator creates a brand new array with the old tasks plus the new
  one, while `push()` changes the original array in place.
- If state is mutated directly, React may not notice that anything changed, so
  the UI can fail to update correctly.
- React needs a new array reference to know that state has changed.
