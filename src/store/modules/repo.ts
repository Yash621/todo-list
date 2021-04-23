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
  static findAll() {
    return yash.query({
      query: FindAllDocument,
    });
  }
  static findOneById(params: string) {
    return yash.query({
      query: FindOneByIdDocument,
      variables: {
        id: params,
      },
    });
  }
  static createTodo(params: CreateTodoMutationVariables) {
    return yash.mutate<{
      TodoInput: { id: string; task: string; isCompleted: boolean };
    }>({
      mutation: CreateTodoDocument,
      variables: { ...params },
    });
  }
  static DeleteTodo(params: string) {
    return yash.mutate<{
      Todo: { id: string; task: string; isCompleted: boolean };
    }>({
      mutation: DeleteOneDocument,
      variables: {
        id: params,
      },
    });
  }
  static updateTodo(params: {
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
