<template>
  <div class="centerGrid">
    <h1>helu mic test 123</h1>
    <div :class="`${isRed() ? 'redText' : 'greenText'}`">
      {{ msg }}
    </div>
    <fieldset style="width: 25vw">
      <input v-model="msg" />
    </fieldset>
    <button v-on:click="addTask(msg)">SENPAI NOTICE ME</button>
    <div v-for="task in tasks" :key="task.id">
      {{ task.task }}
      <button v-on:click="deleteTask(task.id)">Delete</button>
      <button v-on:click="updateTask(task.id, true)">completed</button>
    </div>
  </div>
</template>

<script lang="ts">
import Todo from "@/store/modules/todo";
import { ref, reactive, computed, defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    /* ----------------------------------- MSG ---------------------------------- */

    // DATA
    const msg = ref(""); // Primitives - String, Number, Array
    const obj = reactive({
      name: "",
      age: 0,
    }); // Objects

    // Computed
    const tasks = computed(() => Todo.todoData);

    // Methods
    function isRed() {
      if (msg.value.length > 10) {
        return true;
      } else {
        return false;
      }
    }
    function addTask() {
      Todo.addTask(msg.value);
    }
    function deleteTask(id: string) {
      Todo.deleteTask(id);
    }
    function updateTask(id: string, isCompleted?: boolean, task?: string) {
      const payload = { task: task, isCompleted: isCompleted, id: id };
      Todo.updateTask(payload);
    }

    return { msg, obj, tasks, isRed, addTask, deleteTask, updateTask };
  },
});
</script>

<style>
.redText {
  color: red;
}
.greenText {
  color: green;
}
.centerGrid {
  display: grid;
  gap: 1rem;
  place-items: center;
}
</style>
