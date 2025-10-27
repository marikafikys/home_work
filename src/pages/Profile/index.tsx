import { Typography } from "@mui/material";
import { useUsersMeApi } from "features/user/api";
import { type FC, useCallback } from "react";
import { useNavigate } from "react-router";
import { Button } from "shared/button/ui/Button";
import { useAuthContext } from "shared/lib/authContext";

export const ProfilePage: FC = () => {
    const { data, isLoading, error } = useUsersMeApi();
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    const handleLogOut = useCallback(() => {
        logout();
        navigate("/login", { replace: true });
    }, [logout, navigate]);

    return isLoading ? (
        <div>Loading...</div>
    ) : error ? (
        <Typography variant="h4">{error.message}</Typography>
    ) : (
        <>
            <Typography variant="h2">Hello, {data?.name}!</Typography>
            <Button onClick={handleLogOut} color="danger">
                Log Out
            </Button>
        </>
    );
};
