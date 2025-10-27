import { App } from "app/App";
import AuthPage from "pages/Auth/ui/AuthPage";
import HomePage from "pages/Home/ui/HomePage";
import { LoginPage } from "pages/Login";
import NotFoundPage from "pages/NotFound/ui/NotFoundPage";
import { ProfilePage } from "pages/Profile";
import { PublicPage } from "pages/Public";
import RefExamplesPage from "pages/RefExamples/ui/RefExamples";
import { createBrowserRouter } from "react-router";
import { useAuth } from "shared/lib/useAuth";
import { ProtectedRoute } from "shared/ui/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute useAuthStrategy={useAuth}>
                        <HomePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/auth",
                element: <AuthPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute useAuthStrategy={useAuth}>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "public",
                element: <PublicPage />,
            },
            {
                path: "ref",
                element: <RefExamplesPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
