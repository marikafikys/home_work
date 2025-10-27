import ky from "ky";
import { getAccessToken } from "shared/lib/getAccessToken";
import { getEnvVariable } from "shared/lib/vite";

export const api = ky.create({
    prefixUrl: getEnvVariable("VITE_API_URL"),
    hooks: {
        beforeRequest: [
            (request) => {
                const accessToken = getAccessToken();
                if (accessToken) {
                    request.headers.set("Authorization", accessToken);
                }
            },
        ],
    },
});
