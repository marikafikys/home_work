import { createContext, useContext } from "react";
import { AuthContextModel } from "shared/model/auth";

export const AuthContext = createContext<AuthContextModel>({
    accessToken: "",
    refreshToken: "",
    userId: "",
    name: "",
    login: () => {},
    logout: () => {},
});

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error(
            "Нельзя использовать хук useAuthContext вне AuthContext",
        );
    }

    return authContext;
};
