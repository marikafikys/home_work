import React, { useCallback, useState } from "react";
import { Button } from "shared/button/ui/Button";

import s from "./TaskForm.module.css";

type Props = {
    addTask: (value: string) => void;
};

export default function TaskForm({ addTask }: Props) {
    const [inputValue, setInputValue] = useState<string>("");

    const handleClick = useCallback(() => {
        addTask(inputValue);
        setInputValue("");
    }, [addTask, inputValue]);

    return (
        <div className={s.form}>
            <input
                type="text"
                placeholder="Add task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={s.input}
            />
            <Button onClick={handleClick}>Add</Button>
        </div>
    );
}
