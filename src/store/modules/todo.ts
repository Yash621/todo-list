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
import { TodoRepository } from "./repo";

Vue.use(Vuex);

export type ITodo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

@Module({ dynamic: true, namespaced: true, name: MODULE_NAMES.todo, store })
class Todo extends VuexModule {
  private todos = Object.create({});

  /* ----------------------------- CUSTOM GETTERS ----------------------------- */
  get keys() {
    return Object.keys(this.todos);
  }

  get todoState() {
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

  get todoFromApi() {
    return async () => {
      const data = new Array<{
        task: string;
        isCompleted: boolean;
        id: string;
      }>();
      const queries = await TodoRepository.findAll();
      for (const entry of queries.data.findAll) {
        data.push({
          task: entry.task,
          isCompleted: entry.isCompleted,
          id: entry.id,
        });
      }
      return data;
    };
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
  }) {
    Vue.set(this.todos, payload.id, {
      isCompleted: payload.isCompleted,
      task: payload.task,
    });
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
  async addTask(payload: { task: string; isCompleted: boolean }) {
    const response = await TodoRepository.createTodo({ payload: payload });
    if (response.data)
      this.ADD_TASK({
        id: response.data.createTodo.id,
        task: payload.task,
      });
  }

  @Action
  async addTaskById(payload: {
    task: string;
    id: string;
    isCompleted: boolean;
  }) {
    this.ADD_TASK({
      id: payload.id,
      task: payload.task,
    });
  }

  /* ------------------------------- UPDATE TASK ------------------------------ */
  @Action
  async updateTask(payload: {
    task: string;
    isCompleted: boolean;
    id: string;
  }) {
    this.UPDATE_TASK(payload);
    const response = await TodoRepository.updateTodo({ Input: payload });
    if (response.errors?.length != 0) {
      console.log("error");
      const { isCompleted, ...data } = payload;
      this.UPDATE_TASK({ isCompleted: !isCompleted, ...data });
      return;
    }
  }

  @Action
  addTaskLocally(payload: Array<ITodo>) {
    for (const data of payload) {
      Vue.set(this.todos, data.id, {
        task: data.task,
        isCompleted: data.isCompleted,
      });
    }
  }

  /* ------------------------------- DELETE TASK ------------------------------ */
  @Action
  async deleteTask(id: string) {
    const task = this.todos[id] as ITodo;
    this.DELETE_TASK(id);
    const response = await TodoRepository.DeleteTodo({ id });
    if (response.errors?.length != 0) {
      console.log("error");
      this.addTaskById(task);
      return;
    }
  }
}

export default getModule(Todo);
