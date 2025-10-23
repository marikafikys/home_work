import { compose } from "shared/lib/compose";

import { withTheme } from "./MUI";
import { withToastify } from "./Toastify";

export const withProviders = compose(withTheme, withToastify);
