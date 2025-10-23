import { Box, TextField, Typography } from "@mui/material";
import { type FC, useRef, useState } from "react";
import { Button } from "shared/button/ui/Button";

export const FocusTracker: FC = () => {
    const [firstInputValue, setFirstInputValue] = useState<string>("");
    const [secondInputValue, setSecondInputValue] = useState<string>("");

    const firstInputRef = useRef<HTMLInputElement>(null);
    const secondInputRef = useRef<HTMLInputElement>(null);

    const focusCountRef = useRef(0);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const relatedTarget = e.relatedTarget as HTMLElement | null;

        const isFromFirstInput = relatedTarget === firstInputRef.current;
        const isFromSecondInput = relatedTarget === secondInputRef.current;
        const isToFirstInput = e.target === firstInputRef.current;
        const isToSecondInput = e.target === secondInputRef.current;

        if (
            (isToFirstInput && isFromSecondInput) ||
            (isToSecondInput && isFromFirstInput)
        ) {
            focusCountRef.current += 1;
            console.log(
                `Переходов фокуса между полями: ${focusCountRef.current}`,
            );
        }
    };

    const handleFocusFirst = () => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column",
            }}
        >
            <Typography variant="h4" sx={{ mb: 4 }}>
                FocusTracker
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    mb: 4,
                }}
            >
                <TextField
                    inputRef={firstInputRef}
                    sx={{ mb: 2 }}
                    onFocus={handleFocus}
                    onChange={(e) => setFirstInputValue(e.target.value)}
                    id="outlined-basic-1"
                    value={firstInputValue}
                    label="Текст 1"
                    variant="outlined"
                />
                <TextField
                    inputRef={secondInputRef}
                    sx={{ mb: 2 }}
                    onFocus={handleFocus}
                    onChange={(e) => setSecondInputValue(e.target.value)}
                    id="outlined-basic-2"
                    value={secondInputValue}
                    label="Текст 2"
                    variant="outlined"
                />
                <Button onClick={handleFocusFirst}>
                    Сфокусировать на первом
                </Button>
            </Box>
        </Box>
    );
};
