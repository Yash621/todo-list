import {
  CreateTodoDocument,
  CreateTodoMutation,
  CreateTodoMutationVariables,
  DeleteOneDocument,
  DeleteOneMutation,
  DeleteOneMutationVariables,
  FindAllDocument,
  FindAllQuery,
  FindOneByIdDocument,
  FindOneByIdQuery,
  FindOneByIdQueryVariables,
  UpdateOneDocument,
  UpdateOneMutation,
  UpdateOneMutationVariables,
} from "@/generated/graphql";
import { apolloClient } from "@/main";

export class TodoRepository {
  static async findAll() {
    return apolloClient.query<FindAllQuery>({
      query: FindAllDocument,
    });
  }
  static findOneById(params: FindOneByIdQueryVariables) {
    return apolloClient.query<FindOneByIdQuery>({
      query: FindOneByIdDocument,
      variables: { ...params },
    });
  }
  static createTodo(params: CreateTodoMutationVariables) {
    return apolloClient.mutate<CreateTodoMutation>({
      mutation: CreateTodoDocument,
      variables: { ...params },
    });
  }
  static DeleteTodo(params: DeleteOneMutationVariables) {
    return apolloClient.mutate<DeleteOneMutation>({
      mutation: DeleteOneDocument,
      variables: {
        ...params,
      },
    });
  }
  static updateTodo(params: UpdateOneMutationVariables) {
    return apolloClient.mutate<UpdateOneMutation>({
      mutation: UpdateOneDocument,
      variables: {
        ...params,
      },
    });
  }
}
