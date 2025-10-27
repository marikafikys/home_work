import { Box } from "@mui/material";
import { SignInForm } from "features/signIn";
import type { FC } from "react";

export const LoginPage: FC = () => {
    return (
        <Box>
            <SignInForm />
        </Box>
    );
};
