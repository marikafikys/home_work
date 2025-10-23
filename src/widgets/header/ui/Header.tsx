import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import type { FC } from "react";

export const Header: FC = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Toolbar>
                <Link href={"/"} variant="button">
                    <Typography variant="h6" component="h6">
                        Home
                    </Typography>
                </Link>

                <Box component="nav" sx={{ ml: "auto" }}>
                    <Link href="/auth" sx={{ mx: 1 }}>
                        Auth
                    </Link>
                    <Link href="/ref" sx={{ mx: 1 }}>
                        RefExamples
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
