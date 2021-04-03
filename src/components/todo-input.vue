<template>
  <div>
    <h1>hello my bakchod friends</h1>
    <div :class="`${isRed() ? 'redText' : 'greenText'}`">
      {{ a }}
    </div>
    <fieldset>
      <input v-model="a" />
    </fieldset>
    <div v-for="task in tasks" :key="task">
      {{ task }}
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  a = "";
  tasks = ["123", "321"];
  isRed() {
    if (this.a.length > 10) {
      return true;
    } else {
      return false;
    }
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
