/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest", {}],
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { diagnostics: { ignoreCodes: ["TS151001"] } },
    ],
  },
  setupFilesAfterEnv: ["<rootDir>/setup-test.js"],
};
