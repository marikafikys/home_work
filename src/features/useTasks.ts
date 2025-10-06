import { useGetTasksQuery } from "entities/task/api/taskApi";
import { ITask } from "entities/task/model/types";
import { useCallback, useEffect, useMemo, useState } from "react";

export type Filter = "all" | "completed" | "incomplete";

export function useTasks() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [filter, setFilter] = useState<Filter>("all");

    const { data: remoteTasks = [] } = useGetTasksQuery();

    useEffect(() => {
        if (remoteTasks.length > 0 && tasks.length === 0) {
            setTasks(remoteTasks);
        }
    }, [remoteTasks, tasks.length]);

    const addTask = useCallback((title: string) => {
        const id = crypto.getRandomValues(new Uint32Array(1))[0];

        setTasks((prev) => [...prev, { id, title, completed: false }]);
    }, []);

    const changeTaskStatus = useCallback((id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task,
            ),
        );
    }, []);

    const removeTask = useCallback((id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);

    const filterTasks = useMemo((): ITask[] => {
        if (filter === "completed") {
            return tasks.filter((task) => task.completed);
        }

        if (filter === "incomplete") {
            return tasks.filter((task) => !task.completed);
        }

        return tasks;
    }, [tasks, filter]);

    return {
        tasks: filterTasks,
        count: filterTasks.length,
        addTask,
        changeTaskStatus,
        removeTask,
        setFilter,
    };
}
