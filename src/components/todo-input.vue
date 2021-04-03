/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <h1>hello my bakchod friends</h1>
    // eslint-disable-next-line vue/valid-v-bind // eslint-disable-next-line
    vue/no-parsing-error
    <div id="jkjdfkj" :class="d-flex flex-column ml-${toShowProfile() ? '350' : '60'}">{{ a }}</div>
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
