function createTaskManager() {
  let tasks = [];
  return {
    addTask(task, priority = "normal") {
      tasks.push({
        task,
        priority,
      });
    },
    // addTasks(...items) {
    //   items.forEach((item) => {
    //     tasks.push({
    //       task: item,
    //       priority: "normal",
    //     });
    //   });
    // },
    addTasks(...items) {
      items.forEach((item) => {
        if (typeof item === "string") {
          tasks.push({
            task: item,
            priority: "normal",
          });
        } else if (typeof item === "object" && item.task) {
          tasks.push({
            task: item.task,
            priority: item.priority || "normal",
          });
        }
      });
    },
    listTasks() {
      // implementation
      return [...tasks];
    },
    removeTask(index) {
      // implementation
      if (index < 0 || index >= tasks.length) {
        return null;
      }
      return tasks.splice(index, 1);
    },
    saveTasks(callback) {
      // implementation
      setTimeout(() => {
        callback(tasks);
      }, 1000);
    },
  };
}


// // test
// const task = createTaskManager()

// // add one 
// task.addTask("Read", "high")

// task.addTasks({ task: "Running", priority: "normal" });
// task.addTasks("Read", "Write", "Walking", { task: "Code", priority: "high" })

// console.log(task.listTasks());


// DOM 

