import { AuthForm } from "features/authForm";
import React from "react";

import s from "./AuthPage.module.css";

export default function AuthPage() {
    return (
        <div className={s.page}>
            <AuthForm />
        </div>
    );
}
