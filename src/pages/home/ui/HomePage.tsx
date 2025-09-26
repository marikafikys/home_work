import React from "react";
import TaskWidget from "widgets/taskWidget/ui/TaskWidget";

import s from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={s.page}>
            <h1>This is our HomePage</h1>
            <TaskWidget />
        </div>
    );
}
