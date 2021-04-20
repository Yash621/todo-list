import Vue from "vue";
import Vuex from "vuex";
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import store from "@/store";
import { MODULE_NAMES } from "./constants";
import { fun } from "@/utils/str-to-num-hash";
Vue.use(Vuex);

export type ITodo = {
  task: string;
  isCompleted: boolean;
};

@Module({ dynamic: true, namespaced: true, name: MODULE_NAMES.todo, store })
class Todo extends VuexModule {
  private todos = Object.create({
    "1": {
      task: "john-weak ko ghoomne jana hai bina ghar walo ki bakchodi ke!!",
      isCompleted: false,
    },
  });

  get keys() {
    return this.todos.keys();
  }

  /* ----------------------------- CUSTOM GETTERS ----------------------------- */
  get todoData() {
    const data = new Array<{
      task: string;
      isCompleted: boolean;
      id: string;
    }>();
    for (const key of this.keys) {
      data.push({
        task: this.todos[key].task,
        isCompleted: this.todos[key].isCompleted,
        id: key,
      });
    }
    return data;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  MUTATION                                  */
  /* -------------------------------------------------------------------------- */

  /* ------------------------------- ADDING TASK ------------------------------ */
  @Mutation
  private ADD_TASK(payload: { task: string; id: string }) {
    Vue.set(this.todos, payload.id, {
      task: payload.task,
      isCompleted: false,
    });
  }

  /* ------------------------------ UPDATING TASK ----------------------------- */
  @Mutation
  private UPDATE_TASK(id: string, isCompleted?: boolean, task?: string) {
    const oldTodo = this.todos[id];
    if (!oldTodo) {
      console.log("please provide a valid id");
    } else {
      Vue.set(this.todos, id, {
        isCompleted: isCompleted || oldTodo.isCompleted,
        task: task || oldTodo.task,
      });
    }
  }

  /* -------------------------------- DELETION -------------------------------- */
  @Mutation
  private DELETE_TASK(id: string) {
    Vue.delete(this.todos, id);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   ACTIONS                                  */
  /* -------------------------------------------------------------------------- */

  /* ------------------------------- ADDING TASK ------------------------------ */
  @Action
  async addTask(input: string): Promise<null> {
    const id = await fun(input);
    this.ADD_TASK({ id: id, task: input });
    return null;
  }

  /* ------------------------------- UPDATE TASK ------------------------------ */
  @Action
  async updateTask(payload: {
    id: string;
    isCompleted?: boolean;
    task?: string;
  }): Promise<null> {
    this.context.commit("UPDATE_TASK", payload);
    return null;
  }

  /* ------------------------------- DELETE TASK ------------------------------ */
  @Action
  async deleteTask(id: string): Promise<null> {
    this.context.commit("DELETE_TASK", { id });
    return null;
  }
}

export default getModule(Todo);
