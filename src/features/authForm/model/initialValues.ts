import type { FormValues } from "./types";

export const createInitialsValues = (values?: FormValues): FormValues => ({
    username: values?.username ?? "",
    email: values?.email ?? "",
    password: values?.password ?? "",
    confirmation: values?.confirmation ?? "",
    links: values?.links ?? [],
});
