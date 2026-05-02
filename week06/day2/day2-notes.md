# Promise.all vs Promise.race vs Promise.allSettled

- `Promise.all()` is usefull when i want all tasks to succeed together. if just
  one promise fails, the whole operation failes immediately.

- `Promise.race()` is usefull when i only care about the fastest response. it
  only give me first completed promise.

- `Promise.allSettled()` is usefull when i care about the outcome of every
  promise. It alway waits for all promises, whether it succeed or fails. It is
  safest choice when i want all the results (success or fails)
