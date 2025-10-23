import * as yup from "yup";

import type { FormValues } from "./types";

export const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
    username: yup.string().trim().required("Имя обязательно"),
    email: yup
        .string()
        .trim()
        .email("Невалидный Email")
        .required("Email обязателен"),
    password: yup
        .string()
        .trim()
        .min(6, "Пароль должен содержать не менее 6 символов")
        .required("Пароль обязателен"),
    confirmation: yup
        .string()
        .trim()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required("Подтверждение пароля обязательно"),
    links: yup
        .array()
        .of(yup.string().url("Некорректный URL").required("Введите ссылку"))
        .default([])
        .required(),
});
