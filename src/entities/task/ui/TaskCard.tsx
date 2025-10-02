import React from "react";
import { Button } from "shared/button/ui/Button";

import { ITask } from "../model/types";
import s from "./TaskCard.module.css";
import checkIcon from "/check.png";

interface IProps {
    task: ITask;
    changeStatusAction: (id: string) => void;
    deleteAction: (id: string) => void;
}

const TaskCard: React.FC<IProps> = ({
    task,
    changeStatusAction,
    deleteAction,
}) => {
    const { title, completed } = task;

    return (
        <div className={completed ? s.completed : s.task}>
            <div className={s.block}>
                {completed && (
                    <img className={s.image} src={checkIcon} alt="check icon" />
                )}
                <p>{title}</p>
            </div>
            <div className={s.block}>
                <Button
                    onClick={() => changeStatusAction(task.id)}
                    color="primary"
                >
                    Change status
                </Button>
                <Button onClick={() => deleteAction(task.id)} color="danger">
                    Delete
                </Button>
            </div>
        </div>
    );
};

// Оборачиваем компонент в React.memo для предотвращения ненужных ререндеров
export default React.memo(TaskCard);
