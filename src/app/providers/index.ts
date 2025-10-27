import { compose } from "shared/lib/compose";

import { withAuthProvider } from "./Auth";
import { withTheme } from "./MUI";
import { withTanStackQuery } from "./TanStackQuery";
import { withToastify } from "./Toastify";

export const withProviders = compose(
    withAuthProvider,
    withTheme,
    withToastify,
    withTanStackQuery,
);
