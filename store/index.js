export const state = () => ({
  tasks: [],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
    /*This code is the same that the code above (unshift is used to push one element in the first position on a existent arrray)
    state.tasks.push({ content: task, done: false });
    state.tasks.unshift({ content: task, done: false });
    */
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  },
};
