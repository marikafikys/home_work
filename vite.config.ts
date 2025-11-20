import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
    const isDev = command === "serve";
    const isProd = command === "build";
    console.log({ mode });

    return {
        plugins: [
            react(),
            ...(isDev
                ? [
                      checker({
                          typescript: true,
                          eslint: {
                              useFlatConfig: true,
                              lintCommand: "eslint ./src --max-warnings 0",
                              dev: {
                                  logLevel: ["error"],
                              },
                          },
                          stylelint: {
                              lintCommand:
                                  'stylelint "src/**/*.{css,scss}" --max-warnings 0',
                              dev: {
                                  logLevel: ["error"],
                              },
                          },
                      }),
                  ]
                : []),
            tsconfigPaths(),
        ],
        preview: {
            open: true,
        },
        build: {
            outDir: "dist",
            target: "es2020",
            minify: isProd ? "esbuild" : false,
            sourcemap: isProd,
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes("node_modules")) {
                            if (id.includes("react-hook-form"))
                                return "react-hook-form";
                            if (id.includes("mui")) return "mui";
                            if (id.includes("zod")) return "zod";
                            if (id.includes("yup")) return "yup";
                            if (id.includes("react-toastify"))
                                return "react-toastify";
                            if (id.includes("formik")) return "formik";
                        }
                    },
                },
            },
        },
    };
});
