import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "@vue/composition-api";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo: Todo;
  updateOne: Array<Todo>;
  delete: Todo;
  deleteAll: Scalars["Float"];
  deleteMany: Scalars["Float"];
};

export type MutationCreateTodoArgs = {
  TodoInput: TodoInput;
};

export type MutationUpdateOneArgs = {
  UpdateTodoInput: UpdateTodoInput;
};

export type MutationDeleteArgs = {
  id: Scalars["String"];
};

export type MutationDeleteManyArgs = {
  IdsInput: Array<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  findAll: Array<Todo>;
  findOne: Todo;
};

export type QueryFindOneArgs = {
  id: Scalars["String"];
};

export type Todo = {
  __typename?: "Todo";
  id: Scalars["String"];
  /** task of the todolist */
  task: Scalars["String"];
  /** completion status of task of the todolist */
  isCompleted: Scalars["Boolean"];
};

export type TodoInput = {
  /** task of the todolist */
  task: Scalars["String"];
  /** completion status of task of the todolist */
  isCompleted: Scalars["Boolean"];
};

export type UpdateTodoInput = {
  /** task of the todolist */
  task: Scalars["String"];
  /** completion status of task of the todolist */
  isCompleted: Scalars["Boolean"];
  /** id of the todolist */
  id: Scalars["String"];
};

export type CreateTodoMutationVariables = Exact<{
  payload: TodoInput;
}>;

export type CreateTodoMutation = { __typename?: "Mutation" } & {
  createTodo: { __typename?: "Todo" } & Pick<
    Todo,
    "task" | "id" | "isCompleted"
  >;
};

export type DeleteAllMutationVariables = Exact<{ [key: string]: never }>;

export type DeleteAllMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteAll"
>;

export type DeleteManyMutationVariables = Exact<{
  Inputs: Array<Scalars["String"]> | Scalars["String"];
}>;

export type DeleteManyMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteMany"
>;

export type DeleteOneMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteOneMutation = { __typename?: "Mutation" } & {
  delete: { __typename?: "Todo" } & Pick<Todo, "id" | "task">;
};

export type FindAllQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllQuery = { __typename?: "Query" } & {
  findAll: Array<
    { __typename?: "Todo" } & Pick<Todo, "task" | "isCompleted" | "id">
  >;
};

export type FindOneByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type FindOneByIdQuery = { __typename?: "Query" } & {
  findOne: { __typename?: "Todo" } & Pick<Todo, "task" | "isCompleted">;
};

export type UpdateOneMutationVariables = Exact<{
  Input: UpdateTodoInput;
}>;

export type UpdateOneMutation = { __typename?: "Mutation" } & {
  updateOne: Array<
    { __typename?: "Todo" } & Pick<Todo, "id" | "isCompleted" | "task">
  >;
};

export const CreateTodoDocument = gql`
  mutation createTodo($payload: TodoInput!) {
    createTodo(TodoInput: $payload) {
      task
      id
      isCompleted
    }
  }
`;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateTodoMutation({
 *   variables: {
 *     payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateTodoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateTodoMutation,
        CreateTodoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateTodoMutation,
          CreateTodoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >(CreateTodoDocument, options);
}
export type CreateTodoMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const DeleteAllDocument = gql`
  mutation deleteAll {
    deleteAll
  }
`;

/**
 * __useDeleteAllMutation__
 *
 * To run a mutation, you first call `useDeleteAllMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAllMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteAllMutation();
 */
export function useDeleteAllMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteAllMutation,
        DeleteAllMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteAllMutation,
          DeleteAllMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    DeleteAllMutation,
    DeleteAllMutationVariables
  >(DeleteAllDocument, options);
}
export type DeleteAllMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteAllMutation,
  DeleteAllMutationVariables
>;
export const DeleteManyDocument = gql`
  mutation deleteMany($Inputs: [String!]!) {
    deleteMany(IdsInput: $Inputs)
  }
`;

/**
 * __useDeleteManyMutation__
 *
 * To run a mutation, you first call `useDeleteManyMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteManyMutation({
 *   variables: {
 *     Inputs: // value for 'Inputs'
 *   },
 * });
 */
export function useDeleteManyMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteManyMutation,
        DeleteManyMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteManyMutation,
          DeleteManyMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteManyMutation,
    DeleteManyMutationVariables
  >(DeleteManyDocument, options);
}
export type DeleteManyMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteManyMutation,
  DeleteManyMutationVariables
>;
export const DeleteOneDocument = gql`
  mutation deleteOne($id: String!) {
    delete(id: $id) {
      id
      task
    }
  }
`;

/**
 * __useDeleteOneMutation__
 *
 * To run a mutation, you first call `useDeleteOneMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteOneMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteOneMutation,
        DeleteOneMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteOneMutation,
          DeleteOneMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteOneMutation,
    DeleteOneMutationVariables
  >(DeleteOneDocument, options);
}
export type DeleteOneMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteOneMutation,
  DeleteOneMutationVariables
>;
export const FindAllDocument = gql`
  query findAll {
    findAll {
      task
      isCompleted
      id
    }
  }
`;

/**
 * __useFindAllQuery__
 *
 * To run a query within a Vue component, call `useFindAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFindAllQuery();
 */
export function useFindAllQuery(
  options:
    | VueApolloComposable.UseQueryOptions<FindAllQuery, FindAllQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<FindAllQuery, FindAllQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<FindAllQuery, FindAllQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<FindAllQuery, FindAllQueryVariables>(
    FindAllDocument,
    {},
    options
  );
}
export type FindAllQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  FindAllQuery,
  FindAllQueryVariables
>;
export const FindOneByIdDocument = gql`
  query findOneById($id: String!) {
    findOne(id: $id) {
      task
      isCompleted
    }
  }
`;

/**
 * __useFindOneByIdQuery__
 *
 * To run a query within a Vue component, call `useFindOneByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFindOneByIdQuery({
 *   id: // value for 'id'
 * });
 */
export function useFindOneByIdQuery(
  variables:
    | FindOneByIdQueryVariables
    | VueCompositionApi.Ref<FindOneByIdQueryVariables>
    | ReactiveFunction<FindOneByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        FindOneByIdQuery,
        FindOneByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          FindOneByIdQuery,
          FindOneByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          FindOneByIdQuery,
          FindOneByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    FindOneByIdQuery,
    FindOneByIdQueryVariables
  >(FindOneByIdDocument, variables, options);
}
export type FindOneByIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  FindOneByIdQuery,
  FindOneByIdQueryVariables
>;
export const UpdateOneDocument = gql`
  mutation updateOne($Input: UpdateTodoInput!) {
    updateOne(UpdateTodoInput: $Input) {
      id
      isCompleted
      task
    }
  }
`;

/**
 * __useUpdateOneMutation__
 *
 * To run a mutation, you first call `useUpdateOneMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateOneMutation({
 *   variables: {
 *     Input: // value for 'Input'
 *   },
 * });
 */
export function useUpdateOneMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateOneMutation,
        UpdateOneMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateOneMutation,
          UpdateOneMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateOneMutation,
    UpdateOneMutationVariables
  >(UpdateOneDocument, options);
}
export type UpdateOneMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  UpdateOneMutation,
  UpdateOneMutationVariables
>;
