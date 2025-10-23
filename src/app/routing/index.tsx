import { App } from "app/App";
import AuthPage from "pages/Auth/ui/AuthPage";
import HomePage from "pages/Home/ui/HomePage";
import NotFoundPage from "pages/NotFound/ui/NotFoundPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/auth",
                element: <AuthPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);
