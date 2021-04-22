import {
  CreateTodoDocument,
  CreateTodoMutationVariables,
  DeleteOneDocument,
  FindAllDocument,
  FindOneByIdDocument,
  UpdateOneDocument,
} from "@/generated/graphql";
import { apolloProvider } from "@/main";

const yash = apolloProvider.defaultClient;

export class TodoRepository {
  static async findAll() {
    await yash.query({
      query: FindAllDocument,
    });
  }

  static async findOneById(id: string) {
    await yash.query({
      query: FindOneByIdDocument,
      variables: {
        id: id,
      },
    });
  }
  static async createTodo(params: CreateTodoMutationVariables) {
    return await yash.mutate<{
      TodoInput: { id: string; task: string; isCompleted: boolean };
    }>({
      mutation: CreateTodoDocument,
      variables: { ...params },
    });
  }
  static async DeleteTodo(id: string) {
    return yash.mutate<{
      Todo: { id: string; task: string; isCompleted: boolean };
    }>({
      mutation: DeleteOneDocument,
      variables: {
        id: id,
      },
    });
  }
  static async updateTodo(params: {
    task: string;
    isCompleted: boolean;
    id: string;
  }) {
    return yash.mutate<{
      TodoInput: { id: string; task: string; isCompleted: boolean };
    }>({
      mutation: UpdateOneDocument,
      variables: {
        ...params,
      },
    });
  }
}
