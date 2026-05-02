# Reflect on the pain

- If i needed to print 20 numbers this way, the code would become extremely long
  and deeply nested, making it hard to manage
- Each new step would require adding another level

# The Event Loop

CALL STACK (function call) --> TASK QUEUE (callbacks) --> SETTIMEOUT (wait 1s,
2s)

## Synchronous vs Asynchronous

- Synchronous code runs line by line, and each operation must finish before the
  next one starts
- Asynchronous code allows some tasks to run in the background while the main
  program continues executing other code
