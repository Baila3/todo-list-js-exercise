

// Create a new task by adding to the arrays
// A new task will be created as incomplete

function newTask(title, descriptions) {
  const task = {
  title: title,
  descriptions: descriptions,
  complete: false,

  logState: function() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  },

  markCompleted: function() {
    this.complete = true
  }

};
  return task
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box ");
const task2 = newTask("Do laudry", "😨")
const tasks = [task1, task2]

task1.logState();
task1.markCompleted();
task1.logState();


// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logState(0); // Clean Cat Litter has not been completed
// markCompleted(0);
// logState(0); // Clean Cat Litter has been completed
