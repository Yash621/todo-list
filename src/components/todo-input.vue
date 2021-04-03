<template>
  <div class="centerGrid">
    <h1>helu mic test 123</h1>
    <div :class="`${isRed() ? 'redText' : 'greenText'}`">
      {{ msg }}
    </div>
    <fieldset style="width:25vw">
      <input v-model="msg" />
    </fieldset>
    <button v-on:click="addTask">SENPAI NOTICE ME</button>
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
    if (this.msg.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  addTask() {
    console.log('yo');
    todo.addTask(this.msg);
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
.centerGrid{
  display: grid;
  gap: 1rem;
  place-items: center;
}
</style>
