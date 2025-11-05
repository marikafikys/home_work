import { useEffect, useState } from "react";
import { UseAuthStrategy } from "shared/model/auth";

import { useAuthContext } from "./authContext";

export const useAuth: UseAuthStrategy = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        setTimeout(() => setState(true), 5e3);
    }, []);

    const { accessToken } = useAuthContext();

    return {
        isAuthenticated: !!accessToken,
        isReady: state,
    };
};
