import type { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router";
import { UseAuthStrategy } from "shared/model/auth";

interface Props {
    useAuthStrategy: UseAuthStrategy;
}

export const ProtectedRoute: FC<PropsWithChildren<Props>> = ({
    children,
    useAuthStrategy,
}) => {
    const { isAuthenticated, isReady } = useAuthStrategy();
    const location = useLocation();

    if (!isReady) return <div>Loading...</div>;

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace={true}
                state={{ from: location.pathname }}
            />
        );
    }

    return children;
};
