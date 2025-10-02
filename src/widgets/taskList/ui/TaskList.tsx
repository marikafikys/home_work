import TaskCard from "entities/task/ui/TaskCard";
import TaskFilter from "features/taskFilter/TaskFilter";
import { useTasks } from "features/useTasks";
import React, { useState } from "react";
import { FilterButton } from "shared/button/ui/FilterButton";

import s from "./TaskList.module.css";

export default function TaskList() {
    const [isFiltration, setIsFiltration] = useState<boolean>(false);
    const { tasks, count, setFilter, deleteTask } = useTasks();

    return (
        <div>
            <FilterButton
                onClick={() => {
                    setIsFiltration((prev) => !prev);
                }}
            >
                Filtration
            </FilterButton>
            {isFiltration && <TaskFilter setFilter={setFilter} />}
            <div className={s.tasks}>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} action={deleteTask} />
                ))}
            </div>
            <p>Total users: {count}</p>
        </div>
    );
}
