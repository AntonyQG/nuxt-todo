<template>
  <main>
    <h1>Task Board</h1>
    <p>Create task a list of tasks</p>

    <!-- ADD TASK BAR -->
    <div class="create-new">
      <input
        v-model="newTask"
        type="text"
        @keypress.enter="addTask"
        placeholder="Add new task"
      />
      <button @click="addTask">Add</button>
    </div>

    <!-- TASK LIST -->
    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
