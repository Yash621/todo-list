import {
  CreateTodoDocument,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  DeleteOneDocument,
  DeleteOneMutation,
  DeleteOneMutationVariables,
  FindAllDocument,
  FindOneByIdDocument,
  FindOneByIdQueryVariables,
  UpdateOneDocument,
  UpdateOneMutation,
  UpdateOneMutationVariables,
} from "@/generated/graphql";
import { apolloProvider } from "@/main";

const yash = apolloProvider;

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
  static DeleteTodo(params: DeleteOneMutationVariables) {
    return yash.mutate<DeleteOneMutation>({
      mutation: DeleteOneDocument,
      variables: {
        id: params,
      },
    });
  }
  static updateTodo(params: UpdateOneMutationVariables) {
    return yash.mutate<UpdateOneMutation>({
      mutation: UpdateOneDocument,
      variables: {
        ...params,
      },
    });
  }
}
