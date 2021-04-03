<template>
  <div>
    <h1>hello my bakchod friends</h1>
    <div v-bind:class="`${isRed() ? 'redText' : 'greenText'}`">
      {{ a }}
    </div>
    <fieldset>
      <input v-model="a" />
    </fieldset>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  a = "";

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
