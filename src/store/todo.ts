import Vue from "vue";
import Vuex from "vuex";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import store from "@/store";

Vue.use(Vuex);

export type ITodo = {
  task: string;
  isCompleted: boolean;
};

@Module({ dynamic: true, namespaced: true, name: "todo", store })
export default class TodoModule extends VuexModule {
  todos: Map<number, ITodo> = new Map();

  /* -------------------------------------------------------------------------- */
  /*                                  MUTATION                                  */
  /* -------------------------------------------------------------------------- */

  /* ------------------------------- ADDING TASK ------------------------------ */
  @Mutation
  private ADD_TASK(payload: { task: string; id: number }) {
    this.todos.set(payload.id, { task: payload.task, isCompleted: false });
  }

  /* ------------------------------ UPDATING TASK ----------------------------- */
  @Mutation
  private UPDATE_TASK(id: number, payload?: ITodo) {
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
  private DELETE_TASK(id: number) {
    this.todos.delete(id);
  }

  /* -------------------------------------------------------------------------- */
  /*                                   ACTIONS                                  */
  /* -------------------------------------------------------------------------- */

  /* ------------------------------- ADDING TASK ------------------------------ */
  @Action({ commit: "ADD_TASK" })
  async addTask(): Promise<null> {
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
