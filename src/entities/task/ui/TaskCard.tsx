import React from "react";
import { Button } from "shared/button/ui/Button";

import { ITask } from "../model/types";
import s from "./TaskCard.module.css";
import checkIcon from "/check.png";

interface IProps {
    task: ITask;
    action: (id: string) => void;
}

export default function TaskCard({ task, action }: IProps) {
    const { title, completed } = task;

    return (
        <div className={completed ? s.completed : s.task}>
            <div className={s.title}>
                {completed && (
                    <img className={s.image} src={checkIcon} alt="check icon" />
                )}
                <p>{title}</p>
            </div>
            <Button onClick={() => action(task.id)} color="danger">
                Delete
            </Button>
        </div>
    );
}
