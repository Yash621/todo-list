import {
  CreateTodoDocument,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  DeleteOneDocument,
  DeleteOneMutation,
  FindAllDocument,
  FindOneByIdDocument,
  FindOneByIdQueryVariables,
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
  static findOneById(params: FindOneByIdQueryVariables) {
    return yash.query({
      query: FindOneByIdDocument,
      variables: { ...params },
    });
  }
  static createTodo(params: CreateTodoMutationVariables) {
    return yash.mutate<CreateTodoMutation>({
      mutation: CreateTodoDocument,
      variables: { ...params },
    });
  }
  static DeleteTodo(params: string) {
    return yash.mutate<DeleteOneMutation>({
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
