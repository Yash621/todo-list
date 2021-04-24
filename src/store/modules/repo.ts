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
import { apolloProvider } from "@/main";

const yash = apolloProvider;

export class TodoRepository {
  static async findAll() {
    const data = await yash.query<FindAllQuery>({
      query: FindAllDocument,
    });
    console.log(data);
    return data;
  }
  static findOneById(params: FindOneByIdQueryVariables) {
    return yash.query<FindOneByIdQuery>({
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
        ...params,
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
