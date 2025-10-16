import { createTheme, useTheme } from "@mui/material";
import type { LinkProps } from "@mui/material/Link";
import { forwardRef } from "react";
import { NavLink as NavRouterLink } from "react-router";
import type { NavLinkProps as NavRouterLinkProps } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
const LinkBehavior = forwardRef<
    HTMLAnchorElement,
    Omit<NavRouterLinkProps, "to"> & { href: NavRouterLinkProps["to"] }
>((props, ref) => {
    const { href, style, ...other } = props;
    const theme = useTheme();

    return (
        <NavRouterLink
            style={({ isActive }) => {
                return {
                    ...style,
                    color: isActive
                        ? theme.palette.warning.main
                        : theme.palette.primary.main,
                };
            }}
            end
            ref={ref}
            to={href}
            {...other}
        />
    );
});

LinkBehavior.displayName = "LinkBehavior";

export const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
                underline: "none",
            } as Omit<LinkProps, "className">,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});
