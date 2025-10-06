import { Filter } from "features/useTasks";
import React from "react";

import s from "./TaskFilter.module.css";

interface IProps {
    setFilter: (value: Filter) => void;
}

export default function TaskFilter({ setFilter }: IProps) {
    return (
        <select
            className={s.filter}
            id="fruits"
            name="favorite_fruit"
            onChange={(e) => setFilter(e.target.value as Filter)}
        >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </select>
    );
}
