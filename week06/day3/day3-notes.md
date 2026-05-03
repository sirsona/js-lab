# Async/Await vs Promise Chain

- `async/await` version is much clearer
- Promise chain becomes repetitive and harder to maintain
- `async/await` keeps everything in one place and easier to debug
- Promise chain logis is splitted accross multiple `.then()` blocks, which makes
  less readable and more error-prone

# Sequential vs Parallel await

## result

```bash
Parallel: 1002ms [ 'a', 'b', 'c' ]
Sequential: 3005ms [ 'a', 'b', 'c' ]

```
