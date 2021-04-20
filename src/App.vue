<template>
  <div id="app">
    <todo-input />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoInput from "@/components/todo-input.vue";

@Component({
  components: {
    TodoInput,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  background-color: aquamarine;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
