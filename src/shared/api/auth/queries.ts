import { api } from ".";
import type { SignInRequest, SignResponse } from "./types";

const authApi = api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/auth`,
}));

export const signIn = (params: SignInRequest) =>
    authApi
        .post<SignResponse>("login", {
            json: params,
        })
        .json();
