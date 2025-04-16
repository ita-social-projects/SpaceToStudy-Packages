import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    restoreMocks: true,
    watch: false,
    environment: "jsdom",
    setupFiles: "./tests-config/setup-tests.ts",
    coverage: {
      reporter: ["text", "lcov"],
      reportsDirectory: "./tests-config/coverage",
      all: true,
      include: [
        "packages/components/lib/**/*.{ts,tsx}",
        "packages/utils/lib/**/*.{ts,tsx}",
      ],
      exclude: [
        "**/*.stories.*",
        "**/*.d.ts",
        "packages/components/lib/components.ts",
      ],
    },
  },
});
