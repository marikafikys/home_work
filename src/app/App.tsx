import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router";
import { Header } from "widgets/header/ui/Header";

import { withProviders } from "./providers";

export const App = withProviders(() => {
    return (
        <>
            <Stack
                sx={{
                    minHeight: "100vh",
                }}
            >
                <Header />
                <Container maxWidth="lg" sx={{ py: 8 }}>
                    <Outlet />
                </Container>
            </Stack>
        </>
    );
});
