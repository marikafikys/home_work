import { type ComponentType, useCallback, useMemo, useState } from "react";
import {
    JWT_ACCESS_LS_KEY,
    JWT_LS_KEY,
    JWT_REFRESH_LS_KEY,
    USER_INFO_LS_KEY,
} from "shared/configs/constants";
import { AuthContext } from "shared/lib/authContext";
import {
    clearLS,
    loadFromLS,
    saveToLocaleStorage,
} from "shared/lib/localStorage";
import { AuthContextModel, AuthInfo, AuthMethods } from "shared/model/auth";

export const withAuthProvider = (WrappedComponent: ComponentType) => () => {
    const [authInfo, setAuthInfo] = useState<AuthInfo>(() => {
        const accessToken = loadFromLS<string>({
            key: JWT_LS_KEY,
            subTitle: JWT_ACCESS_LS_KEY,
        });

        const userId = loadFromLS<string>({
            key: USER_INFO_LS_KEY,
            subTitle: "userId",
        });

        return {
            accessToken: accessToken || "",
            refreshToken: "",
            userId: userId || "",
            name: "",
        };
    });

    const login: AuthMethods["login"] = useCallback((authInfo) => {
        setAuthInfo(authInfo);

        const { accessToken, refreshToken, ...user } = authInfo;

        saveToLocaleStorage({
            key: JWT_LS_KEY,
            state: {
                [JWT_ACCESS_LS_KEY]: accessToken,
                [JWT_REFRESH_LS_KEY]: refreshToken,
            },
        });

        saveToLocaleStorage({
            key: USER_INFO_LS_KEY,
            state: user,
        });
    }, []);

    const logout: AuthMethods["logout"] = useCallback(() => {
        setAuthInfo({
            accessToken: "",
            refreshToken: "",
            userId: "",
            name: "",
        });

        clearLS({ key: JWT_LS_KEY });
        clearLS({ key: USER_INFO_LS_KEY });
    }, []);

    const authContextValue: AuthContextModel = useMemo(
        () => ({
            ...authInfo,
            login,
            logout,
        }),
        [authInfo, login, logout],
    );

    return (
        <AuthContext.Provider value={authContextValue}>
            <WrappedComponent />
        </AuthContext.Provider>
    );
};
