import { Box, TextField, Typography } from "@mui/material";
import { type FC, useState } from "react";
import { usePreviousValue } from "shared/lib/usePreviousValue";

export const PreviousInput: FC = () => {
    const [value, setValue] = useState("");

    const prevValue = usePreviousValue(value);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column",
            }}
        >
            <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
                PreviousInput
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <TextField
                    onChange={(e) => setValue(e.target.value)}
                    id="outlined-basic"
                    value={value}
                    label="Текст 1"
                    variant="outlined"
                />
            </Box>
            <Typography variant="body2" align="center" sx={{ mb: 6 }}>
                Предыдущее значение: {prevValue}
            </Typography>
        </Box>
    );
};
