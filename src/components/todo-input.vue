<template>
  <div class="centerGrid">
    <h1>helu mic test 123</h1>
    <div :class="`${isRed() ? 'redText' : 'greenText'}`">
      {{ msg }}
    </div>
    <fieldset style="width: 25vw">
      <input v-model="msg" />
    </fieldset>
    <button v-on:click="addTask">SENPAI NOTICE ME</button>
    <div v-for="task in tasks" :key="task.id">
      {{ task.task }}
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
      console.log("yo");
      Todo.addTask(msg.value);
    }

    return { msg, obj, tasks, isRed, addTask };
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
