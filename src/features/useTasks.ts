import { ITask } from "entities/task/model/types";
import { useCallback, useMemo, useState } from "react";

export type Filter = "all" | "completed" | "incomplete";

const initialTasks: ITask[] = [
    { id: "1", title: "To do homework", completed: true },
    { id: "2", title: "Reading book", completed: true },
    { id: "3", title: "Yoga class", completed: false },
    { id: "4", title: "Shopping", completed: false },
];

export function useTasks() {
    const [tasks, setTasks] = useState<ITask[]>(initialTasks);
    const [filter, setFilter] = useState<Filter>("all");

    const addTask = useCallback((title: string) => {
        const id = crypto.randomUUID();

        setTasks((prev) => [...prev, { id, title, completed: false }]);
    }, []);

    const changeTaskStatus = useCallback((id: string) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task,
            ),
        );
    }, []);

    const deleteTask = useCallback((id: string) => {
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
        deleteTask,
        setFilter,
    };
}
