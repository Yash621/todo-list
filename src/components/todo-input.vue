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
      <button v-on:click="deleteTask(task.id)">Delete</button>
      <button v-on:click="updateTask(task.id)">completed</button>
    </div>
  </div>
</template>

<script lang="ts">
import Todo from "@/store/modules/todo";
import { ref, computed, defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    /* ----------------------------------- MSG ---------------------------------- */

    // DATA
    const msg = ref(""); // Primitives - String, Number, Array

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
    function updateTask(id: string) {
      const payload = { isCompleted: true, id: id };
      Todo.updateTask(payload);
    }

    return { msg, tasks, isRed, addTask, deleteTask, updateTask };
  },
});
</script>

<style>
.redText {
  color: red;
  text-decoration: line-through;
}
.greenText {
  color: green;
}
.centerGrid {
  display: grid;
  gap: 1rem;
  place-items: center;
  height: 100vh;
}
button {
  display: inline-block;
  border: 0.1em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: blue;
  text-align: center;
  transition: all 0.2s;
}
button:hover {
  color: #000000;
  background-color: #ffffff;
  border: 0.1px solid black;
}
@media all and (max-width: 30em) {
  button {
    display: block;
    margin: 0.4em auto;
  }
}
:root {
  --color-light: white;
  --color-dark: #212121;
  --color-signal: #fab700;
  --color-background: var(--color-light);
  --color-text: var(--color-dark);
  --color-accent: var(--color-signal);
  --size-bezel: 0.5rem;
  --size-radius: 4px;
  line-height: 1.4;
  font-family: "Inter", sans-serif;
  font-size: calc(0.6rem + 0.4vw);
  color: var(--color-text);
  background: var(--color-background);
  font-weight: 300;
  padding: 0 calc(var(--size-bezel) * 3);
}

h1,
h2,
h3 {
  font-weight: 900;
}

mark {
  background: var(--color-accent);
  color: var(--color-text);
  font-weight: bold;
  padding: 0 0.2em;
}

.card {
  background: var(--color-background);
  padding: calc(4 * var(--size-bezel));
  margin-top: calc(4 * var(--size-bezel));
  border-radius: var(--size-radius);
  border: 3px solid var(--color-shadow, currentColor);
  box-shadow: 0.5rem 0.5rem 0 var(--color-shadow, currentColor);
}
.card--inverted {
  --color-background: var(--color-dark);
  color: var(--color-light);
  --color-shadow: var(--color-accent);
}
.card--accent {
  --color-background: var(--color-signal);
  --color-accent: var(--color-light);
  color: var(--color-dark);
}
.card *:first-child {
  margin-top: 0;
}

.l-design-widht {
  max-width: 40rem;
  padding: 1rem;
}

.input {
  position: relative;
}
.input__label {
  position: absolute;
  left: 0;
  top: 0;
  padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * 0.5);
  margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * 0.5);
  background: pink;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: var(--color-background);
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;
}
.input__field {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 3px solid currentColor;
  padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
  color: currentColor;
  background: transparent;
  border-radius: var(--size-radius);
}
.input__field:not(:-moz-placeholder-shown) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: var(--color-accent);
}
.input__field:not(:-ms-input-placeholder) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: var(--color-accent);
}
.input__field:focus + .input__label,
.input__field:not(:placeholder-shown) + .input__label {
  transform: translate(0.25rem, -65%) scale(0.8);
  color: var(--color-accent);
}

.button-group {
  margin-top: calc(var(--size-bezel) * 2.5);
}

button {
  color: currentColor;
  padding: var(--size-bezel) calc(var(--size-bezel) * 2);
  background: var(--color-accent);
  border: none;
  border-radius: var(--size-radius);
  font-weight: 900;
}
button[type="reset"] {
  background: var(--color-background);
  font-weight: 200;
}

button + button {
  margin-left: calc(var(--size-bezel) * 2);
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
}

.hidden {
  display: none;
}
</style>
