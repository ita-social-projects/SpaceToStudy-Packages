import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";
import { terser } from "@rollup/plugin-terser";
import path from "path";

const components = ["button"];

export default components.map((component) => {
  const componentPath = path.join(__dirname, "packages/components", component);
  const packageJson = require(path.join(componentPath, "package.json"));

  return {
    input: path.join(componentPath, "lib/index.tsx"),
    output: {
      file:'dist/index.esm.js', 
      format: "es",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        useTsconfigDeclarationDir: true,
      }),
      scss(),
      terser(),
    ],
    external: Object.keys(packageJson.dependencies),
  };
});
