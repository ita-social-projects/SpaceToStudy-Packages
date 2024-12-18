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
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      library: "beta",
      libraryTarget: "umd",
      globalObject: "self",
      clean: true,
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  };
  return config;
};
