# batch update vs functional update

`setCount(count + 1)` it uses the current value of `count` at the time of the
functon runs. Batches state updates in the same render cycle, `count` doesn't
change immediately.

`setCount((c) => c + 1)` use a functional update, which always recieves the
latest state value.
