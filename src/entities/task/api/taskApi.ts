import { baseApi } from "shared/api/baseApi";

import { ITask } from "../model/types";

export const tasksApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<ITask[], void>({
            query: () => "todos",
            transformResponse: (response: ITask[]) => response,
            providesTags: ["Tasks"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetTasksQuery } = tasksApi;
