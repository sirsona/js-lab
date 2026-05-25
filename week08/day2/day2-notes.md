# Day 2 Notes

The stale closure bug happens because the effect runs only once when the
component mounts. The interval callback captures the initial value of count,
which is 0.

Because the dependency array is empty, the effect never re-runs, so the callback
keeps using the old value.

Buggy code:

```jsx
setCount(count + 1);
```

### Fix

- Use a functional updater

```jsx
setCount((c) => c + 1);
```
