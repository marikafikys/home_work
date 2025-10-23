import { Box, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

export const DebouncedLogger = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            console.log("Debounced input value:", value);
        }, 1000);
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
                DebouncedLogger
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    mb: 4,
                }}
            >
                <Typography sx={{ mb: 2 }}>
                    Текст появится в консоли через 1 секунду после остановки
                    печати
                </Typography>
                <TextField
                    sx={{ mb: 2 }}
                    onChange={handleChange}
                    id="outlined-basic-1"
                    value={inputValue}
                    label="Текст"
                    variant="outlined"
                />
            </Box>
        </Box>
    );
};
