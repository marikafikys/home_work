export const getAccessToken = (): string | null => {
    try {
        const jwtStr = localStorage.getItem("JWT");
        if (!jwtStr) return null;

        const jwt = JSON.parse(jwtStr);
        return typeof jwt?.access === "string" ? jwt.access : null;
    } catch (error) {
        console.warn("Не удалось получить access token:", error);
        return null;
    }
};
