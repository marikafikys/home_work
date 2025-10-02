import React from "react";
import TaskList from "widgets/taskList/ui/TaskList";

import s from "./TaskWidget.module.css";

export default function TaskWidget() {
    return (
        <div className={s.wrapper}>
            <h2>Our tasks:</h2>
            <TaskList />
        </div>
    );
}
