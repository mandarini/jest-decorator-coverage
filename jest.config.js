module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/main.ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/fix-istanbul-decorators.js",
  },
};
