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
import { TodoRepository } from "./repo";

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
    return Object.keys(this.todos);
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
  private UPDATE_TASK(payload: {
    task: string;
    isCompleted: boolean;
    id: string;
    error?: boolean;
  }) {
    if (payload.error) {
      Vue.set(this.todos, payload.id, {
        isCompleted: false,
        task: payload.task,
      });
    } else {
      Vue.set(this.todos, payload.id, {
        isCompleted: true,
        task: payload.task,
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
  async addTask(payload: { task: string; id?: string; isCompleted: boolean }) {
    const id = await fun(payload.task);
    if (payload.id) {
      this.ADD_TASK({ id: payload.id, task: payload.task });
    } else {
      this.ADD_TASK({ id: id, task: payload.task });
    }
    const newpayload = { payload: { task: payload.task, isCompleted: false } };
    const response = await TodoRepository.createTodo(newpayload);
    if (response.errors?.length != 0) {
      console.log("error");
      this.DELETE_TASK(id);
      return;
    }
  }

  /* ------------------------------- UPDATE TASK ------------------------------ */
  @Action
  async updateTask(payload: {
    task: string;
    isCompleted: boolean;
    id: string;
  }) {
    this.UPDATE_TASK(payload);
    const response = await TodoRepository.updateTodo(payload);
    if (response.errors?.length != 0) {
      console.log("error");
      const newpayload = {
        task: payload.task,
        isCompleted: true,
        id: payload.id,
        error: true,
      };
      this.UPDATE_TASK(newpayload);
      return;
    }
  }

  /* ------------------------------- DELETE TASK ------------------------------ */
  @Action
  async deleteTask(id: string) {
    const task = this.todos[id];
    this.DELETE_TASK(id);
    const response = await TodoRepository.DeleteTodo(id);
    if (response.errors?.length != 0) {
      console.log("error");
      this.ADD_TASK(task);
      return;
    }
  }
}

export default getModule(Todo);
