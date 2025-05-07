import path from "path";
import webpack from "webpack";

interface Env {
  mode: "production" | "development";
}

export default (env: Env) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? "production",
    entry: "./packages/components/lib/components.ts",
    optimization: {
      usedExports: true,
    },
    output: {
      filename: "components.esm.js",
      path: path.resolve("packages/components/dist"),
      library: {
        type: "module",
      },
      clean: true,
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
      "@mui/material": "@mui/material",
      "@mui/system": "@mui/system",
      "@mui/icons-material": "@mui/icons-material",
    },
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: (resourcePath: string) =>
                    resourcePath.endsWith(".module.scss"),
                },
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  };
  return config;
};
