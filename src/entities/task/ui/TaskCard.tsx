import React, { useCallback } from "react";
import { Button } from "shared/button/ui/Button";

import { ITask } from "../model/types";
import s from "./TaskCard.module.css";
import checkIcon from "/check.png";

interface IProps {
    task: ITask;
    changeStatusAction: (id: number) => void;
    deleteAction: (id: number) => void;
}

const TaskCard: React.FC<IProps> = ({
    task,
    changeStatusAction,
    deleteAction,
}) => {
    const { title, completed } = task;

    const handleChangeStatus = useCallback(() => {
        changeStatusAction(task.id);
    }, [changeStatusAction, task.id]);

    const handleDelete = useCallback(() => {
        deleteAction(task.id);
    }, [deleteAction, task.id]);

    return (
        <div className={completed ? s.completed : s.task}>
            <div className={s.block}>
                {completed && (
                    <img className={s.image} src={checkIcon} alt="check icon" />
                )}
                <p>{title}</p>
            </div>
            <div className={s.block}>
                <Button onClick={handleChangeStatus} color="primary">
                    Change status
                </Button>
                <Button onClick={handleDelete} color="danger">
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default React.memo(TaskCard);
