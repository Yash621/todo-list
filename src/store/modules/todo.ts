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
  private todos: Map<string, ITodo> = new Map([
    ["1", { isCompleted: false, task: "besan lagana hai" }],
  ]);

  /* ----------------------------- CUSTOM GETTERS ----------------------------- */
  get todoData() {
    const data = new Array<{
      task: string;
      isCompleted: boolean;
      id: string;
    }>();
    for (const todo of this.todos) {
      data.push({
        task: todo[1].task,
        isCompleted: todo[1].isCompleted,
        id: todo[0],
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
    this.todos.set(payload.id, {
      task: payload.task,
      isCompleted: false,
    });
  }

  /* ------------------------------ UPDATING TASK ----------------------------- */
  @Mutation
  private UPDATE_TASK(id: string, payload?: ITodo) {
    const oldTodo = this.todos.get(id);
    if (!oldTodo) {
      console.log("please provide a valid id");
    } else {
      this.todos.set(id, {
        isCompleted: payload?.isCompleted || oldTodo.isCompleted,
        task: payload?.task || oldTodo.task,
      });
    }
  }

  /* -------------------------------- DELETION -------------------------------- */
  @Mutation
  private DELETE_TASK(id: string) {
    this.todos.delete(id);
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
  @Action({ commit: "UPDATE_TASK" })
  async updateTask(): Promise<null> {
    return null;
  }

  /* ------------------------------- DELETE TASK ------------------------------ */
  @Action({ commit: "DELETE_TASK" })
  async deleteTask(): Promise<null> {
    return null;
  }
}

export default getModule(Todo);
