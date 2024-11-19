import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "./test/__mocks__/fileMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "./src/$1",
  },
};

export default config;
