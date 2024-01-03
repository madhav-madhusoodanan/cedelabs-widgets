import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "@svgr/rollup";
import path from "path";

/**
 * mode: "development" | "production" | "test" | "demo"
 */
export default defineConfig(({ mode }) => {
  // IMPORTANT: include only the env vars starting with "CEDE_"
  const env = loadEnv(mode, process.cwd(), "CEDE_");
  const processEnvValues = Object.entries(env).reduce((prev, [key, val]) => {
    return {
      ...prev,
      [`process.env.${key}`]: JSON.stringify(val),
    };
  }, {});

  return {
    define: {
      ...processEnvValues,
      "process.env.CEDE_NODE_ENV": `"${mode}"`,
      "process.env.NODE_ENV": `"${mode}"`,
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "./src/index.ts"),
        name: "index",
        formats: ["es"],
      },
      rollupOptions: {
        external: ["react", "react-dom"],
      },
    },
    optimizeDeps: {
      exclude: ["../../core/react-utils/src/mocks"],
    },
    plugins: [
      // needed to import svg files
      svgr(),
      nodePolyfills({
        protocolImports: true,
      }),
      // generate type declarations
      dts({
        entryRoot: path.resolve(__dirname, "../../"),
        include: ["src/**/*.(ts|tsx)"],
        rollupTypes: true,
      }),
    ],
  };
});
