# AI_AUDIT

1. Why do we use this pattern instead of loading tasks inside useEffect? ->
   **implemented**

```js
const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});
```

- Because useState(() => ...) runs only once during the initial render. That
  means your state is correctly initialized before the component mounts and
  before any effects run.

- If you use useEffect to load data, the component first renders with an empty
  array, and then updates afterward. That can cause a "flash" of empty UI and
  can also accidentally overwrite localStorage if you have a save effect
  running.
