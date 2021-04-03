<template>
  <div>
    <h1>hello my bakchod friends</h1>
    <div :class="`${isRed() ? 'redText' : 'greenText'}`">
      {{ msg }}
    </div>
    <fieldset>
      <input v-model="msg" />
    </fieldset>
    <button v-on:click="addTask"></button>
    <div v-for="task in tasks" :key="task.id">
      {{ task.task }}
    </div>
  </div>
</template>

<script>
import todo from "@/store/modules/todo";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  msg = "";
  tasks = todo.todoData;

  isRed() {
    if (this.a.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  addTask() {
    todo.addTask();
  }
}
</script>

<style>
.redText {
  color: red;
}
.greenText {
  color: green;
}
</style>
