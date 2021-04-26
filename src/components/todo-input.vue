<template>
  <div class="centerGrid">
    <h1>Tasks</h1>
    <fieldset>
      <label class="input">
        <input
          class="input__field"
          placeholder=" "
          value="Besan lagana h"
          v-model="msg"
        />
        <span class="input__label">Enter the Task</span>
      </label>
    </fieldset>
    <button v-on:click="addTask(msg)">Add Task</button>
    <div v-for="task in tasks" :key="task.id">
      <p :class="`${task.isCompleted ? 'redText' : 'greenText'}`">
        {{ task.task }}
      </p>
      <a>
        <button v-on:click="deleteTask(task.id)">DELETE</button>
        <button v-on:click="completeTask(task)">Done</button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Todo from "@/store/modules/todo";
import {
  ref,
  computed,
  defineComponent,
  onMounted,
} from "@vue/composition-api";

export default defineComponent({
  setup() {
    /* ----------------------------------- MSG ---------------------------------- */

    // DATA
    const msg = ref(""); // Primitives - String, Number, Array
    // Computed
    const tasks = computed(() => Todo.todoState());

    // Methods
    function isRed() {
      if (msg.value.length > 10) {
        return true;
      } else {
        return false;
      }
    }
    function addTask() {
      Todo.addTask({ task: msg.value, isCompleted: false });
    }
    function deleteTask(id: string) {
      Todo.deleteTask(id);
    }
    function updateTask(payload: {
      task: string;
      isCompleted: boolean;
      id: string;
    }) {
      Todo.updateTask({
        task: payload.task,
        isCompleted: true,
        id: payload.id,
      });
    }
    async function init() {
      const data = await Todo.todoFromApi();
      Todo.addTaskLocally(data);
    }

    onMounted(init);
    return { msg, tasks, isRed, addTask, deleteTask, updateTask, init };
  },
});
</script>

<style></style>
