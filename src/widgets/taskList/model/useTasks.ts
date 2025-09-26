import { ITask } from "entities/task/model/types";
import { useState } from "react";

export type Filter = "all" | "completed" | "incomplete";

const initialTasks: ITask[] = [
    { id: "1", title: "To do homework", completed: true },
    { id: "2", title: "Reading book", completed: true },
    { id: "3", title: "Yoga class", completed: false },
    { id: "4", title: "Shopping", completed: false },
];

export function useTasks() {
    const [tasks, setTasks] = useState<ITask[]>(initialTasks);
    const [filter, setFilter] = useState<string>("");

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filterTasks = () => {
        if (filter === "completed") {
            return tasks.filter((task) => task.completed);
        }

        if (filter === "incomplete") {
            return tasks.filter((task) => !task.completed);
        }

        return tasks;
    };

    return {
        tasks: filterTasks(),
        count: filterTasks().length,
        setFilter,
        deleteTask,
    };
}
