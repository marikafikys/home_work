import { Box, Typography } from "@mui/material";
import { FC, useRef } from "react";
import { Button } from "shared/button/ui/Button";

interface ClickData {
    startTime: number | null;
    clickCount: number;
}

export const ClickTimer: FC = () => {
    const metaInfo = useRef<ClickData>({
        startTime: null,
        clickCount: 0,
    });

    const clickHandler = () => {
        if (!metaInfo.current.startTime) {
            metaInfo.current.startTime = Date.now();
        }
        metaInfo.current.clickCount += 1;

        console.log(
            "difference: ",
            Date.now() - metaInfo.current.startTime,
            "clickCount: ",
            metaInfo.current.clickCount,
        );
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
                ClickTimer
            </Typography>
            <Button onClick={clickHandler}>Click!</Button>
        </Box>
    );
};
