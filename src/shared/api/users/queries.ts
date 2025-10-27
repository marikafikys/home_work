import { api } from "../auth";
import { UsersMeResponse } from "./types";

const usersApi = api.extend((options) => ({
    prefixUrl: `${options.prefixUrl}/users`,
}));

export const getName = () => usersApi.get<UsersMeResponse>("me").json();
