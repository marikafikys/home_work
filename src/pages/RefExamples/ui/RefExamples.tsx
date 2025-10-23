import { ClickTimer } from "features/refExamples/ClickTimer";
import { DebouncedLogger } from "features/refExamples/DebouncedLogger";
import { FocusTracker } from "features/refExamples/FocusTracker";
import { PreviousInput } from "features/refExamples/PreviousInput";

import s from "./RefExamples.module.css";

export default function RefExamplesPage() {
    return (
        <div className={s.page}>
            <ClickTimer />
            <PreviousInput />
            <FocusTracker />
            <DebouncedLogger />
        </div>
    );
}
