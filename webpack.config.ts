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
                modules: true,
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
